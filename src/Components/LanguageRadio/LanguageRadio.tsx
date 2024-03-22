import { FC, FormEvent } from "react";

interface LanguageRadioProps {
  language: string;
  currentOriginalLanguage: string;
  changeLanguage: (e: FormEvent<HTMLInputElement>) => void;
}

const LanguageRadio: FC<LanguageRadioProps> = ({ changeLanguage, currentOriginalLanguage, language }) => {
  return (
    <span className='language-radio-control'>
      <input
        className='language-radio'
        type='radio'
        id={language}
        name='language'
        onChange={changeLanguage}
        value={language}
        checked={language === currentOriginalLanguage ? true : false}
      ></input>
      <label className='language-label' htmlFor={language}>{language.replace('_', ' ')}</label>
    </span>
  )
}

export default LanguageRadio;
