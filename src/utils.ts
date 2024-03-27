import { LanguageCode } from "./Types";

export const copyToClipBoard = async (text: string) => {
  await navigator.clipboard.writeText(text);
};

export const verifiedLangCode = (code: string) => {
  const valid = Object.values(LanguageCode).includes(code as LanguageCode);

  if (!valid) {
    throw new Error("Código invalido");
  }
  return code as LanguageCode;
};

export function getLanguageName(code: string): string {
  const languageName = Object.keys(LanguageCode).find(
    (key) => LanguageCode[key as keyof typeof LanguageCode] === code
  );
  if (languageName) {
    return languageName;
  }
  return "";
}

export function getAllLanguages(): string[] {
  const languages = Object.keys(LanguageCode);
  return languages;
}
