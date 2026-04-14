from pathlib import Path
import json
import fitz

ROOT = Path(__file__).resolve().parents[1]
CV_DIR = ROOT / 'public' / 'docs' / 'cv'
OUT_ROOT = ROOT / 'public' / 'docs' / 'cv-previews'

FILES = {
    'general': CV_DIR / 'marc-muntane-clara-cv.pdf',
    'ca': CV_DIR / 'marc-muntane-clara-cv-ca.pdf',
    'es': CV_DIR / 'marc-muntane-clara-cv-es.pdf',
    'en': CV_DIR / 'marc-muntane-clara-cv-en.pdf',
}

manifest = {}
OUT_ROOT.mkdir(parents=True, exist_ok=True)

for key, pdf_path in FILES.items():
    if not pdf_path.exists():
        raise FileNotFoundError(f'Missing CV file: {pdf_path}')

    doc = fitz.open(pdf_path)
    out_dir = OUT_ROOT / key
    out_dir.mkdir(parents=True, exist_ok=True)

    # Clean previous files
    for old in out_dir.glob('page-*.png'):
        old.unlink()

    pages = []
    for idx, page in enumerate(doc, start=1):
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
        out_file = out_dir / f'page-{idx}.png'
        pix.save(out_file)
        pages.append(f'docs/cv-previews/{key}/page-{idx}.png')

    doc.close()

    manifest[key] = {
        'pdf': f'docs/cv/{pdf_path.name}',
        'pages': pages,
    }

manifest_path = OUT_ROOT / 'manifest.json'
manifest_path.write_text(json.dumps(manifest, indent=2), encoding='utf-8')

print(f'Generated CV previews at {OUT_ROOT}')
print(f'Manifest: {manifest_path}')
