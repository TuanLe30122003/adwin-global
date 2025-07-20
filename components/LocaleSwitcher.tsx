"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { Locale, usePathname, useRouter } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (nextLocale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  };

  return (
    <div
      className="border border-white py-1 px-[6px] cursor-pointer"
      onClick={() => {
        const upcomingLang = locale === "en" ? "ru" : "en";
        onSelectChange(upcomingLang);
      }}
    >
      {/* Hiển thị locale hiện tại từ next-intl */}
      <p className="uppercase font-tektur">{locale}</p>
    </div>
  );
}
