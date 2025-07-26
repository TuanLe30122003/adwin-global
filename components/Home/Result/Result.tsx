"use client";

import Container from "@/components/Common/Container";
import { MoveLeft, MoveRight } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl"; // Import useTranslations

// Define a type for your result view items for better type safety
type ResultViewItem = {
  image: string;
  dateRange: string;
  campaignCount: number;
  approacher: string;
  costPerResult: string;
  totalExpenditure: string;
  status: string;
};

const Result = () => {
  // Scope translations to the 'HomePage.results' section
  const t = useTranslations("HomePage.results");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1: next, -1: prev

  // Fetch the RESULT_VIEW array directly from the translations
  // Use `t.raw()` to get the untranslated (raw) JSON array.
  const RESULT_VIEW: ResultViewItem[] = t.raw("views");

  // Fetch the labels for the stats
  const labels = {
    campaignsPrefix: t("labels.campaignsPrefix"),
    campaignsSuffix: t("labels.campaignsSuffix"),
    approacher: t("labels.approacher"),
    costPerResult: t("labels.costPerResult"),
    totalExpenditure: t("labels.totalExpenditure"),
    statusEnd: t("labels.statusEnd"),
  };

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
              {/* Use dateRange directly from the fetched RESULT_VIEW */}
              {RESULT_VIEW[currentIndex].dateRange}
            </p>
          </div>

          {/* Right: Stats */}
          <div className="basis-1/2 flex flex-col justify-end gap-2 text-white">
            <p className="font-normal mb-6 font-tektur text-2xl">
              {/* Use translations for "Results from" and "campaigns" */}
              {labels.campaignsPrefix} {RESULT_VIEW[currentIndex].campaignCount}{" "}
              {labels.campaignsSuffix}
            </p>
            <div className="grid min-[400px]:grid-cols-2 grid-cols-1 gap-6 w-full">
              <p className="flex flex-col gap-1 font-tektur">
                <span className="text-primaryGreen font-medium text-2xl font-tektur min-[400px]:text-left text-center">
                  {RESULT_VIEW[currentIndex].approacher}
                </span>
                <span className="text-sm min-[400px]:text-left text-center">
                  {labels.approacher} {/* Use translated label */}
                </span>
              </p>
              <p className="flex flex-col gap-1 font-tektur min-[400px]:text-left text-center">
                <span className="text-primaryGreen font-medium text-2xl font-tektur min-[400px]:text-left text-center">
                  {RESULT_VIEW[currentIndex].costPerResult}
                </span>
                <span className="text-sm">
                  {labels.costPerResult} {/* Use translated label */}
                </span>
              </p>
              <p className="flex flex-col gap-1 font-tektur min-[400px]:text-left text-center">
                <span className="text-yellow-300 font-medium text-2xl font-tektur min-[400px]:text-left text-center">
                  {RESULT_VIEW[currentIndex].totalExpenditure}
                </span>
                <span className="text-sm">
                  {labels.totalExpenditure} {/* Use translated label */}
                </span>
              </p>
              <p className="flex flex-col gap-1 font-tektur min-[400px]:text-left text-center">
                <span className="text-primaryGreen font-medium text-2xl font-tektur min-[400px]:text-left text-center">
                  {RESULT_VIEW[currentIndex].status}
                </span>
                <span className="text-sm">
                  {labels.statusEnd} {/* Use translated label */}
                </span>
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
