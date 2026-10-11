const lang = {
    en: {},
    ja: {}
} as const;

type Locale = keyof typeof lang;

export { lang, type Locale };
