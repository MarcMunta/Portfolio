import { PDF_VIEWER_PARAMS } from './constants';

export function resolveProjectPdfPath(rawPath) {
  if (!rawPath) return null;
  return rawPath;
}

export function buildPdfPreviewPath(pdfPath) {
  return pdfPath ? `${pdfPath}${PDF_VIEWER_PARAMS}` : null;
}
