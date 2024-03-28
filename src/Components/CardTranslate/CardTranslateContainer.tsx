import { FC, FormEvent, useRef } from "react";
import CardTranslateView from "./CardTranslateView"
import { copyToClipBoard } from "../../utils";
import type { CardTranslate } from "../../Types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setOriginalText } from "../../features/translate/translateSlice";

const CardTranslateContainer: FC<CardTranslate> = ({ handleSubmit }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { originalText, originalLanguageCode } = useAppSelector((state) => state.translate);
  const dispatch = useAppDispatch();

  const handleCopyToClipboard = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (textAreaRef.current) {
      copyToClipBoard(textAreaRef.current.value);
    }
  }

  const handleChangeOriginalText = (e: FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    dispatch(setOriginalText(e.currentTarget.value));
  }

  const handleChangeOriginalLanguage = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();
    dispatch(setOriginalText(e.currentTarget.value));
  }

  return (
    <CardTranslateView
      originalText={originalText}
      originalLanguageCode={originalLanguageCode}
      changeOriginalText={handleChangeOriginalText}
      changeOriginalLanguage={handleChangeOriginalLanguage}
      handleCopyToClipboard={handleCopyToClipboard}
      textAreaRef={textAreaRef}
      handleSubmit={handleSubmit}
    />
  )
}
export default CardTranslateContainer
