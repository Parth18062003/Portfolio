"use client";
import { SparklesCore } from "@/Aceternity/sparkles";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { TbChevronDown } from "react-icons/tb";
import {
  Element,
  animateScroll,
} from "react-scroll";

export default function Home() {

  const options = {
    duration: 3500,
    smooth: true
  }
  const scrollToBottom = () => {
    animateScroll.scrollToBottom(options);
  };

  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;
  
  useEffect(() => {
    const animate = () => {
      const maskSizeProgress = targetMaskSize * getScrollProgress();
      if (stickyMask.current) {
        stickyMask.current.style.webkitMaskSize =
          (initialMaskSize + maskSizeProgress) * 100 + "%";
      }
      requestAnimationFrame(animate);
    };

    const getScrollProgress = () => {
      if (container.current && stickyMask.current) {
        const scrollProgress =
          stickyMask.current.offsetTop /
          (container.current.getBoundingClientRect().height -
            window.innerHeight);
        const delta = scrollProgress - easedScrollProgress;
        easedScrollProgress += delta * easing;
        return easedScrollProgress;
      }
      return 0;
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <main className="main">
      <div ref={container} className="container">
        <div ref={stickyMask} className="stickyMask">
          <video autoPlay loop muted>
            <source src="/Assets/space.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=" w-full bg-black flex flex-col overflow-hidden rounded-md">
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
          <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
            Lost in Space
          </h1>
          <div className="absolute top-[38rem] sm:top-[42rem] right-10 mr-4 mb-4 text-white text-right">
            <a onClick={scrollToBottom}>Scroll down<TbChevronDown className="inline text-lg" /></a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <h2 className="text-white">404 - Page Not Found</h2>
        <Link href="/" className="text-dimwhite underline">
          Go back
        </Link>
      </div>
    </main>
  );
}
