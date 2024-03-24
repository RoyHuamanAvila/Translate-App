import { FC, FormEvent, useRef } from "react";
import CardTranslateView from "./CardTranslateView"
import { copyToClipBoard } from "../../utils";
import type { CardTranslate } from "../../Types";

const CardTranslateContainer: FC<CardTranslate> = ({ originalText, originalLanguage, changeOriginalText, changeOriginalLanguage, handleSubmit }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

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
      handleSubmit={handleSubmit}
    />
  )
}
export default CardTranslateContainer
