"use client"

import { getTranslations } from "next-intl/server";

const t = await getTranslations("HomePage");

export const headerMenu = [
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