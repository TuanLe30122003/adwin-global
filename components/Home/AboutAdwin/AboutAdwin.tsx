"use client";

import Container from "@/components/Common/Container";
import React from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import Services from "./Services";

interface AboutAdwinProps {
  aboutData: {
    title: string;
    des: string;
  }[];
}

const AboutAdwin = ({ aboutData }: AboutAdwinProps) => {
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
      <Container className="flex lg:flex-row flex-col py-6 bg-transparent max-w-[1440px] xl:mt-[-30px] mt-16 justify-between lg:items-start items-center gap-12">
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
            About Adwin
          </motion.h2>
          <motion.p
            className="font-inter text-base font-normal xl:whitespace-pre-line opacity-70 max-w-[550px] lg:text-left text-center"
            variants={textVariants as any}
          >
            {
              "Pioneering in the Facebook accounts rental service with many\nlarge teams serving affiliate marketing community. Issuing virtual\ncards backed by solid financial support."
            }
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 lg:items-start items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-row gap-12">
            {aboutData?.map((feature, idx) => (
              <motion.div
                className="flex flex-col gap-4 items-start justify-center"
                key={idx}
                variants={itemVariants}
              >
                <h3 className="text-primaryGreen font-semibold font-tektur text-3xl">
                  {feature.title}
                </h3>
                <p className="text-sm text-white opacity-70 font-normal">
                  {feature.des}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="border border-primaryGreen py-5 px-10 flex flex-row  gap-12 items-center w-[470px]"
            variants={cardContainerVariants as any}
          >
            <div className="flex flex-row">
              {Partner.map((_, idx) => (
                <div
                  className="w-[46px] h-[46px] border border-primaryGreen rounded-full ml-[-4px] flex flex-row justify-center items-center overflow-hidden"
                  key={idx}
                >
                  <img src={_.url} alt="" />
                </div>
              ))}
              <div className="w-[46px] h-[46px] bg-primaryGreen rounded-full ml-[-4px] flex flex-row justify-center items-center">
                <Plus className="text-black" />
              </div>
            </div>

            <p className="text-2xl text-white font-tektur">Partner</p>
          </motion.div>
        </motion.div>
      </Container>

      <Services />
    </div>
  );
};

export default AboutAdwin;
