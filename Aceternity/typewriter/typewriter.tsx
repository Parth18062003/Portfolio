import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import CursorBlinker from "./cursor";

export default function Typewriter() {
  const textIndex = useMotionValue(0);
  const texts = [
    "Student",
    "Web Developer",
    "Blockchain Enthusiast",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <span className="md:text-5xl text-3xl lg:text-7xl fixed transform -translate-x-36 sm:-translate-x-[25rem]">
        I am a <motion.span className="text-gradient">{displayText}</motion.span>
        <CursorBlinker />
      </span>
    </>
  );
}
