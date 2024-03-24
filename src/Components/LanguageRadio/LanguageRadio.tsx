import { FC, FormEvent } from "react";
import { LanguageCode } from "../../Types";
import { getLanguageName } from "../../utils";

interface LanguageRadioProps {
  languageCode: LanguageCode;
  currentOriginalLanguageCode: LanguageCode;
  changeLanguage: (e: FormEvent<HTMLInputElement>) => void;
}

const LanguageRadio: FC<LanguageRadioProps> = ({ changeLanguage, currentOriginalLanguageCode, languageCode }) => {
  const languageName = getLanguageName(languageCode);

  return (
    languageName && <span className='language-radio-control'>
      <input
        className='language-radio'
        type='radio'
        id={languageCode}
        name='language'
        onChange={changeLanguage}
        value={languageCode}
        checked={languageCode === currentOriginalLanguageCode ? true : false}
      ></input>
      <label className='language-label' htmlFor={languageCode}>{languageName.replace('_', ' ')}</label>
    </span>
  )
}

export default LanguageRadio;
