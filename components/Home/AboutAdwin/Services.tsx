"use client";

import Container from "@/components/Common/Container";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl"; // Import useTranslations

// Removed SERVICE_DATA hardcoded array

interface IServiceItemProps {
  item: {
    icon: string;
    title: string;
    description: string; // Changed 'des' to 'description' for consistency with JSON
  };
  index: number;
}

const Services = () => {
  // Scope translations to the 'HomePage' section
  const t = useTranslations("HomePage");

  // Fetch the serviceFeatures array directly from the translations
  // Use `t.raw()` to get the untranslated (raw) JSON array.
  // Cast it to the correct type for TypeScript
  const SERVICE_DATA = t.raw("serviceFeatures") as {
    icon: string;
    title: string;
    description: string; // Use 'description' here
  }[];

  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 w-full max-w-[1440px] mt-10">
      {SERVICE_DATA?.map((item, index) => {
        return <ServiceItem key={index} item={item} index={index} />;
      })}
    </Container>
  );
};

const ServiceItem = ({ item, index }: IServiceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="border border-primaryGreen p-8 flex flex-col items-start md:min-h-[300px] basis-1/4 bg-[#0C1618]"
    >
      <div className="w-[50px] h-[50px] bg-primaryGreen flex justify-center items-center mb-5">
        <img src={item.icon} alt="service" />
      </div>

      <h4 className="text-xl text-white font-orbitron whitespace-pre-line mb-[10px]">
        {item.title} {/* This text will now be translated */}
      </h4>
      <p className="font-inter text-base whitespace-pre-line max-w-[80%] text-[#D9D9D9]">
        {item.description} {/* This text will now be translated */}
      </p>
    </motion.div>
  );
};

export default Services;
