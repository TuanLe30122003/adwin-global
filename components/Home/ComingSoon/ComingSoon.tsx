"use client";

import Container from "@/components/Common/Container";
import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <>
      <motion.div
        className="flex px-4 flex-col w-full justify-center items-center lg:mt-28 mt-16 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-white gradient-3 font-tektur lg:text-[120px] sm:text-[80px] text-[42px]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Virtual Cards
        </motion.h2>

        <motion.p
          className="text-primaryGreen font-tektur lg:text-[150px] sm:text-[80px] text-[30px] lg:mt-[-90px] sm:mt-[-50px] mt-[-20px]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Coming Soon
        </motion.p>

        <motion.div
          className="lg:mt-[-150px] sm:mt-[-130px] min-[400px]:mt-[-100px] mt-[-70px] md:scale-100 scale-75"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/images/ComingSoonCard.svg"
            alt="virtual card"
            className=""
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="md:min-h-[400px] min-h-[300px] 2xl:hidden transition-all duration-150 background-effect-2 w-full object-top sm:mt-[-400px] min-[400px]:mt-[-300px] mt-[-250px] z-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        viewport={{ once: true }}
      />
    </>
  );
};

export default ComingSoon;
