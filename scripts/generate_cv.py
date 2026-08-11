from __future__ import annotations

import argparse
import json
import shutil
from io import BytesIO
from pathlib import Path

import pypdfium2 as pdfium
import qrcode
from PIL import Image
from pypdf import PdfReader, PdfWriter
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PUBLIC_CV_DIR = ROOT / "public" / "docs" / "cv"
PUBLIC_PREVIEW_DIR = ROOT / "public" / "docs" / "cv-previews"
SOURCE_CV_DIR = Path(r"E:\Cole\Currículum")
PORTRAIT_PATH = ROOT / "public" / "images" / "profile" / "marc-muntane.jpg"

VISUAL_SOURCE_NAMES = {
    "es": "Marc Muntané Clarà - ES.pdf",
    "ca": "Marc Muntané Clarà - CA.pdf",
    "en": "Marc Muntané Clarà - EN.pdf",
}

PAGE_W, PAGE_H = A4
GRAPHITE = HexColor("#070806")
RAISED = HexColor("#10110E")
PAPER = HexColor("#EEECE5")
WHITE = HexColor("#FFFFFF")
INK = HexColor("#11120F")
MUTED = HexColor("#62645C")
LINE = HexColor("#C9C8C0")
LIME = HexColor("#D8FF3E")
COBALT = HexColor("#6B8CFF")

EMAIL = "marcmclara@gmail.com"
PHONE = "+34 661 184 301"
LOCATION = "Vilafranca del Penedès · Barcelona"
GITHUB = "https://github.com/MarcMunta"
LINKEDIN = "https://www.linkedin.com/in/marc-muntan%C3%A9-clar%C3%A0-ab6a0a276/"
PORTFOLIO = "https://marcmunta.github.io/Portfolio/"


COPY = {
    "es": {
        "language": "Español",
        "role": "DESARROLLADOR DE PRODUCTO · FRONTEND, MULTIPLATAFORMA E IA",
        "profile_label": "PERFIL",
        "profile": (
            "Construyo productos digitales de extremo a extremo: diseño la interfaz, "
            "conecto los datos y valido el flujo. Trabajo con React/TypeScript, Flutter, "
            "Java/Spring Boot y Python/IA local, cuidando accesibilidad y detalle."
        ),
        "projects_label": "PROYECTOS SELECCIONADOS",
        "experience_label": "EXPERIENCIA",
        "education_label": "FORMACIÓN",
        "stack_label": "CAPACIDADES CLAVE",
        "languages_label": "IDIOMAS",
        "links_label": "ENLACES",
        "ats_label": "CV ATS · LECTURA AUTOMÁTICA",
        "ats_note": "Versión de una columna optimizada para selección y lectura rápida.",
        "available": "Disponible para oportunidades junior",
        "evidence_label": "PRUEBA EN UNA MIRADA",
        "proof_stats": [("03", "proyectos"), ("06", "experiencias"), ("04", "estudios")],
        "scan_label": "Escanea para abrir el portfolio",
        "open_project": "ABRIR",
        "updated_label": "Actualizado",
        "languages": ["Español · nativo", "Catalán · nativo", "Inglés · B2"],
        "stacks": [
            ("Producto y UI", "Diseño de producto · UI/UX · accesibilidad"),
            ("Frontend", "React · TypeScript · HTML · CSS"),
            ("Multiplataforma", "Flutter · React Native · Expo"),
            ("Backend e IA", "Java · Spring Boot · Python · APIs REST"),
            ("Datos", "Supabase · SQL · JPA · IndexedDB"),
        ],
        "projects": [
            {
                "name": "KLIME",
                "meta": "Producto e-commerce · 2026",
                "description": (
                    "Storefront editorial publicado con 10 prendas, variantes, favoritos, "
                    "cesta y checkout demo persistentes; ES/CA/EN y base Supabase."
                ),
                "stack": "React 19 · TypeScript · Supabase · Product design",
                "url": "https://marcmunta.github.io/Klime/",
            },
            {
                "name": "ATLAS",
                "meta": "Producto de entrenamiento · 2026",
                "description": (
                    "PWA publicada para planificar y seguir el entrenamiento, con "
                    "persistencia offline mediante IndexedDB o AsyncStorage."
                ),
                "stack": "React Native · Expo · TypeScript · IndexedDB",
                "url": "https://marcmunta.github.io/Atlas/",
            },
            {
                "name": "FICHESTU",
                "meta": "Cliente Android + backend · 2026",
                "description": (
                    "Cliente Android nativo y backend modular con perfiles, mercado, "
                    "minijuegos y comunicación en tiempo real."
                ),
                "stack": "Kotlin · Jetpack Compose · Spring Boot · WebSocket · JPA",
                "url": "https://github.com/MarcMunta/Fichestu-Backend",
            },
        ],
        "experience": [
            ("2025–2026", "M5 Studio · Desarrollo y consultoría UX", "Cork, Irlanda", "Desarrollé y asesoré flujos UX en Flutter para web, Android e iOS · Erasmus+ · 850 h (+600 en remoto)."),
            ("2024–2025", "Viascooter · Prácticas DAW", "Barcelona", "Combiné soporte IT, desarrollo web, atención comercial y recepción · 350 h."),
            ("2023–2024", "Marc Bartra · Entrenador", "Vilafranca del Penedès", "Planifiqué y dirigí sesiones para niños de 3 a 5 años · 9 meses."),
            ("2022–2024", "Cales de Pachs · Producción", "Pacs del Penedès", "Operé procesos de secado en producción de cal · 800 h."),
            ("2022–2023", "Gestinet · Prácticas SMX", "Vilafranca del Penedès", "Atendí software, hardware, redes, ofimática, bases de datos y soporte · 350 h."),
            ("2021–2022", "Consell Esportiu · Árbitro", "Vilafranca del Penedès", "Arbitré partidos de primero a cuarto de primaria · 100 h."),
        ],
        "education": [
            ("2026–2027", "Máster en IA y Big Data", "STUCOM · Barcelona"),
            ("2025–2026", "Desarrollo de Aplicaciones Multiplataforma (DAM)", "STUCOM · Barcelona"),
            ("2023–2025", "Desarrollo de Aplicaciones Web (DAW)", "STUCOM · Barcelona"),
            ("2021–2023", "Sistemas Microinformáticos y Redes (SMX)", "STUCOM · Barcelona"),
        ],
    },
    "ca": {
        "language": "Català",
        "role": "DESENVOLUPADOR DE PRODUCTE · FRONTEND, MULTIPLATAFORMA I IA",
        "profile_label": "PERFIL",
        "profile": (
            "Construeixo productes digitals d'extrem a extrem: dissenyo la interfície, "
            "connecto les dades i valido el flux. Treballo amb React/TypeScript, Flutter, "
            "Java/Spring Boot i Python/IA local, cuidant accessibilitat i detall."
        ),
        "projects_label": "PROJECTES SELECCIONATS",
        "experience_label": "EXPERIÈNCIA",
        "education_label": "FORMACIÓ",
        "stack_label": "CAPACITATS CLAU",
        "languages_label": "IDIOMES",
        "links_label": "ENLLAÇOS",
        "ats_label": "CV ATS · LECTURA AUTOMÀTICA",
        "ats_note": "Versió d'una columna optimitzada per a selecció i lectura ràpida.",
        "available": "Disponible per a oportunitats junior",
        "evidence_label": "PROVA D'UN COP D'ULL",
        "proof_stats": [("03", "projectes"), ("06", "experiències"), ("04", "estudis")],
        "scan_label": "Escaneja per obrir el portfolio",
        "open_project": "OBRIR",
        "updated_label": "Actualitzat",
        "languages": ["Català · nadiu", "Castellà · nadiu", "Anglès · B2"],
        "stacks": [
            ("Producte i UI", "Disseny de producte · UI/UX · accessibilitat"),
            ("Frontend", "React · TypeScript · HTML · CSS"),
            ("Multiplataforma", "Flutter · React Native · Expo"),
            ("Backend i IA", "Java · Spring Boot · Python · APIs REST"),
            ("Dades", "Supabase · SQL · JPA · IndexedDB"),
        ],
        "projects": [
            {
                "name": "KLIME",
                "meta": "Producte e-commerce · 2026",
                "description": (
                    "Storefront editorial publicat amb 10 peces, variants, favorits, "
                    "cistella i checkout demo persistents; ES/CA/EN i base Supabase."
                ),
                "stack": "React 19 · TypeScript · Supabase · Product design",
                "url": "https://marcmunta.github.io/Klime/",
            },
            {
                "name": "ATLAS",
                "meta": "Producte d'entrenament · 2026",
                "description": (
                    "PWA publicada per planificar i seguir l'entrenament, amb "
                    "persistència offline mitjançant IndexedDB o AsyncStorage."
                ),
                "stack": "React Native · Expo · TypeScript · IndexedDB",
                "url": "https://marcmunta.github.io/Atlas/",
            },
            {
                "name": "FICHESTU",
                "meta": "Client Android + backend · 2026",
                "description": (
                    "Client Android nadiu i backend modular amb perfils, mercat, "
                    "minijocs i comunicació en temps real."
                ),
                "stack": "Kotlin · Jetpack Compose · Spring Boot · WebSocket · JPA",
                "url": "https://github.com/MarcMunta/Fichestu-Backend",
            },
        ],
        "experience": [
            ("2025–2026", "M5 Studio · Desenvolupament i consultoria UX", "Cork, Irlanda", "Vaig desenvolupar i assessorar fluxos UX amb Flutter per a web, Android i iOS · Erasmus+ · 850 h (+600 en remot)."),
            ("2024–2025", "Viascooter · Pràctiques DAW", "Barcelona", "Vaig combinar suport IT, desenvolupament web, atenció comercial i recepció · 350 h."),
            ("2023–2024", "Marc Bartra · Entrenador", "Vilafranca del Penedès", "Vaig planificar i dirigir sessions per a infants de 3 a 5 anys · 9 mesos."),
            ("2022–2024", "Cales de Pachs · Producció", "Pacs del Penedès", "Vaig operar processos d'assecatge en producció de calç · 800 h."),
            ("2022–2023", "Gestinet · Pràctiques SMX", "Vilafranca del Penedès", "Vaig atendre programari, maquinari, xarxes, ofimàtica, bases de dades i suport · 350 h."),
            ("2021–2022", "Consell Esportiu · Àrbitre", "Vilafranca del Penedès", "Vaig arbitrar partits de primer a quart de primària · 100 h."),
        ],
        "education": [
            ("2026–2027", "Màster en IA i Big Data", "STUCOM · Barcelona"),
            ("2025–2026", "Desenvolupament d'Aplicacions Multiplataforma (DAM)", "STUCOM · Barcelona"),
            ("2023–2025", "Desenvolupament d'Aplicacions Web (DAW)", "STUCOM · Barcelona"),
            ("2021–2023", "Sistemes Microinformàtics i Xarxes (SMX)", "STUCOM · Barcelona"),
        ],
    },
    "en": {
        "language": "English",
        "role": "PRODUCT DEVELOPER · FRONTEND, CROSS-PLATFORM & AI",
        "profile_label": "PROFILE",
        "profile": (
            "I build digital products end to end: I design the interface, connect the data, "
            "and validate the flow. I work with React/TypeScript, Flutter, Java/Spring Boot, "
            "and Python/local AI, with close attention to accessibility and detail."
        ),
        "projects_label": "SELECTED PROJECTS",
        "experience_label": "EXPERIENCE",
        "education_label": "EDUCATION",
        "stack_label": "CORE SKILLS",
        "languages_label": "LANGUAGES",
        "links_label": "LINKS",
        "ats_label": "ATS CV · MACHINE-READABLE",
        "ats_note": "Single-column version optimized for screening and quick reading.",
        "available": "Available for junior opportunities",
        "evidence_label": "PROOF AT A GLANCE",
        "proof_stats": [("03", "projects"), ("06", "roles"), ("04", "studies")],
        "scan_label": "Scan to open the portfolio",
        "open_project": "OPEN",
        "updated_label": "Updated",
        "languages": ["Spanish · native", "Catalan · native", "English · B2"],
        "stacks": [
            ("Product & UI", "Product design · UI/UX · accessibility"),
            ("Frontend", "React · TypeScript · HTML · CSS"),
            ("Cross-platform", "Flutter · React Native · Expo"),
            ("Backend & AI", "Java · Spring Boot · Python · REST APIs"),
            ("Data", "Supabase · SQL · JPA · IndexedDB"),
        ],
        "projects": [
            {
                "name": "KLIME",
                "meta": "E-commerce product · 2026",
                "description": (
                    "Published editorial storefront with 10 products, variants, favourites, "
                    "cart, and persistent demo checkout; ES/CA/EN and Supabase foundation."
                ),
                "stack": "React 19 · TypeScript · Supabase · Product design",
                "url": "https://marcmunta.github.io/Klime/",
            },
            {
                "name": "ATLAS",
                "meta": "Training product · 2026",
                "description": (
                    "Published PWA for training planning and tracking, with offline "
                    "persistence through IndexedDB or AsyncStorage."
                ),
                "stack": "React Native · Expo · TypeScript · IndexedDB",
                "url": "https://marcmunta.github.io/Atlas/",
            },
            {
                "name": "FICHESTU",
                "meta": "Android client + backend · 2026",
                "description": (
                    "Native Android client and modular backend for profiles, a marketplace, "
                    "minigames, and realtime communication."
                ),
                "stack": "Kotlin · Jetpack Compose · Spring Boot · WebSocket · JPA",
                "url": "https://github.com/MarcMunta/Fichestu-Backend",
            },
        ],
        "experience": [
            ("2025–2026", "M5 Studio · Development & UX consulting", "Cork, Ireland", "Developed and advised UX flows in Flutter for web, Android, and iOS · Erasmus+ · 850 h (+600 remote)."),
            ("2024–2025", "Viascooter · DAW internship", "Barcelona", "Combined IT support, web development, customer service, and reception · 350 h."),
            ("2023–2024", "Marc Bartra · Coach", "Vilafranca del Penedès", "Planned and led sessions for children aged 3 to 5 · 9 months."),
            ("2022–2024", "Cales de Pachs · Production", "Pacs del Penedès", "Operated drying processes in lime production · 800 h."),
            ("2022–2023", "Gestinet · SMX internship", "Vilafranca del Penedès", "Handled software, hardware, networks, office tools, databases, and support · 350 h."),
            ("2021–2022", "Consell Esportiu · Referee", "Vilafranca del Penedès", "Refereed matches from first to fourth year of primary school · 100 h."),
        ],
        "education": [
            ("2026–2027", "Master's in AI and Big Data", "STUCOM · Barcelona"),
            ("2025–2026", "Cross-platform Application Development (DAM)", "STUCOM · Barcelona"),
            ("2023–2025", "Web Application Development (DAW)", "STUCOM · Barcelona"),
            ("2021–2023", "Microcomputer Systems and Networks (SMX)", "STUCOM · Barcelona"),
        ],
    },
}


def normalize_value(value):
    if isinstance(value, str):
        return value.replace("–", "-").replace("—", "-").replace("‑", "-")
    if isinstance(value, list):
        return [normalize_value(item) for item in value]
    if isinstance(value, tuple):
        return tuple(normalize_value(item) for item in value)
    if isinstance(value, dict):
        return {key: normalize_value(item) for key, item in value.items()}
    return value


COPY = normalize_value(COPY)


def register_fonts() -> None:
    pdfmetrics.registerFont(TTFont("Body", r"C:\Windows\Fonts\arial.ttf"))
    pdfmetrics.registerFont(TTFont("BodyBold", r"C:\Windows\Fonts\arialbd.ttf"))
    try:
        pdfmetrics.registerFont(TTFont("Display", r"C:\Windows\Fonts\bahnschrift.ttf"))
    except Exception:
        pdfmetrics.registerFont(TTFont("Display", r"C:\Windows\Fonts\arialbd.ttf"))


def paragraph(
    pdf: canvas.Canvas,
    text: str,
    x: float,
    y_top: float,
    width: float,
    *,
    font: str = "Body",
    size: float = 8.5,
    leading: float | None = None,
    color=INK,
    max_height: float = 200,
    alignment: int = TA_LEFT,
) -> float:
    text = normalize_value(text)
    style = ParagraphStyle(
        "inline",
        fontName=font,
        fontSize=size,
        leading=leading or size * 1.32,
        textColor=color,
        alignment=alignment,
        spaceAfter=0,
        spaceBefore=0,
    )
    item = Paragraph(text, style)
    _, height = item.wrap(width, max_height)
    item.drawOn(pdf, x, y_top - height)
    return height


def section_label(pdf: canvas.Canvas, label: str, x: float, y: float, width: float, *, light=False) -> float:
    label = normalize_value(label)
    color = WHITE if light else INK
    rule = HexColor("#3A3B35") if light else LINE
    pdf.setFillColor(color)
    pdf.setFont("BodyBold", 7.4)
    pdf.drawString(x, y, label)
    label_width = pdfmetrics.stringWidth(label, "BodyBold", 7.4)
    pdf.setStrokeColor(rule)
    pdf.setLineWidth(0.55)
    pdf.line(x + label_width + 9, y + 2.2, x + width, y + 2.2)
    return y - 13


def draw_cover_image(pdf: canvas.Canvas, path: Path, x: float, y: float, width: float, height: float) -> None:
    with Image.open(path) as source:
        source_w, source_h = source.size
    target_ratio = width / height
    source_ratio = source_w / source_h
    if source_ratio > target_ratio:
        draw_h = height
        draw_w = height * source_ratio
        draw_x = x - (draw_w - width) / 2
        draw_y = y
    else:
        draw_w = width
        draw_h = width / source_ratio
        draw_x = x
        draw_y = y - (draw_h - height) / 2
    pdf.saveState()
    path_obj = pdf.beginPath()
    path_obj.rect(x, y, width, height)
    pdf.clipPath(path_obj, stroke=0, fill=0)
    pdf.drawImage(ImageReader(str(path)), draw_x, draw_y, draw_w, draw_h, mask="auto")
    pdf.restoreState()


def add_link(pdf: canvas.Canvas, label: str, url: str, x: float, y: float, *, size=8.0, color=INK) -> float:
    label = normalize_value(label)
    pdf.setFont("BodyBold", size)
    pdf.setFillColor(color)
    pdf.drawString(x, y, label)
    width = pdfmetrics.stringWidth(label, "BodyBold", size)
    pdf.linkURL(url, (x, y - 2, x + width, y + size + 1), relative=0)
    return width


def draw_qr_code(pdf: canvas.Canvas, url: str, x: float, y: float, size: float) -> None:
    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=8, border=2)
    qr.add_data(url)
    qr.make(fit=True)
    image = qr.make_image(fill_color="#070806", back_color="#D8FF3E").convert("RGB")
    buffer = BytesIO()
    image.save(buffer, format="PNG")
    buffer.seek(0)
    pdf.drawImage(ImageReader(buffer), x, y, size, size, mask="auto")
    pdf.linkURL(url, (x, y, x + size, y + size), relative=0)


def setup_metadata(pdf: canvas.Canvas, language: str, kind: str) -> None:
    pdf.setTitle(f"Marc Muntané Clarà - CV {language.upper()} - {kind.upper()}")
    pdf.setAuthor("Marc Muntané Clarà")
    pdf.setSubject("Product developer portfolio and professional experience")
    pdf.setKeywords("Marc Muntané, frontend, product, React, TypeScript, Flutter, Java, Python")


def draw_visual_cv(path: Path, language: str) -> None:
    copy = COPY[language]
    pdf = canvas.Canvas(str(path), pagesize=A4, pageCompression=1)
    setup_metadata(pdf, language, "visual")
    header_bottom = 651
    rail_width = 201
    margin = 30
    rail_inner_width = 147
    right_x = 222
    right_width = PAGE_W - right_x - margin

    pdf.setFillColor(PAPER)
    pdf.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    pdf.setFillColor(GRAPHITE)
    pdf.rect(0, 0, rail_width, PAGE_H, stroke=0, fill=1)
    pdf.rect(0, header_bottom, PAGE_W, PAGE_H - header_bottom, stroke=0, fill=1)
    pdf.setFillColor(COBALT)
    pdf.rect(0, header_bottom, 9, PAGE_H - header_bottom, stroke=0, fill=1)

    pdf.setFillColor(LIME)
    pdf.rect(margin, PAGE_H - 40, 30, 15, stroke=0, fill=1)
    pdf.setFillColor(GRAPHITE)
    pdf.setFont("BodyBold", 7.3)
    pdf.drawCentredString(margin + 15, PAGE_H - 36.1, "MM")
    pdf.setFillColor(WHITE)
    pdf.setFont("BodyBold", 7.3)
    pdf.drawString(margin + 39, PAGE_H - 36.5, "PRODUCT PROOF / CV 2026")
    pdf.drawRightString(PAGE_W - margin, PAGE_H - 36.5, f"{copy['language'].upper()} / 01")

    pdf.setFont("Display", 31.5)
    pdf.drawString(margin, PAGE_H - 82, "MARC MUNTANÉ CLARÀ")
    paragraph(
        pdf,
        copy["role"],
        margin,
        PAGE_H - 98,
        392,
        font="BodyBold",
        size=9.7,
        leading=12.0,
        color=COBALT,
    )

    portrait_size = 104
    portrait_x = PAGE_W - margin - portrait_size
    portrait_y = 674
    pdf.setFillColor(PAPER)
    pdf.rect(portrait_x - 4, portrait_y - 4, portrait_size + 8, portrait_size + 8, stroke=0, fill=1)
    draw_cover_image(pdf, PORTRAIT_PATH, portrait_x, portrait_y, portrait_size, portrait_size)
    pdf.setFillColor(LIME)
    pdf.rect(portrait_x - 4, portrait_y - 4, 24, 4, stroke=0, fill=1)

    pdf.setFillColor(WHITE)
    pdf.setFont("Body", 8.2)
    pdf.drawString(margin, 681, EMAIL)
    pdf.linkURL(f"mailto:{EMAIL}", (margin, 679, margin + pdfmetrics.stringWidth(EMAIL, "Body", 8.2), 690), relative=0)
    pdf.setFillColor(LIME)
    pdf.circle(150, 683.5, 1.4, stroke=0, fill=1)
    pdf.setFillColor(WHITE)
    pdf.drawString(158, 681, PHONE)
    pdf.linkURL("tel:+34661184301", (158, 679, 158 + pdfmetrics.stringWidth(PHONE, "Body", 8.2), 690), relative=0)
    pdf.setFillColor(LINE)
    pdf.setFont("Body", 7.7)
    pdf.drawString(margin, 663, LOCATION)

    left_y = section_label(pdf, copy["profile_label"], margin, 626, rail_inner_width, light=True)
    profile_height = paragraph(pdf, copy["profile"], margin, left_y, rail_inner_width, size=8.35, leading=11.0, color=WHITE)
    left_y -= profile_height + 17

    left_y = section_label(pdf, copy["evidence_label"], margin, left_y, rail_inner_width, light=True)
    for number, label in copy["proof_stats"]:
        pdf.setFillColor(LIME)
        pdf.setFont("Display", 16.5)
        pdf.drawString(margin, left_y - 2, number)
        pdf.setFillColor(WHITE)
        pdf.setFont("BodyBold", 7.5)
        pdf.drawString(margin + 35, left_y + 1.5, label.upper())
        pdf.setStrokeColor(HexColor("#30312D"))
        pdf.line(margin + 35, left_y - 5, margin + rail_inner_width, left_y - 5)
        left_y -= 27
    left_y -= 3

    left_y = section_label(pdf, copy["stack_label"], margin, left_y, rail_inner_width, light=True)
    for label, value in copy["stacks"]:
        pdf.setFont("BodyBold", 7.8)
        pdf.setFillColor(WHITE)
        pdf.drawString(margin, left_y, label)
        left_y -= 9.7
        height = paragraph(pdf, value, margin, left_y, rail_inner_width, size=7.55, leading=9.5, color=LINE)
        left_y -= height + 5.5

    left_y -= 2
    left_y = section_label(pdf, copy["languages_label"], margin, left_y, rail_inner_width, light=True)
    for item in copy["languages"]:
        pdf.setFillColor(LIME)
        pdf.circle(margin + 2, left_y + 2.6, 1.25, stroke=0, fill=1)
        pdf.setFillColor(WHITE)
        pdf.setFont("Body", 7.8)
        pdf.drawString(margin + 9, left_y, item)
        left_y -= 12

    left_y -= 3
    left_y = section_label(pdf, copy["links_label"], margin, left_y, rail_inner_width, light=True)
    add_link(pdf, "GitHub", GITHUB, margin, left_y, size=7.6, color=WHITE)
    add_link(pdf, "LinkedIn", LINKEDIN, margin + 49, left_y, size=7.6, color=WHITE)
    left_y -= 14
    add_link(pdf, "marcmunta.github.io/Portfolio", PORTFOLIO, margin, left_y, size=7.1, color=LINE)

    qr_size = 64
    qr_y = 38
    if left_y < qr_y + qr_size + 18:
        raise ValueError(f"Left rail content overlaps the QR block in the {language} visual CV")
    draw_qr_code(pdf, PORTFOLIO, margin, qr_y, qr_size)
    pdf.setFillColor(LIME)
    pdf.setFont("BodyBold", 7.4)
    pdf.drawString(margin + qr_size + 10, qr_y + qr_size - 10, "PORTFOLIO")
    paragraph(
        pdf,
        copy["scan_label"],
        margin + qr_size + 10,
        qr_y + qr_size - 18,
        rail_inner_width - qr_size - 10,
        size=7.25,
        leading=9.2,
        color=WHITE,
    )

    right_y = section_label(pdf, copy["projects_label"], right_x, 626, right_width)
    for index, project in enumerate(copy["projects"], start=1):
        pdf.setFillColor(COBALT)
        pdf.rect(right_x, right_y - 13, 25, 18, stroke=0, fill=1)
        pdf.setFillColor(WHITE)
        pdf.setFont("BodyBold", 7.3)
        pdf.drawCentredString(right_x + 12.5, right_y - 7.1, f"0{index}")
        item_x = right_x + 34
        pdf.setFillColor(INK)
        pdf.setFont("Display", 12.8)
        pdf.drawString(item_x, right_y, project["name"])
        name_width = pdfmetrics.stringWidth(project["name"], "Display", 12.8)
        pdf.setFillColor(COBALT)
        pdf.setFont("BodyBold", 7.2)
        pdf.drawString(item_x + name_width + 8, right_y + 1, project["meta"])
        pdf.setFillColor(MUTED)
        pdf.setFont("BodyBold", 7.1)
        pdf.drawRightString(right_x + right_width, right_y + 1, copy["open_project"])
        pdf.linkURL(project["url"], (right_x, right_y - 14, right_x + right_width, right_y + 8), relative=0)
        right_y -= 14
        height = paragraph(pdf, project["description"], item_x, right_y, right_width - 34, size=8.15, leading=10.2, color=INK)
        right_y -= height + 1
        height = paragraph(pdf, project["stack"], item_x, right_y, right_width - 34, font="BodyBold", size=7.15, leading=8.8, color=MUTED)
        right_y -= height + 7
        pdf.setStrokeColor(LINE)
        pdf.line(item_x, right_y + 2, right_x + right_width, right_y + 2)
        right_y -= 5

    right_y -= 2
    right_y = section_label(pdf, copy["experience_label"], right_x, right_y, right_width)
    period_width = 58
    for period, title, location, description in copy["experience"]:
        pdf.setFillColor(COBALT)
        pdf.setFont("BodyBold", 7.45)
        pdf.drawString(right_x, right_y, period)
        item_x = right_x + period_width
        pdf.setFillColor(INK)
        pdf.setFont("BodyBold", 8.7)
        pdf.drawString(item_x, right_y, title)
        right_y -= 10.5
        meta = f"{location} · {description}"
        height = paragraph(pdf, meta, item_x, right_y, right_width - period_width, size=7.7, leading=9.45, color=MUTED)
        right_y -= height + 6.2

    education_panel_y = 28
    education_panel_height = 168
    if right_y < education_panel_y + education_panel_height + 8:
        raise RuntimeError(f"Visual CV content collides with education panel for {language}: y={right_y:.1f}")

    pdf.setFillColor(COBALT)
    pdf.rect(rail_width, education_panel_y, PAGE_W - rail_width, education_panel_height, stroke=0, fill=1)
    panel_x = right_x
    panel_width = right_width
    panel_top = education_panel_y + education_panel_height - 21
    pdf.setFillColor(GRAPHITE)
    pdf.setFont("BodyBold", 7.5)
    pdf.drawString(panel_x, panel_top, copy["education_label"])
    label_width = pdfmetrics.stringWidth(copy["education_label"], "BodyBold", 7.5)
    pdf.setStrokeColor(HexColor("#26345B"))
    pdf.line(panel_x + label_width + 10, panel_top + 2.2, panel_x + panel_width, panel_top + 2.2)

    education_gap = 16
    education_col_width = (panel_width - education_gap) / 2
    for index, (period, title, institution) in enumerate(copy["education"]):
        column = index % 2
        row = index // 2
        item_x = panel_x + column * (education_col_width + education_gap)
        item_y = panel_top - 23 - row * 62
        pdf.setFillColor(GRAPHITE)
        pdf.setFont("BodyBold", 7.35)
        pdf.drawString(item_x, item_y, period)
        title_height = paragraph(
            pdf,
            title,
            item_x,
            item_y - 15,
            education_col_width,
            font="BodyBold",
            size=8.25,
            leading=9.6,
            color=GRAPHITE,
        )
        pdf.setFillColor(HexColor("#26345B"))
        pdf.setFont("Body", 7.15)
        pdf.drawString(item_x, item_y - 24 - title_height, institution)

    pdf.setFillColor(GRAPHITE)
    pdf.rect(0, 0, PAGE_W, 28, stroke=0, fill=1)
    pdf.setFillColor(LIME)
    pdf.circle(30, 14, 2.3, stroke=0, fill=1)
    pdf.setFillColor(WHITE)
    pdf.setFont("BodyBold", 7.45)
    pdf.drawString(39, 11.2, copy["available"])
    pdf.setFont("Body", 7.2)
    pdf.drawRightString(PAGE_W - 30, 11.2, "ES / CA / EN · marcmunta.github.io/Portfolio")
    pdf.save()


def draw_ats_cv(path: Path, language: str) -> None:
    copy = COPY[language]
    pdf = canvas.Canvas(str(path), pagesize=A4, pageCompression=1)
    setup_metadata(pdf, language, "ats")
    margin = 42
    width = PAGE_W - margin * 2

    pdf.setFillColor(WHITE)
    pdf.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    pdf.setFillColor(GRAPHITE)
    pdf.rect(0, PAGE_H - 7, PAGE_W, 7, stroke=0, fill=1)
    pdf.setFillColor(LIME)
    pdf.rect(0, PAGE_H - 7, 118, 7, stroke=0, fill=1)

    y = PAGE_H - 42
    pdf.setFillColor(INK)
    pdf.setFont("Display", 25)
    pdf.drawString(margin, y, "MARC MUNTANÉ CLARÀ")
    pdf.setFillColor(MUTED)
    pdf.setFont("BodyBold", 9.0)
    pdf.drawRightString(PAGE_W - margin, y + 4, copy["ats_label"])
    y -= 18
    pdf.setFillColor(INK)
    pdf.setFont("BodyBold", 9.7)
    pdf.drawString(margin, y, copy["role"])
    y -= 17
    pdf.setFont("Body", 8.9)
    contact = f"{EMAIL}  ·  {PHONE}  ·  {LOCATION}"
    pdf.drawString(margin, y, contact)
    pdf.linkURL(f"mailto:{EMAIL}", (margin, y - 2, margin + pdfmetrics.stringWidth(EMAIL, "Body", 8.9), y + 9), relative=0)
    y -= 12
    links = "github.com/MarcMunta  ·  linkedin.com/in/marc-muntané-clarà  ·  marcmunta.github.io/Portfolio"
    pdf.setFillColor(MUTED)
    pdf.setFont("Body", 8.35)
    pdf.drawString(margin, y, links)
    pdf.linkURL(GITHUB, (margin, y - 2, margin + 102, y + 8), relative=0)
    pdf.linkURL(LINKEDIN, (margin + 112, y - 2, margin + 282, y + 8), relative=0)
    pdf.linkURL(PORTFOLIO, (margin + 292, y - 2, PAGE_W - margin, y + 8), relative=0)
    y -= 17
    pdf.setStrokeColor(LINE)
    pdf.line(margin, y, PAGE_W - margin, y)
    y -= 16

    y = section_label(pdf, copy["profile_label"], margin, y, width)
    height = paragraph(pdf, copy["profile"], margin, y, width, size=9.35, leading=12.5, color=INK)
    y -= height + 16

    y = section_label(pdf, copy["stack_label"], margin, y, width)
    for label, value in copy["stacks"]:
        line = f"<b>{label}:</b> {value}"
        height = paragraph(pdf, line, margin, y, width, size=8.9, leading=11.4, color=INK)
        y -= height + 3
    y -= 9

    y = section_label(pdf, copy["projects_label"], margin, y, width)
    for project in copy["projects"]:
        pdf.setFillColor(INK)
        pdf.setFont("BodyBold", 9.7)
        pdf.drawString(margin, y, f"{project['name']} - {project['meta']}")
        y -= 11.5
        height = paragraph(pdf, project["description"], margin + 11, y, width - 11, size=8.8, leading=11.1, color=INK)
        y -= height + 2
        height = paragraph(pdf, project["stack"], margin + 11, y, width - 11, font="BodyBold", size=8.15, leading=9.8, color=MUTED)
        y -= height + 8.5
        display_url = project["url"].removeprefix("https://").rstrip("/")
        add_link(pdf, display_url, project["url"], margin + 11, y, size=8.05, color=COBALT)
        y -= 15

    y = section_label(pdf, copy["experience_label"], margin, y, width)
    for period, title, location, description in copy["experience"]:
        pdf.setFillColor(INK)
        pdf.setFont("BodyBold", 9.15)
        pdf.drawString(margin, y, f"{period} · {title} · {location}")
        y -= 11
        height = paragraph(pdf, description, margin + 11, y, width - 11, size=8.55, leading=10.7, color=MUTED)
        y -= height + 6.5

    y = section_label(pdf, copy["education_label"], margin, y, width)
    for period, title, institution in copy["education"]:
        pdf.setFillColor(INK)
        pdf.setFont("BodyBold", 8.75)
        pdf.drawString(margin, y, f"{period} · {title} · {institution}")
        y -= 14.2

    y -= 2
    y = section_label(pdf, copy["languages_label"], margin, y, width)
    pdf.setFillColor(INK)
    pdf.setFont("Body", 8.9)
    pdf.drawString(margin, y, "  ·  ".join(copy["languages"]))

    pdf.setFillColor(GRAPHITE)
    pdf.rect(0, 0, PAGE_W, 25, stroke=0, fill=1)
    pdf.setFillColor(LIME)
    pdf.circle(margin + 2, 12.6, 2.1, stroke=0, fill=1)
    pdf.setFillColor(WHITE)
    pdf.setFont("BodyBold", 7.2)
    pdf.drawString(margin + 10, 9.5, copy["available"])
    pdf.drawRightString(PAGE_W - margin, 9.5, f"{copy['updated_label']} · 2026.08")
    pdf.save()


def merge_pdfs(paths: list[Path], output: Path, subject: str) -> None:
    writer = PdfWriter()
    for path in paths:
        reader = PdfReader(str(path))
        for page in reader.pages:
            writer.add_page(page)
    writer.add_metadata({
        "/Title": "Marc Muntané Clarà - CV ES CA EN",
        "/Author": "Marc Muntané Clarà",
        "/Subject": subject,
    })
    with output.open("wb") as stream:
        writer.write(stream)


def publish_outputs() -> None:
    PUBLIC_CV_DIR.mkdir(parents=True, exist_ok=True)
    visual_names = {
        "es": "marc-muntane-clara-cv-es.pdf",
        "ca": "marc-muntane-clara-cv-ca.pdf",
        "en": "marc-muntane-clara-cv-en.pdf",
    }
    ats_names = {
        "es": "marc-muntane-clara-cv-es-ats.pdf",
        "ca": "marc-muntane-clara-cv-ca-ats.pdf",
        "en": "marc-muntane-clara-cv-en-ats.pdf",
    }
    for language in COPY:
        shutil.copy2(OUTPUT_DIR / f"cv-{language}-visual.pdf", PUBLIC_CV_DIR / visual_names[language])
        shutil.copy2(OUTPUT_DIR / f"cv-{language}-ats.pdf", PUBLIC_CV_DIR / ats_names[language])

    shutil.copy2(OUTPUT_DIR / "cv-general-visual.pdf", PUBLIC_CV_DIR / "marc-muntane-clara-cv.pdf")
    shutil.copy2(OUTPUT_DIR / "cv-general-ats.pdf", PUBLIC_CV_DIR / "marc-muntane-clara-cv-ats.pdf")


def render_preview_pages(pdf_path: Path, target_dir: Path, prefix: str) -> list[str]:
    target_dir.mkdir(parents=True, exist_ok=True)
    document = pdfium.PdfDocument(str(pdf_path))
    rendered: list[str] = []

    for page_index in range(len(document)):
        page = document[page_index]
        bitmap = page.render(scale=2.0)
        image = bitmap.to_pil().convert("RGB")
        output_path = target_dir / f"{prefix}-page-{page_index + 1}.png"
        image.save(output_path, format="PNG", optimize=True)
        rendered.append(output_path.relative_to(ROOT / "public").as_posix())
        bitmap.close()
        page.close()

    document.close()
    return rendered


def publish_previews() -> None:
    manifest: dict[str, object] = {"version": 2, "formats": {}}
    formats = manifest["formats"]

    for language in COPY:
        language_dir = PUBLIC_PREVIEW_DIR / language
        visual_pages = render_preview_pages(
            PUBLIC_CV_DIR / f"marc-muntane-clara-cv-{language}.pdf",
            language_dir,
            "visual",
        )
        ats_pages = render_preview_pages(
            PUBLIC_CV_DIR / f"marc-muntane-clara-cv-{language}-ats.pdf",
            language_dir,
            "ats",
        )
        shutil.copy2(language_dir / "visual-page-1.png", language_dir / "page-1.png")
        formats[language] = {
            "visual": {
                "pdf": f"docs/cv/marc-muntane-clara-cv-{language}.pdf",
                "pages": visual_pages,
            },
            "ats": {
                "pdf": f"docs/cv/marc-muntane-clara-cv-{language}-ats.pdf",
                "pages": ats_pages,
            },
        }

    general_dir = PUBLIC_PREVIEW_DIR / "general"
    general_visual_pages = render_preview_pages(
        PUBLIC_CV_DIR / "marc-muntane-clara-cv.pdf",
        general_dir,
        "visual",
    )
    general_ats_pages = render_preview_pages(
        PUBLIC_CV_DIR / "marc-muntane-clara-cv-ats.pdf",
        general_dir,
        "ats",
    )
    for page_index, source in enumerate(general_visual_pages, start=1):
        source_path = ROOT / "public" / source
        shutil.copy2(source_path, general_dir / f"page-{page_index}.png")
    formats["general"] = {
        "visual": {
            "pdf": "docs/cv/marc-muntane-clara-cv.pdf",
            "pages": general_visual_pages,
        },
        "ats": {
            "pdf": "docs/cv/marc-muntane-clara-cv-ats.pdf",
            "pages": general_ats_pages,
        },
    }

    PUBLIC_PREVIEW_DIR.mkdir(parents=True, exist_ok=True)
    with (PUBLIC_PREVIEW_DIR / "manifest.json").open("w", encoding="utf-8", newline="\n") as stream:
        stream.write(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n")


def validate_pdfs(paths: list[Path]) -> None:
    for path in paths:
        reader = PdfReader(str(path))
        if len(reader.pages) != 1:
            raise RuntimeError(f"Expected one page in {path}, found {len(reader.pages)}")
        box = reader.pages[0].mediabox
        if abs(float(box.width) - PAGE_W) > 1.0 or abs(float(box.height) - PAGE_H) > 1.0:
            raise RuntimeError(f"Unexpected page size in {path}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate Marc Muntané's visual and ATS CVs.")
    parser.add_argument("--no-publish", action="store_true", help="Keep outputs only under output/pdf.")
    args = parser.parse_args()

    register_fonts()
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    generated: list[Path] = []
    for language in COPY:
        visual_path = OUTPUT_DIR / f"cv-{language}-visual.pdf"
        ats_path = OUTPUT_DIR / f"cv-{language}-ats.pdf"
        visual_source = SOURCE_CV_DIR / VISUAL_SOURCE_NAMES[language]
        if not visual_source.exists():
            raise FileNotFoundError(f"Missing Canva visual CV source: {visual_source}")
        shutil.copy2(visual_source, visual_path)
        draw_ats_cv(ats_path, language)
        generated.extend([visual_path, ats_path])

    validate_pdfs(generated)
    merge_pdfs(
        [OUTPUT_DIR / f"cv-{language}-visual.pdf" for language in ("es", "en", "ca")],
        OUTPUT_DIR / "cv-general-visual.pdf",
        "Multilingual visual curriculum vitae",
    )
    merge_pdfs(
        [OUTPUT_DIR / f"cv-{language}-ats.pdf" for language in ("es", "en", "ca")],
        OUTPUT_DIR / "cv-general-ats.pdf",
        "Multilingual ATS curriculum vitae",
    )
    if not args.no_publish:
        publish_outputs()
        publish_previews()
    print("Generated:")
    for path in [*generated, OUTPUT_DIR / "cv-general-visual.pdf", OUTPUT_DIR / "cv-general-ats.pdf"]:
        print(path)


if __name__ == "__main__":
    main()
