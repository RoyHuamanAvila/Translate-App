import { useState } from "react";
import CardTranslateView from "./CardTranslateView"
//import { mainLanguages } from '../../LanguagesSettings.json'

const CardTranslateContainer = () => {
  const [text, setText] = useState('Hello, how are you?');
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const handleInputTextArea = (e) => {
    const targetText = e.target.value;
    let textToTranslate = targetText.substring(0, 500);

    setText(textToTranslate);
  }

  const handleSelectLanguage = (e) => {
    setSelectedLanguage(e.target.value);
  }

  return (
    <CardTranslateView
      to={''}
      from={selectedLanguage}
      text={text}
      handleInputTextArea={handleInputTextArea}
      handleSelectLanguage={handleSelectLanguage}
      selectedLanguage={selectedLanguage}
    />
  )
}
export default CardTranslateContainer
