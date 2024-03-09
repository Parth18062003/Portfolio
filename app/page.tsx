"use client";
import Footer from "@/Components/Footer";
import { Header } from "@/Components/Header/Header";
import { Hero } from "@/Components/Hero";
import Preloader from "@/Components/Preloader";
import { SignupFormDemo } from "@/Components/contactForm";
import { Macbook } from "@/Components/macbook-display";
import StickyCursor from "@/Components/stickyCursor";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { TbChevronUp } from "react-icons/tb";
import {
  Element,
  animateScroll,
} from "react-scroll";
import dynamic from 'next/dynamic'

const AboutComponent = dynamic(() => import('@/Components/About'), { ssr: false });

const ProjectComponent = dynamic(() => import('@/Components/project-cards'), { ssr: false });

export default function Home() {
/*   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 2500);
    })();
  }, []); */

  const options = {
    duration: 3000,
    smooth: true
  }
  const scrollToTop = () => {
    animateScroll.scrollToTop(options);
  };

  return (
    <>
    <div className="fixed bottom-8 right-8 z-50">
        <a onClick={scrollToTop} className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white text-4xl transition duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-300"> 
          <TbChevronUp />
        </a>
      </div>
{/*        <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>  */} 
      <div className="hidden md:block">
        <StickyCursor />
      </div>
      <Header />
      <Element name="Hero" className="element">
        <Hero />
      </Element>
      <Element name="About" className="element">
        <AboutComponent />
      </Element>
      <Element name="Skills" className="element">
        <Macbook />
      </Element>
      <Element name="Project" className="element">
        <ProjectComponent />
      </Element>
      <Element name="Contact" className="element">
        <SignupFormDemo />
      </Element>
      <Footer />
    </>
  );
}
