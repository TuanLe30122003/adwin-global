import AboutAdwin from "@/components/Home/AboutAdwin/AboutAdwin";
import GeneralInfo from "@/components/Home/AboutAdwin/GeneralInfo";
import Services from "@/components/Home/AboutAdwin/Services";
import ComingSoon from "@/components/Home/ComingSoon/ComingSoon";
import Contests from "@/components/Home/Contests/Contests";
import Features from "@/components/Home/Features/Features";
import Hero from "@/components/Home/Hero/Hero";
import Result from "@/components/Home/Result/Result";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  const heroData = [
    {
      id: 1,
      title: t("heroViews.1.title"),
      description: t("heroViews.1.description"),
      directCardTitle: "Virtual Card",
      headline: t("headline"),
      cta: t("cta"),
      image: "/images/Provider_hero.png",
      symbol: "/images/Virtual_card.svg",
    },
    {
      id: 2,
      title: t("heroViews.2.title"),
      description: t("heroViews.2.description"),
      directCardTitle: "AdWin",
      headline: t("headline"),
      cta: t("cta"),
      image: "/images/Virtual_card_hero.png",
      symbol: "/images/adwin.svg",
    },
  ];

  const AboutData = [
    {
      title: "$15M+",
      des: "Monthly spending",
    },

    {
      title: "1000+",
      des: "Media buying teams",
    },

    {
      title: "5Y>",
      des: "Experiences",
    },
  ];

  return (
    <div>
      {" "}
      <div className="w-full background-effect-1 xl:min-h-[120vh] min-[2800px]:min-h-[135vh] flex flex-col justify-start items-center">
        <Hero heroData={heroData} />
      </div>
      <div className="w-full flex flex-col items-center">
        <AboutAdwin aboutData={AboutData} />
        <Services />
        <GeneralInfo />
        <Result />
        <ComingSoon />
        <Features />
        <Contests />
      </div>
      <div className="w-full h-[100px]"></div>
    </div>
  );
}
