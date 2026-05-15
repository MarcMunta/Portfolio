import { PDF_VIEWER_PARAMS } from './constants';

export function resolveProjectPdfPath(rawPath) {
  if (!rawPath) return null;

  if (/^(?:[a-z]+:)?\/\//i.test(rawPath) || rawPath.startsWith('/')) {
    return rawPath;
  }

  if (typeof window === 'undefined') {
    return rawPath;
  }

  const pathname = window.location.pathname.endsWith('/')
    ? window.location.pathname
    : `${window.location.pathname}/`;

  return new URL(rawPath, `${window.location.origin}${pathname}`).toString();
}

export function buildPdfPreviewPath(pdfPath) {
  return pdfPath ? `${pdfPath}${PDF_VIEWER_PARAMS}` : null;
}
