import React from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, X } from 'lucide-react';

export function PdfPreviewModal({
  activePdfProject,
  activePdfPath,
  activePdfPreviewPath,
  closePdfModal,
  modalCardRef,
  labels,
}) {
  if (!activePdfProject || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${labels.pdfPreviewOf} ${activePdfProject.title}`}
      className="fixed inset-0 z-[1600] flex items-center justify-center bg-black/80 backdrop-blur-md px-4 py-8"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closePdfModal();
        }
      }}
    >
      <div
        ref={modalCardRef}
        className="w-full max-w-6xl h-[88vh] bg-[var(--bg-modal)] border border-white/15 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
      >
        <div className="h-16 border-b border-white/10 px-5 md:px-7 flex items-center justify-between bg-black/40">
          <div className="min-w-0">
            <p className="text-sm text-blue-300/80 uppercase tracking-widest">{activePdfProject.category}</p>
            <h3 className="text-base md:text-lg text-white font-semibold truncate">{activePdfProject.title}</h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={activePdfPath || activePdfProject.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[var(--cta-bg)] text-[var(--cta-text)] hover:bg-[var(--cta-hover-bg)] transition-colors"
            >
              <ArrowUpRight size={16} />
              {labels.openPdf}
            </a>
            <button
              type="button"
              onClick={closePdfModal}
              aria-label={labels.closePreview}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="h-[calc(88vh-4rem)] bg-[var(--bg-tertiary)]">
          <iframe
            src={activePdfPreviewPath || activePdfPath || activePdfProject.pdfPath}
            title={`PDF ${activePdfProject.title}`}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
