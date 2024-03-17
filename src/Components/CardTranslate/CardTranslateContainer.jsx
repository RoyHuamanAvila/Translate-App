import { useState } from "react";
import CardTranslateView from "./CardTranslateView"

const CardTranslateContainer = () => {
  const [text, setText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

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
    />
  )
}
export default CardTranslateContainer
