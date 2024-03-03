"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../3d-Card/3d-card";
import Gojo from "../../public/Assets/MeFr.png"

export function ThreeDCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-customwhite relative group/card  dark:hover:shadow-2xl dark:hover:shadow-gray-400/[0.1] dark:bg-customblack dark:border-white/[0.2] border-black/[0.1] w-[20rem] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={Gojo}
            height="1000"
            width="1000"
            className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Nah I'd win"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
