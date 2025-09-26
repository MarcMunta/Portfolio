import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(12),
});

let transporter: nodemailer.Transporter | null = null;

function ensureTransporter() {
  if (transporter) {
    return transporter;
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_SECURE } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    return null;
  }

  const port = Number(SMTP_PORT);
  const secure = SMTP_SECURE ? SMTP_SECURE === "true" : port === 465;

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });

  return transporter;
}

export async function POST(request: Request) {
  const mailer = ensureTransporter();

  if (!mailer) {
    console.error("SMTP configuration missing");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 },
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const result = contactSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid form data", details: result.error.flatten() },
      { status: 400 },
    );
  }

  const { name, email, message } = result.data;
  const toAddress = process.env.CONTACT_RECIPIENT ?? "marcmclara@gmail.com";
  const fromAddress = process.env.SMTP_FROM ?? process.env.SMTP_USER ?? "noreply@example.com";

  const plainText = [
    "Nuevo mensaje recibido desde el portfolio",
    "",
    `Nombre: ${name}`,
    `Email: ${email}`,
    "",
    "Mensaje:",
    message,
  ].join("\n");

  const safeHtml = message
    .split(/\n+/)
    .map((line) => line.replace(/</g, "&lt;").replace(/>/g, "&gt;"))
    .map((line) => `<p>${line || "&nbsp;"}</p>`)
    .join("");

  try {
    await mailer.sendMail({
      from: fromAddress.includes("<") ? fromAddress : `Portfolio Website <${fromAddress}>`,
      replyTo: email,
      to: toAddress,
      subject: `Nuevo contacto en el portfolio: ${name}`,
      text: plainText,
      html: `
        <div>
          <p><strong>Nuevo mensaje recibido desde el portfolio</strong></p>
          <p><strong>Nombre:</strong> ${name}<br /><strong>Email:</strong> ${email}</p>
          ${safeHtml}
        </div>
      `,
    });
  } catch (error) {
    console.error("Error sending contact email", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
