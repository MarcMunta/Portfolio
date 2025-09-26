import type { Metadata } from "next";

import { ContactPageContent } from "@/components/contact/contact-page-content";
import { getDictionary } from "@/lib/data";

const defaultBundle = getDictionary();

export const metadata: Metadata = {
  title: `${defaultBundle.contactPage.title} · ${defaultBundle.persona.name}`,
  description: defaultBundle.contactPage.description,
};

export default function ContactPage() {
  return <ContactPageContent />;
}
