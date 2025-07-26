"use client";

import Container from "@/components/Common/Container";
import React from "react";
import { motion } from "framer-motion";

interface IServiceItemProps {
  item: {
    icon: string;
    title: string;
    des: string;
  };
  index: number;
}

const SERVICE_DATA = [
  {
    icon: "images/ServiceFeatures/icon1.svg",
    title: "All Verticals\nAccepted",
    des: "BH, GH, WH are all accepted",
  },
  {
    icon: "images/ServiceFeatures/icon2.svg",
    title: "Diverse, Scalable\nAccounts",
    des: "Include all types of accounts and unlimited spending",
  },
  {
    icon: "images/ServiceFeatures/icon3.svg",
    title: "High-Quality,\nWarmed-up Assets",
    des: "Include old and well-spent accounts, pre-warmed up!",
  },
  {
    icon: "images/ServiceFeatures/icon4.svg",
    title: "Support around\nthe clock",
    des: "Personal support team in hand 24/7",
  },
];

const Services = () => {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 w-full max-w-[1440px] mt-10">
      {SERVICE_DATA.map((item, index) => {
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
        {item.title}
      </h4>
      <p className="font-inter text-base whitespace-pre-line max-w-[80%] text-[#D9D9D9]">
        {item.des}
      </p>
    </motion.div>
  );
};

export default Services;
