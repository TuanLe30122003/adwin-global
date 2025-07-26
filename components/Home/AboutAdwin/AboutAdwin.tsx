"use client";

import Container from "@/components/Common/Container";
import React from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl"; // Make sure this is imported

// No longer need a prop for aboutData, as it's fetched internally
// interface AboutAdwinProps {
//   aboutData: {
//     title: string;
//     des: string;
//   }[];
// }

const AboutAdwin = () => {
  // Removed aboutData prop
  // Scope translations to the 'aboutAdwin' section for easier access
  const t = useTranslations("HomePage.aboutAdwin");

  // Define a type for type safety when working with the fetched array
  type StatItem = {
    title: string;
    description: string;
  };

  // Fetch the 'stats' array directly from the translations.
  // `t.raw("stats")` gives you the untranslated (raw) JavaScript array/object.
  const AboutData: StatItem[] = t.raw("stats");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardContainerVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  const Partner = [
    {
      url: "/images/PartnerBrand/brand1.svg",
    },
    {
      url: "/images/PartnerBrand/brand2.svg",
    },
    {
      url: "/images/PartnerBrand/brand3.svg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start gap-6">
      <Container className="flex lg:flex-row flex-col py-6 bg-transparent max-w-[1440px] xl:mt-[-30px] md:mt-16 mt-4 justify-between lg:items-start items-center gap-12">
        <motion.div
          className="flex flex-col gap-4"
          variants={textVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="font-tektur text-[55px] font-normal lg:text-left text-center"
            variants={textVariants as any}
          >
            {t("title")} {/* Fetches "About Adwin" or "Об Adwin" */}
          </motion.h2>
          <motion.p
            className="font-inter text-base font-normal xl:whitespace-pre-line opacity-70 max-w-[550px] lg:text-left text-center"
            variants={textVariants as any}
          >
            {t("description")} {/* Fetches the main description */}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 lg:items-start items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-row md:gap-12 gap-4 ">
            {/* Map over the AboutData array, which now contains the translated stats */}
            {AboutData?.map((feature, idx) => (
              <motion.div
                className="flex flex-col gap-4 items-start justify-center"
                key={idx}
                variants={itemVariants}
              >
                <h3 className="text-primaryGreen font-semibold font-tektur text-3xl">
                  {feature.title} {/* Uses the title from the JSON array */}
                </h3>
                <p className="md:text-sm text-xs text-white opacity-70 font-normal">
                  {feature.description}{" "}
                  {/* Uses the description from the JSON array */}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="border border-primaryGreen py-5 md:px-10 px-4 flex flex-row md:gap-12 gap-4 items-center md:w-[470px]"
            variants={cardContainerVariants as any}
          >
            <div className="flex flex-row">
              {Partner.map((_, idx) => (
                <div
                  className="md:w-[46px] md:h-[46px] w-[36px] h-[36px] border border-primaryGreen rounded-full ml-[-4px] flex flex-row justify-center items-center overflow-hidden"
                  key={idx}
                >
                  <img src={_.url} alt="" />
                </div>
              ))}
              <div className="md:w-[46px] md:h-[46px] w-[36px] h-[36px] bg-primaryGreen rounded-full ml-[-4px] flex flex-row justify-center items-center">
                <Plus className="text-black" />
              </div>
            </div>

            <p className="text-2xl text-white font-tektur">
              {t("partner")} {/* Fetches "Partner" or "Партнер" */}
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default AboutAdwin;
