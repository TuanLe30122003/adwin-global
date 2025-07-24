import Container from "@/components/Common/Container";
import React from "react";

interface IServiceItemProps {
  item: {
    icon: string;
    title: string;
    des: string;
  };
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
    <Container className="flex flex-row gap-9 w-full max-w-[1440px]">
      {SERVICE_DATA.map((item) => {
        return <ServiceItem item={item} />;
      })}
    </Container>
  );
};

const ServiceItem = ({ item }: IServiceItemProps) => {
  return (
    <div className="border border-primaryGreen p-8 flex flex-col items-start h-[300px] basis-1/4">
      <div className="w-[50px] h-[50px] bg-primaryGreen flex justify-center items-center mb-5">
        <img src={item.icon} alt="service" />
      </div>

      <h4 className="text-xl text-white font-orbitron whitespace-pre-line mb-[10px]">
        {item.title}
      </h4>
      <p className="font-inter text-lg text-white whitespace-pre-line max-w-[80%]">
        {item.des}
      </p>
    </div>
  );
};

export default Services;
