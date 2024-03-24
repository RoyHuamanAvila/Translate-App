import { FormEvent, useRef, useState } from "react";
import CardTranslateView from "./CardTranslateView"
import { copyToClipBoard, verifiedLangCode } from "../../utils";
import { LanguageCode } from "../../Types";
//import { mainLanguages } from '../../LanguagesSettings.json'

const CardTranslateContainer = () => {
  const [originalText, setOriginalText] = useState('Hello, how are you?');
  const [originalLanguage, setOriginalLanguage] = useState<LanguageCode>(LanguageCode.English);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const changeOriginalText = (e: FormEvent<HTMLTextAreaElement>) => {
    const targetText = e.currentTarget.value;
    let textToTranslate = targetText.substring(0, 500);

    setOriginalText(textToTranslate);
  }

  const changeOriginalLanguage = async (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const languageCode: LanguageCode = verifiedLangCode(e.currentTarget.value);
    setOriginalLanguage(languageCode);
  }

  const handleCopyToClipboard = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (textAreaRef.current) {
      copyToClipBoard(textAreaRef.current.value);
    }
  }
  return (
    <CardTranslateView
      originalText={originalText}
      originalLanguage={originalLanguage}
      changeOriginalText={changeOriginalText}
      changeOriginalLanguage={changeOriginalLanguage}
      handleCopyToClipboard={handleCopyToClipboard}
      textAreaRef={textAreaRef}
    />
  )
}
export default CardTranslateContainer
