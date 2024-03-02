"use client";
import React, { useState } from "react";
import { FloatingNav } from "../Aceternity/floating-navbar";
import Image from "next/image";
import menu from "../public/Assets/menu.svg";
import close from "../public/Assets/close.svg";
import Link from "next/link";

export function Header() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Skills",
      link: "/skills",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ];

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <div className="sm:hidden flex justify-end items-center p-4">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] mx-4 object-contain cursor-pointer"
          onClick={toggleMenu}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black absolute top-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[1000] `}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navItems.map((navItem, idx) => (
              <li
                key={idx}
                className={`font-poppins font-medium cursor-pointer text-[26px] ${
                  active === navItem.name ? "text-white" : "text-gray-300"
                } ${idx === navItems.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(navItem.name);
                  toggleMenu();
                }}
              >
                <Link href={navItem.link}>{navItem.name}</Link>
              </li>
            ))}
            <Link href="/contact" className="font-poppins font-medium cursor-pointer text-[26px] mt-4 text-gray-300">Contact</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
