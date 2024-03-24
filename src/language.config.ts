import { LanguageCode, LanguageConfig } from "./Types";

const languageConfig: LanguageConfig = {
  mainLanguages: [
    LanguageCode.Detect_Language,
    LanguageCode.English,
    LanguageCode.French,
  ],
  otherLanguages: [
    LanguageCode.Spanish,
    LanguageCode.Chinese,
    LanguageCode.Arabic,
  ],
};

export const { mainLanguages, otherLanguages } = languageConfig;
