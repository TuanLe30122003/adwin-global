"use client";

import React, { useMemo, useState } from "react";
import Container from "@/components/Common/Container";
import CustomButton from "@/components/Common/CustomButton";
import Image from "next/image";

type HeroItem = {
  id: number;
  title: string;
  description: string;
  directCardTitle: string;
  headline: string;
  cta: string;
  image: string;
  symbol: string;
};

interface HeroProps {
  heroData: HeroItem[];
}

const Hero = ({ heroData }: HeroProps) => {
  const [activeHeroView, setActiveHeroView] = useState<Number>(1);

  const activeView = useMemo(() => {
    return heroData.find((view) => view.id === activeHeroView);
  }, [activeHeroView, heroData]);

  return (
    <Container className="pt-[130px] flex md:flex-row flex-col w-full justify-between sm:items-start items-center relative md:h-[100vh] h-full">
      <div className="flex flex-col sm:items-start items-center lg:mt-12 sm:mt-8 mt-4 z-10">
        <h1 className="font-orbitron sm:text-4xl text-2xl font-semibold sm:text-left text-center">
          {activeView?.title}
        </h1>
        <p className="font-inter sm:whitespace-pre-line font-light md:text-base text-sm mt-4 opacity-70 sm:text-left text-center">
          {activeView?.description}
        </p>
        <CustomButton className="font-tektur mt-8 min-w-[175px] text-deepDark bg-[#37FD76] hover:bg-[#fff] py-2 px-4 text-lg">
          {activeView?.cta}
        </CustomButton>
      </div>

      <div
        className="group border lg:mt-0 mt-8 border-primaryGreen w-[175px] min-h-[220px] flex flex-col justify-between items-center pt-2 pb-3 gradient-1 cursor-pointer z-10"
        onClick={() => {
          setActiveHeroView((prev) => {
            return prev === 1 ? 2 : 1;
          });
        }}
      >
        <div className="flex flex-col justify-center items-center overflow-hidden w-[160px]">
          <Image
            src={activeView?.symbol || "/images/Virtual_card.svg"}
            width={158}
            height={158}
            alt={activeView?.directCardTitle || "title"}
            className="group-hover:scale-110 transition-all duration-300 overflow-hidden h-[170px]"
          />
        </div>
        <h2 className="font-tektur text-xl text-white font-normal">
          {activeView?.directCardTitle}
        </h2>
      </div>

      <div className="sm:absolute bottom-0 w-full flex flex-col justify-center md:items-center items-end left-0 right-0">
        <Image
          src={activeView?.image || "/images/Provider_hero.png"}
          alt="hero_entity"
          className="md:w-[40%] sm:w-[50%] md:pr-0 sm:pr-10 pr-0 z-1"
          width={550}
          height={670}
        />
        <h2 className="font-tektur font-medium lg:text-[75px]/[128px] absolute bottom-0 gradient-banner-text text-4xl md:flex hidden">
          {activeView?.headline}
        </h2>
      </div>
    </Container>
  );
};

export default Hero;
