export interface LanguageConfig {
  mainLanguages: LanguageCode[];
  otherLanguages: LanguageCode[];
}

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
