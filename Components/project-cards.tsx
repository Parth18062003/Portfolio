"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  LazyMotion,
  domAnimation,
  m,
} from "framer-motion";
import { BackgroundGradient } from "../Aceternity/background-card";
import Image from "next/image";
import Link from "next/link";

export function BackgroundGradientDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const opacity = useTransform(
    scrollYProgress,
    [0, isMobile ? 0 : 0.4],
    [0, 1]
  );

  const data = [
    {
      src: "e-commerce_ntnf9s",
      title: "E-commerce",
      description: "Mern stack e-commerce website with jwt authentication.",
      link1: "Button 1",
      link2: "https://github.com/Parth18062003/E-commerce-using-MERN-Stack",
    },
    {
      src: "restaurant_wo8dbj",
      title: "Restaurant Reservation",
      description: "Next JS website for restaurant reservation. MongoDB and Express for backend.",
      link1: "Button 1",
      link2: "https://github.com/Parth18062003/Restaurant-Reservation-Website-using-Next-JS",
    },
    {
      src: "hotel_q9hnpl",
      title: "Hotel Management",
      description: "Next JS website for hotel management. Sanity CMS for data storage.",
      link1: "Button 1",
      link2: "https://github.com/Parth18062003/Hotel-Management-Site",
    },
    {
      src: "AiSummarizer_i4tq2m",
      title: "AI Youtube Summarizer",
      description: "AI based youtube video summarizer and QnA. Built using React and Langchain.",
      link1: "Button 1",
      link2: "https://github.com/Parth18062003/Youtube-Extension-",
    },
    {
      src: "AiSummarizer_i4tq2m",
      title: "Blockchain based storage",
      description: "Blockchain based storage system using IPFS and Ethereum. MetaMask and Solidity for Eth.",
      link1: "Button 1",
      link2: "Button 2",
    },
    {
      src: "AiSummarizer_i4tq2m",
      title: "Social Media Website",
      description: "Description 2 lorem ",
      link1: "Button 1",
      link2: "Button 2",
    },
  ];

  return (
    <>
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ opacity }}
          ref={ref}
        >
          <div className="flex items-center justify-center transform translate-y-5 sm:translate-y-10 mb-7">
            <h2 className="text-gradientDark dark:text-gradient text-3xl sm:text-5xl font-semibold">
              Projects
            </h2>
          </div>
          <div className="flex flex-wrap justify-center sm:p-10 sm:translate-y-10">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
              >
                <BackgroundGradient className="rounded-[22px] sm:max-w-sm p-4 bg-gray-300 dark:bg-zinc-900">
                  <Image
                    src={item.src}
                    alt={item.title}
                    height={1200}
                    width={1200}
                    className="w-[100%] h-[200px] object-cover rounded-[22px]"
                    loading="lazy"
                    fetchPriority="low"
                  />
                  <p className="text-base sm:text-xl text-black mt-4 mb-1 dark:text-neutral-200">
                    {item.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    {item.description}
                  </p>
                  <Link href={item.link1}
                  className="px-6 py-2 bg--zinc-900 text-black dark:text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                    Live
                  </Link>
                  <Link href={item.link2} 
                    target="_blank"
                    rel="noopener noreferrer"
                  className="relative inline-flex h-11 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      GitHub
                    </span>
                  </Link>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </m.div>
      </LazyMotion>
    </>
  );
}

export default BackgroundGradientDemo;
