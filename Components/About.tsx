// Import React and necessary modules
import { ThreeDCard } from "@/Aceternity/3d-Card/Gojo";
import Typewriter from "@/Aceternity/typewriter/typewriter";
import { LazyMotion, domAnimation, m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TbDownload } from "react-icons/tb";

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Define opacity transformation based on scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]); 
  return (
    <>
      <LazyMotion features={domAnimation}>
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{opacity}} ref={ref}>
          <div className="text-center text-dimwhite font-semibold text-4xl sm:text-7xl translate-y-10">
            About me
          </div>
          <div className="container mx-auto px-4 py-8 lg:py-16 lg:flex lg:items-center max-h-[90vh] ">
            <div className="lg:w-1/2 p-4 sm:-translate-y-10">
              <div className="text-white ">
                <Typewriter />
              </div>
              <p className="text-base lg:text-lg text-gray-400 mb-4 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                euismod quam vel nisi commodo, ac convallis dolor tincidunt.
                Integer vehicula massa id orci dapibus, vel laoreet arcu
                lacinia.
              </p>
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Download CV <TbDownload className="text-lg translate-x-1" />
                </span>
              </button>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <ThreeDCard />
            </div>
          </div>
        </m.div>
      </LazyMotion>
    </>
  );
};

export default About;
