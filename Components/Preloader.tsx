import { useEffect, useState } from "react";
import { domAnimation, LazyMotion, m, Variants } from "framer-motion";

const words: string[] = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

export const opacity: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.1 },
  },
};

export const slideUp: Variants = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export default function Preloader() {
  const [index, setIndex] = useState<number>(0);
  const [dimension, setDimension] = useState<{ width: number; height: number }>(
    { width: 0, height: 0 }
  );

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
  }, [index]);
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={slideUp}
        initial="initial"
        exit="exit"
        className="h-screen w-screen flex items-center justify-center fixed z-[60] bg-[#020d19]"
      >
        {dimension.width > 0 && (
          <>
            <m.p
              variants={opacity}
              initial="initial"
              animate="enter"
              className="text-customwhite text-5xl flex items-center z-[100]"
            >
              <span className="w-4 h-4 bg-white rounded-full mr-2"></span>
              {words[index]}
            </m.p>
            <svg className="absolute top-0 w-full fill-[#020d19] h-[130vh]">
              <m.path variants={curve} initial="initial" exit="exit"></m.path>
            </svg>
          </>
        )}
      </m.div>
    </LazyMotion>
  );
}
