import React from "react";
import { MacbookScroll } from "../Aceternity/macbook";

export function Macbook() {
  return (
    <div className="overflow-hidden sm:translate-y-0 translate-y-48 h-[60rem] sm:h-full w-full dark:bg-customblack bg-white  dark:bg-grid-white/[0.2] bg-grid-customblack/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-customblack bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <MacbookScroll
        showGradient={false}
      />
    </div>
  );
}

