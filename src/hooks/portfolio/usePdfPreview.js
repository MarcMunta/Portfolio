import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { buildPdfPreviewPath, resolveProjectPdfPath } from '../../lib/portfolio/pdf';
import { gsap } from '../../lib/portfolio/gsap';

export function usePdfPreview(projects) {
  const [activePdfProjectId, setActivePdfProjectId] = useState(null);
  const modalCardRef = useRef(null);

  const closePdfModal = useCallback(() => {
    setActivePdfProjectId(null);
  }, []);

  const activePdfProject = useMemo(() => {
    if (!activePdfProjectId) return null;
    return projects.find((project) => project.id === activePdfProjectId) || null;
  }, [activePdfProjectId, projects]);

  const activePdfPath = useMemo(
    () => (activePdfProject?.pdfPath ? resolveProjectPdfPath(activePdfProject.pdfPath) : null),
    [activePdfProject]
  );

  const activePdfPreviewPath = useMemo(() => buildPdfPreviewPath(activePdfPath), [activePdfPath]);

  useEffect(() => {
    if (!activePdfProjectId) return undefined;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    const onEsc = (event) => {
      if (event.key === 'Escape') closePdfModal();
    };

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', onEsc);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener('keydown', onEsc);
    };
  }, [activePdfProjectId, closePdfModal]);

  useEffect(() => {
    if (!activePdfProjectId || !modalCardRef.current) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const context = gsap.context(() => {
      gsap.fromTo(
        modalCardRef.current,
        { y: 36, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.55, ease: 'power3.out' }
      );
    }, modalCardRef);

    return () => context.revert();
  }, [activePdfProjectId]);

  return {
    activePdfProjectId,
    setActivePdfProjectId,
    closePdfModal,
    modalCardRef,
    activePdfProject,
    activePdfPath,
    activePdfPreviewPath,
  };
}
