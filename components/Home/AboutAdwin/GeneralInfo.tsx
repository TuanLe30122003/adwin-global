"use client";

import Container from "@/components/Common/Container";
import CustomButton from "@/components/Common/CustomButton";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl"; // Import useTranslations

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const GeneralInfo = () => {
  // Scope translations to the 'HomePage.generalInfo' section
  const t = useTranslations("HomePage.generalInfo");

  // Fetch the items for geoSupport and speedAndScale
  // Use `t.raw()` to get the untranslated (raw) arrays directly
  const geoSupportItems = t.raw("geoSupport.items") as string[];
  const speedAndScaleItems = t.raw("speedAndScale.items") as string[];

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
            {t("smartPixel.title")} {/* Dịch tiêu đề */}
          </h4>
          <CustomButton className="font-tektur w-[175px] text-deepDark bg-[#37FD76] hover:bg-[#fff] py-2 px-4 text-lg">
            {t("smartPixel.button")} {/* Dịch text nút */}
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
          {t("geoSupport.title")} {/* Dịch tiêu đề */}
        </h4>
        <ul className="list-disc list-inside text-base text-[#D9D9D9] space-y-2">
          {geoSupportItems?.map((item, index) => (
            <li key={index} className="text-base text-[#D9D9D9]">
              {item} {/* Các mục này đã được dịch sẵn */}
            </li>
          ))}
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
          {t("speedAndScale.title")} {/* Dịch tiêu đề */}
        </h4>
        <ul className="list-disc list-inside text-base text-[#D9D9D9] space-y-2">
          {speedAndScaleItems?.map((item, index) => (
            <li key={index} className="text-base text-[#D9D9D9]">
              {item} {/* Các mục này đã được dịch sẵn */}
            </li>
          ))}
        </ul>
      </motion.div>
    </Container>
  );
};

export default GeneralInfo;
