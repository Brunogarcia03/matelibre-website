"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Button = ({ children, className, id = "split-btn" }) => {
  const [split, setSplit] = useState(null);

  const handleEnter = () => {
    const splitInstance = new SplitText(`#${id}`, {
      type: "chars",
    });
    setSplit(splitInstance);

    gsap.to(splitInstance.chars, {
      y: -5,
      stagger: {
        yoyo: true,
        repeat: -1,
        each: 0.04,
      },
      duration: 0.25,
    });
  };

  const handleLeave = () => {
    if (!split) return;

    gsap.killTweensOf(split.chars);

    gsap.to(split.chars, {
      y: 0,
      duration: 0.3,
      stagger: 0.02,
      ease: "sine.out",
      onComplete: () => {
        split.revert();
        setSplit(null);
      },
    });
  };

  return (
    <button
      id={id}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`bg-white px-6 py-3 rounded-full text-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
