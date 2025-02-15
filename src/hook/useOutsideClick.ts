import { useCallback, useEffect, useRef } from "react";

export const useOutsideClick = ({
  onClickOutside,
}: {
  onClickOutside: () => void;
}): any => {
  const ref = useRef<HTMLElement | null>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClickOutside();
      }
    },
    [onClickOutside]
  );

  useEffect(() => {
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [handleClickOutside]);

  return ref;
};
