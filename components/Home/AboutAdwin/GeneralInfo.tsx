"use client";

import Container from "@/components/Common/Container";
import CustomButton from "@/components/Common/CustomButton";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const GeneralInfo = () => {
  return (
    <Container className="flex flex-col lg:flex-row gap-5 w-full lg:max-w-[1440px] md:max-w-[500px] mt-16">
      {/* Box 2 - Hình ảnh + Nút (đẩy lên đầu dưới lg) */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 basis-1/3 order-1 lg:order-2"
      >
        <img src="/images/adwinGI.svg" alt="adwinGI" />
        <div className="flex flex-col gap-6 py-4 px-5 gradient-2 items-center">
          <h4 className="font-tektur text-xl text-center">
            Smart Pixel Integration for Instant Launch & Optimization
          </h4>
          <CustomButton className="font-tektur w-[175px] text-deepDark bg-[#37FD76] hover:bg-[#fff] py-2 px-4 text-lg">
            See more
          </CustomButton>
        </div>
      </motion.div>

      {/* Box 1 */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.6, delay: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 bg-[#0C1618] border border-primaryGreen p-8 basis-1/3 order-2 lg:order-1"
      >
        <h4 className="text-white font-orbitron text-3xl md:whitespace-pre-line mb-4">
          {"All GEOs,\nCurrencies\n& Time Zones\nSupported"}
        </h4>
        <ul className="list-disc list-inside text-base text-[#D9D9D9] space-y-2">
          <li className="text-base text-[#D9D9D9]">
            Correct IP & GEO matching
          </li>
          <li className="text-base text-[#D9D9D9]">Local currency settings</li>
          <li className="text-base text-[#D9D9D9]">Matching time zones</li>
        </ul>
      </motion.div>

      {/* Box 3 */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 bg-[#0C1618] border border-primaryGreen p-8 basis-1/3 order-3"
      >
        <h4 className="text-white font-orbitron text-3xl md:whitespace-pre-line mb-4">
          {"Built for\nSpeed & Scale"}
        </h4>
        <ul className="list-disc list-inside text-base text-[#D9D9D9] space-y-2">
          <li className="text-base text-[#D9D9D9]">Warmed-up, aged accounts</li>
          <li className="text-base text-[#D9D9D9]">AdsPower license</li>
          <li className="text-base text-[#D9D9D9]">Dedicated VPS</li>
          <li className="text-base text-[#D9D9D9]">Browser setup included</li>
        </ul>
      </motion.div>
    </Container>
  );
};

export default GeneralInfo;
