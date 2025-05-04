"use client";

import { useEffect, useRef, useState } from "react";

export function useNavigationBar() {
  const [showNavigationBar, setShowNavigationBar] = useState(false);
  const navigationBarRef = useRef<HTMLElement>(null!);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    function closeOnResize() {
      if (window.innerWidth >= 1300) {
        setShowNavigationBar(false);
        setActiveIndex(null);
      }
    }

    window.addEventListener("resize", closeOnResize);

    return () => {
      window.removeEventListener("resize", closeOnResize);
    };
  }, []);

  return {
    showNavigationBar,
    setShowNavigationBar,
    navigationBarRef,
    activeIndex,
    setActiveIndex,
  };
}
