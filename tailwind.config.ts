import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import svgToDataUri from "mini-svg-data-uri";
import  colors from "tailwindcss/colors";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Aceternity/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "customwhite": "#fffafa",
        "customblack": "#0c0c0c",
        "dimwhite": "#eae8e8",
      },   
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },   
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
  options: {
    safelist: [
      // List each class as a separate string
      "inset-x-20",
      "inset-x-60",
      "left-[1.125rem]",
      "right-0",
      "top-0",
      "mx-4",
      "my-2",
      "my-8",
      "mb-0",
      "mb-1",
      "mb-2",
      "mb-7",
      "mb-8",
      "mt-12",
      "mt-8",
      "h-11",
      "h-8",
      "h-[28px]",
      "h-[2px]",
      "h-[40rem]",
      "h-[53rem]",
      "h-[5px]",
      "h-[60rem]",
      "max-h-[90vh]",
      "w-1/4",
      "w-3/4",
      "w-[28px]",
      "w-[40rem]",
      "w-[calc(100%-2.25rem)]",
      "min-w-[140px]",
      "max-w-wxl",
      "max-w-3xl",
      "max-w-[83rem]",
      ".max-w-sm",
      "flex-1",
      "-translate-y-24",
      "translate-x-1",
      "translate-y-10",
      "translate-y-20",
      "translate-y-40",
      "translate-y-48",
      "translate-y-5",
      "translate-y-6",
      "cursor-pointer",
      "animate-[spin_2s_linear_infinite]",
      "list-none",
      "flex-wrap",
      "gap-6",
      "rounded-[22px]",
      "rounded-none",
      "bg-slate-900",
      "bg-slate-950",
      "space-x-2",
      "space-x-8",
      "space-y-2",
      "bg-zinc-950",
      "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
      "bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)]",
      "via-sky-500",
      "object-contain",
      "p-4",
      "p-[1px]",
      "px-6",
      "px-8",
      "py-1",
      "py-8",
      "text-2xl",
      "text-7xl",
      "text-[26px]",
      "text-base",
      "text-8xl",
      "text-xs",
      "font-semibold",
      "tracking-normal",
      "text-customblack",
      "text-customwhite",
      "text-gray-700",
      "text-gray-800",
      "text-neutral-900",
      "text-red-400",
      "no-underline",
      "antialiased",
      "shadow",
      "shadow-2xl",
      "shadow-zinc-900",
      "ring-1",
      "ring-white/10",
      "backdrop-blur-3xl",
      "transition-opacity",
      "bg-grid-customblack",
      "[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]",
      "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
      "hover:-translate-y-1",
      "hover:text-gray-600",
      "hover-text-gray-700",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-slate-400",
      "focus:ring-offset-2",
      "focus:ring-offset-slate-50",
      "dark:bg-neutral-950",
      "dark:bg-zinc-900",
      "dark:text-dimwhite",
      "dark:text-gray-400",
      "dark:text-neutral-200",
      "dark:text-neutral-300",
      "dark:text-neutral-400",
      "dark:bg-grid-white/[0.2]",
      "dark:hover:text-dimwhite",
      "dark:hover:text-white/0.75",
      "sm:hidden",
      "sm:h-full",
      "sm:w-1/2",
      "sm:max-w-sm",
      "sm:translate-y-0",
      "sm:translate-y-10",
      "sm:p-10",
      "sm:text-6xl",
      "sm:text-7xl",
      "sm:text-xl",
      "md:w-1/3",
      "md:flex-row",
      "md:gap-8",
      "md:space-x-2",
      "md:space-y-0",
      "md:rounded-2xl",
      "md:text-8xl",
      "lg:mt-0",
      "lg:inline-block",
      "lg:flex",
      "lg:hidden",
      "lg:w-1/2",
      "lg:w-1/4",
      "lg:items-center",
      "lg:gap-12",
      "lg:space-x-14",
      "lg:py-16",
      "lg:text-9xl",
      "lg:text-lg",
      "[transform-style:preserve-3d]",
      "xl:-translate-y-10",
    ],    
  },
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}