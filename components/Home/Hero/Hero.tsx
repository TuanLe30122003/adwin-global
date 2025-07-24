"use client";

import React, { useEffect, useMemo, useState } from "react";
import Container from "@/components/Common/Container";
import CustomButton from "@/components/Common/CustomButton";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Import motion và AnimatePresence

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
  const [activeHeroView, setActiveHeroView] = useState<number>(1); // Đổi Number thành number

  const activeView = useMemo(() => {
    return heroData.find((view) => view.id === activeHeroView);
  }, [activeHeroView, heroData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroView((prev) => (prev === 1 ? 2 : 1));
    }, 7000); // đổi sau 7 giây

    return () => clearInterval(interval); // Clear khi unmount
  }, []);

  // Các variants cho animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Hiệu ứng xuất hiện từng cái một
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const imageVariants = {
    initial: { x: 50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { x: 50, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.4 },
    },
    exit: { y: 50, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <Container className="pt-[150px] flex md:flex-row flex-col w-full justify-between sm:items-start items-center relative md:h-[100vh] md:max-h-[800px] md:min-h-[700px] h-full gap-4 max-w-[1440px]">
      <motion.div
        className="flex flex-col sm:items-start items-center lg:mt-12 sm:mt-8 mt-4 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-orbitron sm:text-4xl text-2xl font-semibold sm:text-left text-center"
          variants={itemVariants}
        >
          {activeView?.title}
        </motion.h1>
        <motion.p
          className="font-inter sm:whitespace-pre-line font-light md:text-base text-sm mt-4 opacity-70 sm:text-left text-center"
          variants={itemVariants}
        >
          {activeView?.description}
        </motion.p>
        <motion.div variants={itemVariants}>
          {" "}
          <CustomButton className="font-tektur mt-8 min-w-[175px] text-deepDark bg-[#37FD76] hover:bg-[#fff] py-2 px-4 text-lg">
            {activeView?.cta}
          </CustomButton>
        </motion.div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeHeroView.toString() + "-card"} // Key thay đổi để kích hoạt AnimatePresence
          className="group border lg:mt-0 mt-8 border-primaryGreen w-[175px] min-h-[220px] flex flex-col justify-between items-center pt-2 pb-3 gradient-1 cursor-pointer z-10"
          onClick={() => {
            setActiveHeroView((prev) => {
              return prev === 1 ? 2 : 1;
            });
          }}
          variants={cardVariants as any}
          initial="initial"
          animate="animate"
          exit="exit"
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
        </motion.div>
      </AnimatePresence>

      <div className="sm:absolute bottom-0 w-full flex flex-col justify-center md:items-center items-end left-0 right-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHeroView.toString() + "-image"} // Key thay đổi để kích hoạt AnimatePresence
            className={`md:w-[40%] sm:w-[50%] 2xl:w-[30%] md:pr-0 sm:pr-6 pr-0 z-1 mb-2`}
            variants={imageVariants as any}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Image
              src={activeView?.image || "/images/Provider_hero.png"}
              alt="hero_entity"
              width={550}
              height={670}
            />
          </motion.div>
        </AnimatePresence>
        <h2 className="font-tektur font-medium lg:text-[70px] absolute bottom-0 gradient-banner-text text-4xl md:flex hidden">
          {activeView?.headline}
        </h2>
      </div>
    </Container>
  );
};

export default Hero;
