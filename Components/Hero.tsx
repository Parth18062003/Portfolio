/* "use client";
import React from "react";
import { SparklesCore } from "../Aceternity/sparkles";
import Typewriter from "@/Aceternity/typewriter/typewriter";

export function Hero() {
  return (
    <div className="h-[40rem] relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-5xl lg:text-9xl font-bold text-center text-customwhite relative z-20">
        Parth Kadam
      </h1>
      <div className="text-customwhite"><Typewriter /></div>
    </div>
  );
}
 */
"use client";
import React from "react";
import { SparklesCore } from "../Aceternity/sparkles";
import Typewriter from "@/Aceternity/typewriter/typewriter";
import { BackgroundCellCore } from "@/Aceternity/BackgroundRipple";

export function Hero() {
  return (
    <div className="h-[40rem] w-full bg-customblack flex flex-col items-center justify-center overflow-hidden rounded-md">
      <BackgroundCellCore />
      <h1 className="mt-12 md:text-7xl text-7xl lg:text-9xl font-bold text-center text-dimwhite relative z-40">
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
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-customblack [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
