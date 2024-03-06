import { m } from "framer-motion";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

export default function CursorBlinker() {
  return (
    <m.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-7 w-[1px] sm:h-14 sm:w-[3px] translate-y-1 bg-white translate-x-2"
    />
  );
}
