import { useEffect } from 'react';

export function useImagePreload(urls) {
  useEffect(() => {
    urls.forEach((url) => {
      const image = new Image();
      image.src = url;
    });
  }, [urls]);
}
