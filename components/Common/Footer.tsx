import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-9 md:px-10 px-4 bg-[#0C1618] flex flex-row justify-center items-center">
      <div className="max-w-[1140px]">
        <h2 className="outlineText xl:text-[80px] lg:text-[64px] md:text-[46px] sm:text-[36px] text-[24px] font-tektur w-full text-center">
          FACEBOOK ACCOUNT AGENCY
        </h2>

        <div className="flex md:flex-row flex-col justify-start items-start mt-10">
          <p className="font-tektur text-3xl mb-4">Contact Us</p>
          <div className="flex flex-col justify-start items-start xl:ml-20 md:ml-10 font-inter">
            <div className="text-sm opacity-80 leading-6 font-inter">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                thutranotp@gmail.com
              </p>
              <p>
                <span className="font-semibold">Address:</span> New Bridge Road,
                Singapore
              </p>
            </div>
          </div>
          {/* <div className="flex flex-col justify-start items-start ml-20 font-inter">
            <div className="text-sm opacity-80 leading-6 font-inter">
              <p>
                <span className="font-semibold">Telegram:</span>{" "}
              </p>
              <p>
                <span className="font-semibold">Wechat:</span>
              </p>
            </div>
          </div> */}
        </div>

        <div className="flex flex-row justify-between items-center mt-10 border-t border-[#D9D9D9] font-inter py-4">
          <p className="text-[#FFFFFFB2] text-sm">AdWin</p>
          <p className="text-[#FFFFFFB2] text-sm ">©2025 All right reversed </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
