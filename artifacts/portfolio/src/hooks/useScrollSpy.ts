import { useState, useEffect } from 'react';

export function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      let currentId = '';
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentId = id;
          }
        }
      }

      if (currentId && currentId !== activeId) {
        setActiveId(currentId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset, activeId]);

  return activeId;
}
