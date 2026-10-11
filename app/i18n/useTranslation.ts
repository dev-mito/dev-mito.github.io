"use client";

import { useState } from "react";
import { lang, type Locale } from "@/i18n/lang";

const useTranslation = (_locale: Locale = "en") => {
    const [locale, setLocale] = useState<Locale>(_locale);

    const translate = (key: string) => {
        const value = key.split(".").reduce<unknown>((obj, part) => {
            if (obj === null || typeof obj !== "object" || !(part in obj)) {
                return undefined;
            }

            return (obj as Record<string, unknown>)[part];
        }, lang[locale]);

        return typeof value === "string" ? value : key;
    };

    return { translate, locale, setLocale };
};

export default useTranslation;
