"use client";

import { ReactLenis } from "lenis/react";
import { useRef } from "react";

const LenisScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);
  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{ lerp: 0.5, duration: 5, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;
