import { FormEvent, useState } from "react"
import FormTranslateView from "./FormTranslateView"
import { getAllLanguagesName } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setOriginalLanguageCode, setOriginalText, setTranslateLanguageCode } from "../../features/translate/translateSlice";

const FormTranslateContainer = () => {
  const dispatch = useAppDispatch();
  const [options, setOptions] = useState<string[]>(getAllLanguagesName());
  const { originalText, translateText, originalLanguageCode, translateLanguageCode } = useAppSelector(state => state.translate);

  const changeOriginalLanguage = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    dispatch(setOriginalLanguageCode(e.currentTarget.value));
  }

  const changeTranslateLanguage = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    dispatch(setTranslateLanguageCode(e.currentTarget.value));
  }

  const changeOriginalText = (e: FormEvent<HTMLTextAreaElement>) => {
    dispatch(setOriginalText(e.currentTarget.value));
  }

  return (
    <FormTranslateView
      options={options}
      originalText={originalText}
      translateText={translateText}
      originalLanguageCode={originalLanguageCode}
      translateLanguageCode={translateLanguageCode}
      changeOriginalLanguage={changeOriginalLanguage}
      changeTranslateLanguage={changeTranslateLanguage}
      changeOriginalText={changeOriginalText}
    />
  )
}
export default FormTranslateContainer
