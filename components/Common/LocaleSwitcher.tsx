"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { Locale, usePathname, useRouter } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const locale = useLocale(); // current locale
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const availableLocales: Locale[] = ["en", "ru", "zh"]; // <-- thêm zh vào đây

  const onSelectChange = (nextLocale: string) => {
    router.replace(
      // @ts-expect-error - See note in original code
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  };

  return (
    <select
      className="border border-white py-1 px-2 bg-black text-white uppercase cursor-pointer font-tektur"
      value={locale}
      onChange={(e) => onSelectChange(e.target.value)}
    >
      {availableLocales.map((loc) => (
        <option key={loc} value={loc}>
          {loc}
        </option>
      ))}
    </select>
  );
}
