"use client";

import Container from "@/components/Common/Container";
import { MoveLeft, MoveRight } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Result = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1: next, -1: prev

  const RESULT_VIEW = [
    {
      image: "/images/Results/Result1.png",
      dateRange: "From March 01, 2025 to April 11, 2025",
      campaignCount: 23,
      approacher: "6,041,965",
      costPerResult: "$51.97",
      totalExpenditure: "$124,209.95",
      status: "In process",
    },
    {
      image: "/images/Results/Result2.png",
      dateRange: "From March 11, 2025 - April 11, 2025",
      campaignCount: 108,
      approacher: "29,415,509",
      costPerResult: "$ ---",
      totalExpenditure: "$65,421.27",
      status: "In process",
    },
    {
      image: "/images/Results/Result3.png",
      dateRange: "February 15, 2025 - April 17, 2025",
      campaignCount: 23,
      approacher: "16,347,235",
      costPerResult: "$ ---",
      totalExpenditure: "$1,853,633",
      status: "Ongoing",
    },
    {
      image: "/images/Results/Result4.png",
      dateRange: "February 3, 2025 - June 26, 2025",
      campaignCount: 23,
      approacher: "483,006",
      costPerResult: "$59.96",
      totalExpenditure: "$1,486,089",
      status: "In process",
    },
  ];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? RESULT_VIEW.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === RESULT_VIEW.length - 1 ? 0 : prev + 1));
  };

  return (
    <Container className="flex flex-col gap-10 w-full mt-12 max-w-[1440px] items-center overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
          transition={{ duration: 0.5 }}
          className="flex lg:flex-row flex-col justify-between w-full lg:items-start items-center lg:gap-24 gap-10"
        >
          {/* Left: Image */}
          <div className="basis-1/2 flex flex-col items-center">
            <img
              src={RESULT_VIEW[currentIndex].image}
              alt={`result-${currentIndex + 1}`}
              className="w-full"
            />
            <p className="text-sm text-white mt-3 font-tektur">
              {RESULT_VIEW[currentIndex].dateRange}
            </p>
          </div>

          {/* Right: Stats */}
          <div className="basis-1/2 flex flex-col justify-end gap-2 text-white">
            <p className="font-normal mb-6 font-tektur text-2xl">
              Results from {RESULT_VIEW[currentIndex].campaignCount} campaigns
            </p>
            <div className="grid min-[400px]:grid-cols-2 grid-cols-1 gap-6 w-full">
              <p className="flex flex-col gap-1 font-tektur">
                <span className="text-primaryGreen font-medium text-2xl font-tektur min-[400px]:text-left text-center">
                  {RESULT_VIEW[currentIndex].approacher}
                </span>
                <span className="text-sm min-[400px]:text-left text-center">
                  Appoacher
                </span>
              </p>
              <p className="flex flex-col gap-1 font-tektur min-[400px]:text-left text-center">
                <span className="text-primaryGreen font-medium text-2xl font-tektur min-[400px]:text-left text-center">
                  {RESULT_VIEW[currentIndex].costPerResult}
                </span>
                <span className="text-sm">Cost per result</span>
              </p>
              <p className="flex flex-col gap-1 font-tektur min-[400px]:text-left text-center">
                <span className="text-yellow-300 font-medium text-2xl font-tektur min-[400px]:text-left text-center">
                  {RESULT_VIEW[currentIndex].totalExpenditure}
                </span>
                <span className="text-sm">Total expenditure</span>
              </p>
              <p className="flex flex-col gap-1 font-tektur min-[400px]:text-left text-center">
                <span className="text-primaryGreen font-medium text-2xl font-tektur min-[400px]:text-left text-center">
                  {RESULT_VIEW[currentIndex].status}
                </span>
                <span className="text-sm">End</span>
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-row min-[400px]:justify-start justify-center items-center gap-4 mt-6">
              <div
                className="w-[42px] h-[42px] rounded-full bg-white flex justify-center items-center cursor-pointer hover:bg-primaryGreen transition-all duration-150"
                onClick={handlePrev}
              >
                <MoveLeft className="text-black" size={20} />
              </div>
              <div
                className="w-[42px] h-[42px] rounded-full bg-white flex justify-center items-center cursor-pointer hover:bg-primaryGreen transition-all duration-150"
                onClick={handleNext}
              >
                <MoveRight className="text-black" size={20} />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default Result;
