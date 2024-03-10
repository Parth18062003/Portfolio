"use client";
import React from "react";
import { SparklesCore } from "../Aceternity/sparkles";
import { BackgroundCellCore } from "@/Aceternity/BackgroundRipple";
import { useTheme } from "next-themes";

export function Hero() {
  const { theme } = useTheme();
  const particleColor = theme === 'light' ? '#000000' : '#FFFFFF'; 
  return (
    <div className="relative -translate-y-24">
          <div className=" h-[53rem] w-full bg-customwhite dark:bg-customblack flex flex-col items-center justify-center overflow-hidden rounded-md">
      <BackgroundCellCore />
      <h1 className="mt-12 md:text-7xl text-7xl lg:text-9xl font-bold text-center text-neutral-900 dark:text-dimwhite relative z-40">
        Parth Kadam
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor={particleColor}
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-customwhite dark:bg-customblack [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
    </div>
  );
}
