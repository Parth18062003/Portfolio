"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  MotionValue,
  m,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

export const MacbookScroll = ({
  src,
  title,
}: {
  src?: string;
  title?: string | React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  const { theme } = useTheme();
  const baseSrc = theme === "light" ? "base_cbotkh" : "darkbase_huphjd";  
  
  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1.8 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1.8 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="sm:min-h-[200vh] min-h-[180vh] flex flex-col items-center sm:py-10 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100 scale-[0.35] sm:scale-50"
    >
      <m.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="dark:text-gradient text-gradientDark text-9xl sm:text-5xl font-bold mb-4 text-center"
      >
        {title || <span>Skills</span>}
      </m.h2>
      {/* Lid */}
      <Lid
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
      />
      {/* Base area */}
      <Image src={baseSrc} alt="Keyboard area" width={2500} height={2500} className="h-[22rem] w-[32rem]" />
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
          }}
          className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
        >
        </div>
      </div>
      <m.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
      >
        <div className="absolute inset-0 bg-[#272729] rounded-lg" />
        <Image
          src="skills-logos_nlqcrn"
          alt="programming logos"
          width={1400}
          height={1400}
          loading="lazy"
          className="contain object-left-top absolute rounded-lg inset-0 h-full w-full"
        />
      </m.div>
    </div>
  );
};


