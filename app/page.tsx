"use client";
import About from "@/Components/About";
import { Header } from "@/Components/Header/Header";
import { Hero } from "@/Components/Hero";
import Preloader from "@/Components/Preloader";
import { Macbook } from "@/Components/macbook-display";
import { BackgroundGradientDemo } from "@/Components/project-cards";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 2500);
    })();
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>{" "}
      <Header />
      <Hero />
      <About />
      <Macbook />
      <BackgroundGradientDemo />
    </>
  );
}
