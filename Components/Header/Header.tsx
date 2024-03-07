"use client";
import React, { useEffect, useState } from "react";
import { FloatingNav } from "../../Aceternity/floating-navbar";
import Image from "next/image";
import menu from "../../public/Assets/menu.svg";
import close from "../../public/Assets/close.svg";
import { Link, Events, scrollSpy } from "react-scroll";
import TopHeader from "./TopHeader";

export function Header() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");
  const navItems = [
    {
      name: "Home",
      link: "Hero",
      duration: 500,
    },
    {
      name: "About",
      link: "About",
      duration: 1500,
    },
    {
      name: "Skills",
      link: "Skills",
      duration: 2000,
    },
    {
      name: "Projects",
      link: "Project",
      duration: 2500,
    },
  ];

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to: String) => {
    console.log(to);
  };

  return (
    <>
      <div className="relative w-full">
        <TopHeader />
        <FloatingNav navItems={navItems} />
        <div className="sm:hidden flex justify-end items-center p-4">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] mx-4 object-contain cursor-pointer z-[80]"
            onClick={toggleMenu}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black absolute top-10 right-0 mx-4 my-2 min-w-[140px] rounded-3xl sidebar z-[1000] `}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navItems.map((navItem, idx) => (
                <li
                  key={idx}
                  className={`font-poppins font-medium cursor-pointer text-[26px] ${
                    active === navItem.name ? "text-white" : "text-dimwhite"
                  } ${idx === navItems.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => {
                    setActive(navItem.name);
                    toggleMenu();
                  }}
                >
                  <Link
                    to={navItem.link}
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={navItem.duration}
                    onSetActive={handleSetActive}
                  >
                    <span>{navItem.name}</span>
                  </Link>
                </li>
              ))}
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={10}
                duration={3000}
                onSetActive={handleSetActive}
                className="font-poppins font-medium cursor-pointer text-[26px] mt-4 text-dimwhite"
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
