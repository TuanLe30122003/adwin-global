"use client";

import Container from "@/components/Common/Container";
import { MoveLeft, MoveRight } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const slideVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

interface IContestItemProps {
  title: string;
  description: string;
  image: string;
}

const contestList: IContestItemProps[] = [
  {
    title: "MAC’2025",
    description:
      "We are very pleased to be present at MAC25 in Yerevan on May 20-21 as a sponsor, and we will be happy to meet you in person! This is a great opportunity to discuss partnerships, new proposals, and promising strategies at a beautiful country, Armenia.",
    image: "/images/Contest/contest1.png",
  },
  {
    title: "BROCONF 5",
    description:
      "We are glad to meet industry leaders, advertisers and experts from all around the world at the largest anniversary conference and most legendary conference in the field of arbitration and affiliate marketing! Admin is a pioneer in the Advertising Accounts Agency field, with recent accounts that made the industry go viral (yet elegant). We have 9+ years in the industry and a big team of more than 100 support staff who have been serving many BIG NAMES in the industry! We’re looking forward to come back for the event soon.",
    image: "/images/Contest/contest2.png",
  },
  {
    title: "BROCONF 4",
    description:
      "The fourth conference from the creators of the arbitration card service BroCard — BROCONF 4 started from October 2 to 3 at the MTS Live Hall in Moscow. We have a chance to meet new market players, say hi in person with our existing customer and start cooperating with some of our great partners.",
    image: "/images/Contest/contest3.png",
  },
  {
    title: "AFFILIATE WORLD ASIA 2024",
    description:
      "With the theme “Connect. Innovate. Dominate”, this event welcomes affiliate marketing and e-commerce leaders from all around the world to Bangkok. Day 1 and 2 packed us with powerful insights, more learning and networking! AWA is truly more than a conference!",
    image: "/images/Contest/contest4.png",
  },
];

const Contests = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? contestList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === contestList.length - 1 ? 0 : prev + 1));
  };

  return (
    <Container className="flex flex-col max-w-[1440px] w-full mt-40 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex} // Very important for AnimatePresence
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
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
      <div className="flex flex-row justify-center items-center md:w-auto w-full">
        <img
          src={image}
          alt="contest"
          className="lg:min-w-[500px] min-w-[300px] rounded-lg object-cover"
        />
      </div>

      <div className="flex flex-col justify-between h-full lg:min-h-[350px]">
        <div>
          <h4 className="font-tektur mb-2 text-primaryGreen font-medium text-3xl">
            {title}
          </h4>
          <p className="text-white opacity-70 text-sm/[30px] font-inter lg:line-clamp-none md:line-clamp-4 line-clamp-none">
            {description}
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
