"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("HomePage");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerMenu = [
    {
      title: t("features.smartPixel"),
      href: "/",
    },
    {
      title: t("features.refundPolicy"),
      href: "/",
    },
    {
      title: t("features.support247"),
      href: "/",
    },
  ];

  return (
    <div
      className={`flex flex-row w-full md:px-12 py-4 items-center px-6 justify-between fixed top-0 left-0 right-0 z-[9999]
        ${
          scrolled
            ? "bg-black"
            : // ? "bg-black rounded-full mx-auto md:w-[80%] w-[90%] px-14 py-4 mt-6 transition-all duration-300"
              ""
        }
      `}
    >
      <div className="flex justify-center items-center">
        <img src="/images/Adwin_logo.png" alt="Adiwn-logo" />
      </div>
      <div className="flex flex-row lg:justify-between justify-end items-center min-w-[50%] gap-10">
        <div className="lg:flex hidden flex-row lg:gap-9 gap-4 items-center">
          {headerMenu.map((tab, idx) => {
            return (
              <a
                href={tab.href}
                className="text-white font-normal text-base cursor-pointer font-tektur"
                key={idx}
              >
                {tab.title}
              </a>
            );
          })}
        </div>
        <LocaleSwitcher />
      </div>
    </div>
  );
}
