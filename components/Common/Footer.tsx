"use client";

import React from "react";
import { useTranslations } from "next-intl"; // Import useTranslations

const Footer = () => {
  // Scope translations to the 'HomePage.footer' section
  const t = useTranslations("HomePage.footer");
  // Get the headline translation from HomePage directly
  const tHomePage = useTranslations("HomePage");

  return (
    <div className="w-full py-9 md:px-10 px-4 bg-[#0C1618] flex flex-row justify-center items-center">
      <div className="max-w-[1140px]">
        <h2 className="outlineText xl:text-[80px] lg:text-[64px] md:text-[46px] sm:text-[36px] text-[24px] font-tektur w-full text-center">
          {tHomePage("headline")} {/* Use the headline from HomePage */}
        </h2>

        <div className="flex md:flex-row flex-col justify-start items-start mt-10">
          <p className="font-tektur text-3xl mb-4">
            {t("contactUsTitle")} {/* Translate "Contact Us" */}
          </p>
          <div className="flex flex-row gap-16 justify-start items-start xl:ml-20 md:ml-10 font-inter">
            <div className="text-sm opacity-80 leading-6 font-inter">
              <p>
                <span className="font-semibold">
                  {t("emailLabel")}: {/* Translate "Email" label */}
                </span>{" "}
                {t("emailValue")} {/* Translate "Email" value */}
              </p>
              <p>
                <span className="font-semibold">
                  {t("addressLabel")}: {/* Translate "Address" label */}
                </span>{" "}
                {t("addressValue")} {/* Translate "Address" value */}
              </p>
            </div>

            <div className="text-sm opacity-80 leading-6 font-inter">
              <a
                href="https://t.me/emmatranle"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-sm opacity-80 leading-6 font-inter"
              >
                <span className="font-semibold">Telegram</span>
              </a>
              <p>
                <span className="font-semibold">Wechat</span>
              </p>
            </div>
          </div>
          {/* The commented out section for Telegram/Wechat remains commented out */}
        </div>

        <div className="flex flex-row justify-between items-center mt-10 border-t border-[#D9D9D9] font-inter py-4">
          <p className="text-[#FFFFFFB2] text-sm">AdWin</p>
          <p className="text-[#FFFFFFB2] text-sm ">
            {t("copyright")} {/* Translate "©2025 All right reversed" */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
