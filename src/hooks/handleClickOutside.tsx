import { useEffect } from 'react';

export function useClickOutside(
  ref: React.MutableRefObject<any>,
  setIsOpen: (value: React.SetStateAction<boolean>) => void
) {
  useEffect(() => {
    function handleClickOutside(target: EventTarget | null) {
      if (ref.current && !ref.current.contains(target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', (e) => handleClickOutside(e.target));
    return () => {
      document.removeEventListener('mousedown', (e) =>
        handleClickOutside(e.target)
      );
    };
  }, [ref]);
}
