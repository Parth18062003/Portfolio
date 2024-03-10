// Import React and necessary modules
import { ThreeDCard } from "@/Aceternity/3d-Card/Gojo";
import Typewriter from "@/Aceternity/typewriter/typewriter";
import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useTransform,
} from "framer-motion";
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
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ opacity }}
          ref={ref}
          className="relative -translate-y-24"
        >
          <div className="text-center text-customblack dark:text-dimwhite font-semibold text-4xl sm:text-7xl translate-y-10">
            About me
          </div>
          <div className="container absolute mx-auto px-4 py-8 lg:py-16 lg:flex lg:items-center max-h-[90vh] ">
            <div className="lg:w-1/2 p-4 translate-y-10 xl:-translate-y-10">
              <div className="text-black dark:text-white ">
                <Typewriter />
              </div>
              <p className="text-base lg:text-lg text-gray-800 dark:text-gray-400 mb-4 mt-4">
                “Debugging is twice as hard as writing the code in the first
                place. Therefore, if you write the code as cleverly as possible,
                you are, by definition, not smart enough to debug it.”
              </p>
              <a href="/Assets/Resume.pdf" download="Parth_Kadam_Resume.pdf">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Download CV <TbDownload className="text-lg translate-x-1" />
                  </span>
                </button>
              </a>
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
