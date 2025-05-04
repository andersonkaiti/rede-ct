import { useEffect, useRef, useState } from "react";

export function useNavigationBarDropdown() {
  const [hovering, setHovering] = useState<number | null>(null);
  const [leftOffset, setLeftOffset] = useState<number | null>(null);
  const [heightOffset, setHeightOffset] = useState<number | null>(null);

  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (hovering !== null) {
      const menuElement = refs.current[hovering];

      if (menuElement) {
        setHeightOffset(menuElement.offsetHeight);
      }
    }
  }, [hovering]);

  function onMouseEnter(index: number, element: HTMLElement) {
    setHovering(index);

    let leftOffset = element.offsetLeft;

    const dropdownWidth = 600;
    const viewportWidth = window.innerWidth;

    const totalOffset = leftOffset + dropdownWidth;

    if (totalOffset > viewportWidth) {
      leftOffset = Math.max(0, viewportWidth - dropdownWidth - 16);
    }

    setLeftOffset(leftOffset);
  }

  return {
    hovering,
    setHovering,
    leftOffset,
    heightOffset,
    onMouseEnter,
    refs,
  };
}
