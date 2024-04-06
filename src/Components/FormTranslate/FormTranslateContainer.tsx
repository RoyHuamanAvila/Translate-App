import { useState } from "react"
import FormTranslateView from "./FormTranslateView"
import { getAllLanguagesName } from "../../utils";
import { useAppSelector } from "../../app/hooks";

const FormTranslateContainer = () => {
  const [options, setOptions] = useState<string[]>(getAllLanguagesName());
  const { originalText, translateText, originalLanguageCode, translateLanguageCode } = useAppSelector(state => state.translate);

  return (
    <FormTranslateView
      options={options}
      originalText={originalText}
      translateText={translateText}
      originalLanguageCode={originalLanguageCode}
      translateLanguageCode={translateLanguageCode}
    />
  )
}
export default FormTranslateContainer
