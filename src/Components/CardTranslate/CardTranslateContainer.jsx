import { useRef, useState } from "react";
import CardTranslateView from "./CardTranslateView"
import { copyToClipBoard } from "../../utils";
//import { mainLanguages } from '../../LanguagesSettings.json'

const CardTranslateContainer = () => {
  const [text, setText] = useState('Hello, how are you?');
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const textAreaRef = useRef(null);

  const handleInputTextArea = (e) => {
    const targetText = e.target.value;
    let textToTranslate = targetText.substring(0, 500);

    setText(textToTranslate);
  }

  const handleSelectLanguage = (e) => {
    setSelectedLanguage(e.target.value);
  }

  const handleCopyToClipboard = (e) => {
    e.preventDefault();
    copyToClipBoard(textAreaRef.current.value);
  }
  return (
    <CardTranslateView
      to={''}
      from={selectedLanguage}
      text={text}
      handleInputTextArea={handleInputTextArea}
      handleSelectLanguage={handleSelectLanguage}
      selectedLanguage={selectedLanguage}
      textAreaRef={textAreaRef}
      handleCopyToClipboard={handleCopyToClipboard}
    />
  )
}
export default CardTranslateContainer
