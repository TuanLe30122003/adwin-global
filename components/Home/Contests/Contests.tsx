"use client";

import Container from "@/components/Common/Container";
import { MoveLeft, MoveRight } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl"; // Import useTranslations

// Animation variants
const slideVariants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  animate: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -100 : 100 }),
  transition: { duration: 0.4, ease: "easeInOut" },
};

interface IContestItemProps {
  title: string;
  description: string;
  image: string;
}

// Removed hardcoded contestList

const Contests = () => {
  // Scope translations to the 'HomePage.contests' section
  const t = useTranslations("HomePage.contests");

  // Fetch the contestList array directly from the translations
  // Use `t.raw()` to get the untranslated (raw) JSON array.
  const contestList: IContestItemProps[] = t.raw("list");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1: next, -1: prev

  const handlePrev = () => {
    setDirection(-1); // Set direction for previous slide
    setCurrentIndex((prev) => (prev === 0 ? contestList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1); // Set direction for next slide
    setCurrentIndex((prev) => (prev === contestList.length - 1 ? 0 : prev + 1));
  };

  return (
    <Container className="flex flex-col max-w-[1440px] w-full mt-40">
      <AnimatePresence mode="wait" custom={direction}>
        {" "}
        {/* Pass custom prop to AnimatePresence */}
        <motion.div
          key={currentIndex} // Important for AnimatePresence
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction} // Pass custom prop (direction) to motion.div
          transition={slideVariants.transition as any}
        >
          <ContestItem
            {...contestList[currentIndex]}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

interface ContestItemProps extends IContestItemProps {
  onPrev: () => void;
  onNext: () => void;
}

const ContestItem = ({
  title,
  description,
  image,
  onPrev,
  onNext,
}: ContestItemProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-start gap-10">
      <div className="relative w-full flex justify-center items-center">
        <div className="flex flex-row justify-start items-center md:w-auto w-full relative">
          <img
            src={image}
            alt="contest"
            className="lg:min-w-[500px] min-w-[300px] object-cover"
          />

          <div className="absolute left-0 top-[-36px] h-9 w-[250px] border-t border-l border-r border-primaryGreen z-10">
            <div className="absolute right-[-24px] top-[-24px] w-12 h-12 border-b border-primaryGreen rotate-45 z-20 bg-[#050D10]"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full lg:min-h-[350px]">
        <div>
          <h4 className="font-tektur mb-2 text-primaryGreen font-medium text-3xl">
            {title} {/* This text is already translated */}
          </h4>
          <p className="text-white opacity-70 text-sm/[30px] font-inter lg:line-clamp-none md:line-clamp-4 line-clamp-none">
            {description} {/* This text is already translated */}
          </p>
        </div>

        <div className="flex flex-row min-[400px]:justify-start justify-center items-center gap-4 md:mt-4 mt-6">
          <div
            onClick={onPrev}
            className="w-[42px] h-[42px] rounded-full bg-white flex justify-center items-center cursor-pointer hover:bg-primaryGreen transition-all duration-150"
          >
            <MoveLeft className="text-black" size={20} />
          </div>
          <div
            onClick={onNext}
            className="w-[42px] h-[42px] rounded-full bg-white flex justify-center items-center cursor-pointer hover:bg-primaryGreen transition-all duration-150"
          >
            <MoveRight className="text-black" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contests;
