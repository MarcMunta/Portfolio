import React, { useEffect, useState } from 'react';

const InlineCvPreview = ({ pages, title }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [imageFailed, setImageFailed] = useState(false);
  const pageCount = pages.length;
  const currentPage = pages[pageNumber - 1] || null;

  useEffect(() => {
    setPageNumber(1);
  }, [pages]);

  useEffect(() => {
    setImageFailed(false);
  }, [currentPage]);

  const canGoPrev = pageNumber > 1;
  const canGoNext = pageNumber < pageCount;

  return (
    <div className="h-full w-full flex flex-col bg-[var(--bg-tertiary)]">
      <div className="h-11 px-3 border-b border-white/10 flex items-center justify-between text-xs text-gray-400">
        <span className="truncate">{title}</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
            disabled={!canGoPrev}
            className="px-2.5 py-1 rounded-md border border-white/15 text-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
          >
            Anterior
          </button>
          <span className="min-w-[70px] text-center">{pageCount ? `${pageNumber}/${pageCount}` : '--/--'}</span>
          <button
            type="button"
            onClick={() => setPageNumber((prev) => Math.min(prev + 1, pageCount || prev))}
            disabled={!canGoNext}
            className="px-2.5 py-1 rounded-md border border-white/15 text-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
          >
            Siguiente
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-3 flex items-start justify-center">
        {!currentPage ? (
          <div className="text-sm text-gray-300 mt-8">No hay previsualizacion disponible.</div>
        ) : imageFailed ? (
          <div className="text-sm text-red-300 mt-8">No se pudo cargar la imagen de previsualizacion del CV.</div>
        ) : (
          <img
            src={currentPage}
            alt={`${title} - pagina ${pageNumber}`}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="max-w-full h-auto rounded-lg shadow-[0_14px_34px_rgba(0,0,0,0.45)]"
          />
        )}
      </div>
    </div>
  );
};
export { InlineCvPreview };
