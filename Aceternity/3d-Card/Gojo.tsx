"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../3d-Card/3d-card";
import { useTheme } from "next-themes";

export function ThreeDCard() {
  const { theme } = useTheme();
  const src = theme === 'light' ? "Gojo_byrlvr.webp" : "MeFr_ggjzz8.webp"; 
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-gray-400/[0.1] dark:bg-customblack dark:border-white/[0.2] border-black/[0.1] w-[20rem] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={src}
            height={1000}
            width={1000}
            className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Nah I'd win"
            loading="lazy"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
