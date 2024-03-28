import { FormEvent, RefObject } from "react";

export enum LanguageCode {
  "Detect_Language" = "autodetect",
  "English" = "en",
  "Spanish" = "es",
  "French" = "fr",
  "German" = "de",
  "Italian" = "it",
  "Japanese" = "ja",
  "Korean" = "ko",
  "Portuguese" = "pt",
  "Russian" = "ru",
  "Chinese" = "zh",
  "Arabic" = "ar",
  "Hindi" = "hi",
  "Vietnamese" = "vi",
  "Dutch" = "nl",
  "Polish" = "pl",
  "Swedish" = "sv",
  "Turkish" = "tr",
  "Thai" = "th",
  "Indonesian" = "id",
  "Czech" = "cs",
  "Romanian" = "ro",
  "Hungarian" = "hu",
  "Greek" = "el",
  "Finnish" = "fi",
  "Danish" = "da",
  "Norwegian" = "no",
  "Hebrew" = "he",
  "Ukrainian" = "uk",
  "Malay" = "ms",
  "Slovak" = "sk",
  "Croatian" = "hr",
}

export interface GetRequestAPI {
  q: string;
  langPair: string;
  mt?: 1 | 0;
  key?: string;
  onlyPrivate?: 1 | 0;
  ip?: string;
  de?: string;
  user?: string;
}

export interface Response {
  responseData: ResponseData;
  quotaFinished: boolean;
  mtLangSupported: any;
  responseDetails: string;
  responseStatus: number;
  responderId: any;
  exception_code: any;
  matches: Match[];
}

export interface ResponseData {
  translatedText: string;
  match: number;
}

export interface Match {
  id: string;
  segment: string;
  translation: string;
  source: string;
  target: string;
  quality: number;
  reference: any;
  "usage-count": number;
  subject: string;
  "created-by": string;
  "last-updated-by": string;
  "create-date": string;
  "last-update-date": string;
  match: number;
}

export interface CardTranslate {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export interface CardTranslateView extends CardTranslate {
  originalText: string;
  originalLanguageCode: LanguageCode;
  changeOriginalText: (e: FormEvent<HTMLTextAreaElement>) => void;
  changeOriginalLanguage: (
    e: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleCopyToClipboard: (e: FormEvent<HTMLButtonElement>) => void;
  textAreaRef: RefObject<HTMLTextAreaElement>;
}
