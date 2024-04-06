import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageCode } from "../../Types";
import { getLanguageCode } from "../../utils";

interface TranslateState {
  originalText: string;
  originalLanguageCode: LanguageCode;
  translateText: string;
  translateLanguageCode: LanguageCode;
}

const initialState: TranslateState = {
  originalText: "Hello, how are you?",
  originalLanguageCode: LanguageCode.English,
  translateText: "",
  translateLanguageCode: LanguageCode.French,
};

export const translateSlice = createSlice({
  name: "Translator",
  initialState,
  reducers: {
    setOriginalText: (state, action: PayloadAction<string>) => {
      state.originalText = action.payload;
    },
    setOriginalLanguageCode: (state, action: PayloadAction<string>) => {
      const languageCode = action.payload;
      state.originalLanguageCode = getLanguageCode(languageCode);
    },
    setTranslateText: (state, action: PayloadAction<string>) => {
      state.translateText = action.payload;
    },
    setTranslateLanguageCode: (state, action: PayloadAction<string>) => {
      const languageCode = action.payload;
      state.translateLanguageCode = getLanguageCode(languageCode);
    },
  },
});

export const {
  setOriginalText,
  setOriginalLanguageCode,
  setTranslateText,
  setTranslateLanguageCode,
} = translateSlice.actions;

export default translateSlice.reducer;
