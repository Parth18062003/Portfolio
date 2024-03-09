import { useEffect } from "react";
import {
  m,
  useMotionValue,
  useSpring,
  MotionValue,
  domAnimation,
  LazyMotion,
} from "framer-motion";

export default function Index() {
  const cursorSize = 15;

  // Define mouse coordinates as MotionValues
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  // Define options for smoother animation
  const smoothOptions = { damping: 10, stiffness: 100, mass: 0.1 }; // Adjusted values for smoother motion

  // Create smooth mouse coordinates using useSpring
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  // Function to manage mouse move event
  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div className="">
      <LazyMotion features={domAnimation}>
        <m.div
          style={{
            left: smoothMouse.x as MotionValue<number>, // Type assertion needed here
            top: smoothMouse.y as MotionValue<number>, // Type assertion needed here
          }}
          className="fixed w-4 h-4 bg-black dark:bg-white rounded-full pointer-events-none z-10 shadow-2xl shadow-zinc-900"
        />
      </LazyMotion>
    </div>
  );
}
