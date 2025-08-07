"use client";

import Container from "@/components/Common/Container";
import CustomButton from "@/components/Common/CustomButton";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl"; // Import useTranslations

// Removed hardcoded FEATURES array

// Updated interface to match JSON structure and include buttonText
interface FeatureSectionProps {
  id: string;
  title: string;
  description: string;
  icon: string; // Changed imgSrc to icon to match JSON
  buttonText: string; // Added buttonText
  isReverse?: boolean;
}

const Features = () => {
  // Scope translations to the 'HomePage' section
  const t = useTranslations("HomePage");

  // Fetch the featureSections array directly from the translations
  // Use `t.raw()` to get the untranslated (raw) JSON array.
  // Cast it to the correct type for TypeScript
  const FEATURES = t.raw("featureSections") as {
    id: string;
    title: string;
    description: string;
    icon: string;
    buttonText: string;
  }[];

  return (
    <Container className="flex flex-col gap-20 w-full mt-20 max-w-[1440px] overflow-hidden">
      {FEATURES.map((feature) => (
        <FeatureSection
          key={feature.id}
          id={feature.id}
          title={feature.title}
          description={feature.description}
          icon={feature.icon} // Pass icon instead of imgSrc
          buttonText={feature.buttonText} // Pass buttonText
          isReverse={feature.id === "02"} // Reverse the second feature
        />
      ))}
    </Container>
  );
};

const FeatureSection = ({
  id,
  title,
  description,
  icon, // Changed imgSrc to icon
  buttonText, // New prop
  isReverse,
}: FeatureSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-row justify-between items-center w-full gap-4 ${
        isReverse ? "flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, x: isReverse ? 100 : -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className={`flex flex-row justify-start items-start gap-8 w-full ${
          isReverse ? "flex-row-reverse" : ""
        }`}
      >
        <div className="border border-primaryGreen min-h-[200px] flex flex-row justify-center items-center md:min-w-[160px] min-w-[120px]">
          <img src={icon} alt={title} /> {/* Use icon */}
        </div>
        <div
          className={`flex flex-col justify-between h-full min-h-[200px] ${
            isReverse ? "text-right items-end" : "text-left items-start"
          }`}
        >
          <div>
            <h3
              className={`font-tektur md:text-3xl text-xl text-white ${
                isReverse ? "text-right" : "text-left"
              }`}
            >
              {title} {/* This text is already translated */}
            </h3>
            <p className="font-inter md:text-base/[28px] text-sm text-white mt-2 max-w-[400px] opacity-70 line-clamp-4">
              {description} {/* This text is already translated */}
            </p>
          </div>

          <CustomButton
            className="font-tektur md:w-[175px] w-[120px] text-deepDark bg-[#37FD76] hover:bg-[#fff] mt-3 py-2 px-4 md:text-lg text-sm"
            onClick={() => window.open("https://t.me/emmatranle", "_blank")}
          >
            {buttonText} {/* This text is already translated */}
          </CustomButton>
        </div>
      </div>

      <div>
        <h2 className="text-4xl text-white font-orbitron opacity-10 text-[120px] hidden lg:block">
          {id}
        </h2>
      </div>
    </motion.div>
  );
};

export default Features;
