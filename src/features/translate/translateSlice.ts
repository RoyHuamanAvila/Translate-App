import { createSlice } from "@reduxjs/toolkit";
import { LanguageCode } from "../../Types";

interface TranslateState {
  originalText: string;
  originalLanguageCode: LanguageCode;
  translateText: string;
  translateLanguageCode: LanguageCode;
}

const initialState: TranslateState = {
  originalText: "",
  originalLanguageCode: LanguageCode.English,
  translateText: "",
  translateLanguageCode: LanguageCode.French,
};

export const translateSlice = createSlice({
  name: "Translator",
  initialState,
  reducers: {
    setOriginalText: (state, action) => {
      state.originalText = action.payload;
    },
    setOriginalLanguageCode: (state, action) => {
      state.originalLanguageCode = action.payload;
    },
    setTranslateText: (state, action) => {
      state.translateText = action.payload;
    },
    setTranslateLanguageCode: (state, action) => {
      state.translateLanguageCode = action.payload;
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
