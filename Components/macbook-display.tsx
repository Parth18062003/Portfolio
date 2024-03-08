import React, { useRef } from "react";
import { MacbookScroll } from "../Aceternity/macbook";
import {
  useScroll,
  useTransform,
  LazyMotion,
  domAnimation,
  m,
} from "framer-motion";

export function Macbook() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ opacity }}
        ref={ref}
      >
        <div className="overflow-hidden sm:translate-y-0 translate-y-48 h-[60rem] sm:h-full w-full dark:bg-customblack bg-customwhite dark:bg-grid-white/[0.2] bg-grid-customblack/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-customblack bg-customwhite [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <MacbookScroll showGradient={false} />
        </div>
      </m.div>
    </LazyMotion>
  );
}
