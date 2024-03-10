import React from "react";
import { TbBrandInstagram } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { BiLogoGithub } from "react-icons/bi";
import { Link } from "react-scroll";

const Footer = () => {
  const handleSetActive = (to: String) => {
    console.log(to);
  };

  return (
    <>
      <footer className="bg-gray-200 dark:bg-neutral-950 translate-y-40">
        <div className="mx-auto max-w-3xl py-8">
          <div className="flex justify-center">
            <h3 className="text-black dark:text-white text-3xl">Parth Kadam</h3>
          </div>

          <ul className="translate-y-6 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link
                href="#Hero"
                to="Hero"
                spy={true}
                offset={50}
                smooth={true}
                duration={3500}
                onSetActive={handleSetActive}
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="#About"
                to="About"
                spy={true}
                offset={50}
                smooth={true}
                duration={3000}
                onSetActive={handleSetActive}
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="#Skills"
                to="Skills"
                spy={true}
                offset={50}
                smooth={true}
                duration={2500}
                onSetActive={handleSetActive}
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                href="#Project"
                to="Project"
                spy={true}
                offset={50}
                smooth={true}
                duration={2000}
                onSetActive={handleSetActive}
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                Projects
              </Link>
            </li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <span className="sr-only">Instagram</span>
                <TbBrandInstagram className="h-8 w-8 text-black dark:text-white" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/parth-kadam-7b27a2224/"
                target="_blank"
              >
                <span className="sr-only">Linkedin</span>
                <TbBrandLinkedin className="h-8 w-8 text-black dark:text-white" />
              </a>
            </li>

            <li>
              <a href="https://github.com/Parth18062003" target="_blank">
                <span className="sr-only">GitHub</span>
                <BiLogoGithub className="h-8 w-8 text-black dark:text-white" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
