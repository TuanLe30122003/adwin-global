import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Header() {
  const t = await getTranslations("HomePage");

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
    <div className="flex flex-row w-full px-14 py-10 items-center justify-between fixed top-0 left-0 right-0 z-[9999]">
      <div className="flex justify-center items-center">
        <img src="/images/Adwin_logo.png" alt="Adiwn-logo" />
      </div>
      <div className="flex flex-row lg:justify-between justify-end items-center min-w-[50%] gap-4">
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
