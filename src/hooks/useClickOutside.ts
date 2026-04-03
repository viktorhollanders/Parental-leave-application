import { RefObject, useEffect } from "react";

export function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
  enabled: boolean = true,
) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleClickOutside = (event: Event) => {
      if (event.target instanceof Node) {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [callback, enabled, ref]);
}
