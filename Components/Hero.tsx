"use client";
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
