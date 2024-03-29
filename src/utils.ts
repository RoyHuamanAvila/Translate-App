import { LanguageCode } from "./Types";

export const copyToClipBoard = async (text: string) => {
  await navigator.clipboard.writeText(text);
};

export const verifiedLangCode = (languageName: string) => {
  const valid = Object.values(LanguageCode).includes(
    languageName as LanguageCode
  );

  if (!valid) {
    throw new Error("Código invalido");
  }
  return languageName as LanguageCode;
};

export function getLanguageName(languageCode: LanguageCode): string {
  const language = Object.keys(LanguageCode).find(
    (key) => LanguageCode[key as keyof typeof LanguageCode] === languageCode
  );
  return language || "Detect Language";
}

export function getAllLanguagesName(): string[] {
  const languages = Object.keys(LanguageCode);
  return languages;
}

export function getAllLanguagesCode(): string[] {
  const languagesCode = Object.values(LanguageCode);
  return languagesCode;
}

export function getLanguageCode(languageName: string): LanguageCode {
  if (languageName in LanguageCode) {
    return LanguageCode[languageName as keyof typeof LanguageCode];
  }
  return LanguageCode.Detect_Language;
}
