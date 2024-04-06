import { FormEvent, useState } from "react"
import FormTranslateView from "./FormTranslateView"
import { getAllLanguagesName } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setOriginalLanguageCode, setOriginalText, setTranslateLanguageCode, setTranslateText } from "../../features/translate/translateSlice";
import { Response } from "../../Types";

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

  const getResponseAPI = async (q: string, langPair: string) => {
    await fetch(`https://api.mymemory.translated.net/get?q=${q}!&langpair=${langPair}`)
      .then(response => response.json())
      .then((data: Response) => {
        console.log(data);
        dispatch(setTranslateText(data.responseData.translatedText));
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const langPair = `${originalLanguageCode}|${translateLanguageCode}`;

    getResponseAPI(originalText, langPair);
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
      handleSubmit={handleSubmit}
    />
  )
}
export default FormTranslateContainer
