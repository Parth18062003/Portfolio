"use client";
import React, { useState } from "react";
import { FloatingNav } from "../../Aceternity/floating-navbar";
import Image from "next/image";
import { Link } from "react-scroll";
import TopHeader from "./TopHeader";
import { useTheme } from "next-themes";
import Toggle from "@/Aceternity/toggle-button";

export function Header() {
  const { theme } = useTheme();
  const lightclose = theme === "light" ? "blackClose_xm9ahc.svg" : "close_bqvsyy.svg";
  const lightmenu = theme === "light" ? "blackmenu_njqy8g.svg" : "menu_mp0x3m.svg";
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

  const handleSetActive = (to: String) => {
    console.log(to);
  };

  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="block sm:hidden z-50">
          <Toggle />
        </div>
        <TopHeader />
        <FloatingNav navItems={navItems} />
        <nav className="sm:hidden flex justify-end items-center p-4">
          <Image
            src={toggle ? lightclose : lightmenu}
            alt="menu"
            height={28}
            width={28}
            className="w-[28px] h-[28px] mx-4 object-contain cursor-pointer z-50"
            onClick={toggleMenu}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black absolute top-10 right-0 mx-4 my-2 min-w-[140px] rounded-3xl sidebar z-50 `}
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
                    href={`#${navItem.link}`}
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
                href="#Contact"
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
        </nav>
      </div>
    </>
  );
}
