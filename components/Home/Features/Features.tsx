"use client";

import Container from "@/components/Common/Container";
import CustomButton from "@/components/Common/CustomButton";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FeatureSectionProps {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  isReverse?: boolean;
}

const FEATURES = [
  {
    id: "01",
    title: "Charge from only 1%",
    description:
      "Compromised cost for advertiser and company! Simply just a commission. Pay only when you top-up balance, everything else is free!",
    icon: "/images/Feature/icon1.svg", // thay bằng đường dẫn thực tế
  },
  {
    id: "02",
    title: "Trusted BIN",
    description: "BIN from Hongkong, US, Singapore\nand much more!",
    icon: "/images/Feature/icon2.svg", // thay bằng đường dẫn thực tế
  },
  {
    id: "03",
    title: "Instant replenishment",
    description:
      "Instant replenishment and unlimited issuance of cards. Best for affiliate marketing and company usages",
    icon: "/images/Feature/icon3.svg", // thay bằng đường dẫn thực tế
  },
];

const Features = () => {
  return (
    <Container className="flex flex-col gap-20 w-full mt-20 max-w-[1440px] overflow-hidden">
      {FEATURES.map((feature) => (
        <FeatureSection
          key={feature.id}
          id={feature.id}
          title={feature.title}
          description={feature.description}
          imgSrc={feature.icon}
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
  imgSrc,
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
          <img src={imgSrc} alt={title} />
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
              {title}
            </h3>
            <p className="font-inter md:text-base text-sm text-white mt-2 max-w-[400px] opacity-70 line-clamp-4">
              {description}
            </p>
          </div>

          <CustomButton className="font-tektur md:w-[175px] w-[120px] text-deepDark bg-[#37FD76] hover:bg-[#fff] mt-3 py-2 px-4 md:text-lg text-sm">
            See more
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
