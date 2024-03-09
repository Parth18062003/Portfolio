import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

const ToggleComponent = dynamic(() => import("@/Aceternity/toggle-button"), {ssr: false});

const TopHeader = () => {

  const handleSetActive = (to: String) => {
    console.log(to);
  };

  return (
    <>
      <div className="hidden sm:flex flex-row items-center justify-between py-8 max-w-[83rem] mx-auto px-8 w-full relative z-[50]">
        <div className="flex flex-row justify-between items-center space-x-1">
          <Link
            activeClass="active"
            to="Hero"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
            className="font-bold text-2xl tracking-normal text-customblack dark:text-customwhite"
          >
            PK
          </Link>
          <ToggleComponent />
        </div>
        <div className="lg:flex flex-row flex-1 hidden items-center  justify-center space-x-8 lg:space-x-14 text-sm text-customblack dark:text-customwhite font-medium hover:text-gray-600 dark:hover:text-dimwhite transition duration-200">
          <Link
            to="Hero"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            onSetActive={handleSetActive}
          >
            <span>Home</span>
          </Link>
          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={10}
            duration={1500}
            onSetActive={handleSetActive}
          >
            <span>About</span>
          </Link>
          <Link
            to="Skills"
            spy={true}
            smooth={true}
            offset={10}
            duration={2000}
            onSetActive={handleSetActive}
          >
            <span>Skills</span>
          </Link>
          <Link
            to="Project"
            spy={true}
            smooth={true}
            offset={50}
            duration={2500}
            onSetActive={handleSetActive}
          >
            <span>Projects</span>
          </Link>
        </div>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          offset={10}
          duration={3000}
          onSetActive={handleSetActive}
          className="bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-customwhite hidden lg:inline-block"
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 ring-1 ring-white/10 px-4 py-1">
            <span>Contact</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.75 8.75L14.25 12L10.75 15.25"
                pathLength="1"
                strokeDashoffset="0px"
                strokeDasharray="1px 1px"
              ></path>
            </svg>
          </div>
          <span className="absolute left-[1.125rem] h-px w-[calc(100%-2.25rem)] -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-opacity duration-500 group-hover:opacity-40"></span>
        </Link>
        <div className="flex lg:hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
