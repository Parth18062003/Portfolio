"use client";
import Footer from "@/Components/Footer";
import { Header } from "@/Components/Header/Header";
import { Hero } from "@/Components/Hero";
import { SignupFormDemo } from "@/Components/contactForm";
import { Macbook } from "@/Components/macbook-display";
import StickyCursor from "@/Components/stickyCursor";
import { TbChevronUp } from "react-icons/tb";
import {
  Element,
  animateScroll,
} from "react-scroll";
import About from "@/Components/About";
import BackgroundGradientDemo from "@/Components/project-cards";

export default function Home() {

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
      <div className="hidden md:block">
        <StickyCursor />
      </div>
      <Header />
      <Element name="Hero" className="element">
        <Hero />
      </Element>
      <Element name="About" className="element">
        <About />
      </Element>
      <Element name="Skills" className="element">
        <Macbook />
      </Element>
      <Element name="Project" className="element">
        <BackgroundGradientDemo />
      </Element>
      <Element name="Contact" className="element">
        <SignupFormDemo />
      </Element>
      <Footer />
    </>
  );
}
