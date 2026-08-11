from __future__ import annotations

import json
from pathlib import Path

import pdfplumber
from PIL import Image
from pypdf import PdfReader

from generate_cv import (
    COPY,
    EMAIL,
    GITHUB,
    LINKEDIN,
    OUTPUT_DIR,
    PAGE_H,
    PAGE_W,
    PORTFOLIO,
    PUBLIC_CV_DIR,
    PUBLIC_PREVIEW_DIR,
    SOURCE_CV_DIR,
    VISUAL_SOURCE_NAMES,
)


ROOT = Path(__file__).resolve().parents[1]
LANGUAGES = ("es", "ca", "en")
FORMATS = ("visual", "ats")
FORBIDDEN_COPY = (
    "08720",
    "maps.google",
    "objetivo laboral",
    "soft skills",
    "avanzado",
    "intermedio",
)
REQUIRED_EVIDENCE = (
    "KLIME",
    "ATLAS",
    "FICHESTU",
    "M5 Studio",
    "Viascooter",
    "Cales de Pachs",
    "Gestinet",
    "STUCOM",
)
VISUAL_REQUIRED_EVIDENCE = {
    "es": ("DESARROLLADOR WEB Y MULTIPLATAFORMA", "EXPERIENCIA LABORAL", "FORMACIÓN ACADÉMICA"),
    "ca": ("DESENVOLUPADOR WEB I MULTIPLATAFORMA", "EXPERIÈNCIA LABORAL", "FORMACIÓ ACADÉMICA"),
    "en": ("WEB AND MULTIPLATFORM DEVELOPER", "WORK EXPERIENCE", "EDUCATION"),
}


def assert_pdf_contract(path: Path, *, expected_pages: int) -> None:
    if not path.exists() or path.stat().st_size < 10_000:
        raise AssertionError(f"Missing or unexpectedly small PDF: {path}")

    reader = PdfReader(str(path))
    if len(reader.pages) != expected_pages:
        raise AssertionError(f"Expected {expected_pages} page(s) in {path}, found {len(reader.pages)}")

    for page in reader.pages:
        box = page.mediabox
        if abs(float(box.width) - PAGE_W) > 1.0 or abs(float(box.height) - PAGE_H) > 1.0:
            raise AssertionError(f"Unexpected page size in {path}")


def assert_localized_pdf(language: str, variant: str) -> None:
    path = OUTPUT_DIR / f"cv-{language}-{variant}.pdf"
    assert_pdf_contract(path, expected_pages=1)

    with pdfplumber.open(path) as document:
        page = document.pages[0]
        text = page.extract_text() or ""
        lower_text = text.lower()
        sizes = [float(char["size"]) for char in page.chars if char.get("text", "").strip()]

    required_evidence = REQUIRED_EVIDENCE if variant == "ats" else VISUAL_REQUIRED_EVIDENCE[language]
    for evidence in required_evidence:
        if evidence not in text:
            raise AssertionError(f"Missing evidence '{evidence}' in {path}")
    if variant == "ats":
        for forbidden in FORBIDDEN_COPY:
            if forbidden in lower_text:
                raise AssertionError(f"Forbidden legacy copy '{forbidden}' found in {path}")
    minimum_size = 7.0 if variant == "ats" else 6.5
    if not sizes or min(sizes) < minimum_size:
        raise AssertionError(f"Body copy below {minimum_size}pt in {path}: {min(sizes) if sizes else 'no text'}")

    copy = COPY[language]
    if variant == "ats" and copy["ats_label"] not in text:
        raise AssertionError(f"Missing ATS identity label in {path}: {copy['ats_label']}")

    annotations = PdfReader(str(path)).pages[0].get("/Annots", [])
    if len(annotations) < 4:
        raise AssertionError(f"Expected at least four working links in {path}, found {len(annotations)}")

    annotation_urls = {
        str(annotation.get_object().get("/A", {}).get("/URI", ""))
        for annotation in annotations
        if annotation.get_object().get("/A")
    }
    if variant == "ats":
        expected_urls = {
            f"mailto:{EMAIL}",
            GITHUB,
            LINKEDIN,
            PORTFOLIO,
            *(project["url"] for project in copy["projects"]),
        }
    else:
        expected_urls = {LINKEDIN, PORTFOLIO}
    missing_urls = expected_urls - annotation_urls
    if missing_urls:
        raise AssertionError(f"Missing working link targets in {path}: {sorted(missing_urls)}")

    if variant == "visual":
        source_path = SOURCE_CV_DIR / VISUAL_SOURCE_NAMES[language]
        if path.read_bytes() != source_path.read_bytes():
            raise AssertionError(f"Visual CV is not the supplied Canva source: {path}")

    if variant == "ats":
        ordered_sections = (
            copy["profile_label"],
            copy["stack_label"],
            copy["projects_label"],
            copy["experience_label"],
            copy["education_label"],
            copy["languages_label"],
        )
        positions = [text.find(section) for section in ordered_sections]
        if -1 in positions or positions != sorted(positions):
            raise AssertionError(f"ATS reading order is not stable in {path}: {positions}")


def assert_published_files() -> None:
    for language in LANGUAGES:
        public_names = {
            "visual": f"marc-muntane-clara-cv-{language}.pdf",
            "ats": f"marc-muntane-clara-cv-{language}-ats.pdf",
        }
        for variant, public_name in public_names.items():
            output_path = OUTPUT_DIR / f"cv-{language}-{variant}.pdf"
            public_path = PUBLIC_CV_DIR / public_name
            if output_path.read_bytes() != public_path.read_bytes():
                raise AssertionError(f"Published PDF is stale: {public_path}")

            preview_path = PUBLIC_PREVIEW_DIR / language / f"{variant}-page-1.png"
            with Image.open(preview_path) as image:
                if image.width < 1_000 or image.height < 1_400:
                    raise AssertionError(f"Preview resolution is too small: {preview_path} ({image.size})")

    general_pairs = (
        (OUTPUT_DIR / "cv-general-visual.pdf", PUBLIC_CV_DIR / "marc-muntane-clara-cv.pdf"),
        (OUTPUT_DIR / "cv-general-ats.pdf", PUBLIC_CV_DIR / "marc-muntane-clara-cv-ats.pdf"),
    )
    for output_path, public_path in general_pairs:
        assert_pdf_contract(output_path, expected_pages=3)
        if output_path.read_bytes() != public_path.read_bytes():
            raise AssertionError(f"Published multilingual PDF is stale: {public_path}")

    manifest = json.loads((PUBLIC_PREVIEW_DIR / "manifest.json").read_text(encoding="utf-8"))
    if manifest.get("version") != 2:
        raise AssertionError("CV preview manifest must use schema version 2")
    if set(manifest.get("formats", {})) != {"es", "ca", "en", "general"}:
        raise AssertionError("CV preview manifest does not list every language and general pack")


def main() -> None:
    for language in LANGUAGES:
        for variant in FORMATS:
            assert_localized_pdf(language, variant)
    assert_published_files()
    print("CV verification passed: 6 localized PDFs, 2 multilingual packs, links, reading order, and previews.")


if __name__ == "__main__":
    main()
