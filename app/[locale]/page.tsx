import Hero from "@/components/Home/Hero/Hero";
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

  return (
    <div>
      {" "}
      <div className="w-full background-effect-1">
        <Hero heroData={heroData} />
      </div>
      <div className="h-[1000px]"></div>
    </div>
  );
}
