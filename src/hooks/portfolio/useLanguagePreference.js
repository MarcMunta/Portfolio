import { useEffect, useRef, useState } from 'react';

import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../../lib/portfolio/constants';

export function useLanguagePreference() {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const contentRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('portfolio-language');
    if (SUPPORTED_LANGUAGES.includes(storedLanguage)) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (contentRef.current) {
      contentRef.current.classList.remove('lang-transition');
      void contentRef.current.offsetWidth;
      contentRef.current.classList.add('lang-transition');
    }
  }, [language]);

  return { language, setLanguage, contentRef };
}
