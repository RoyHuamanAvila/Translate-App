import './CardTranslate.css'
import LanguageRadio from '../LanguageRadio/LanguageRadio'
import { mainLanguages, otherLanguages } from '../../LanguagesSettings.json'
import { FC, FormEvent, RefObject } from 'react'

interface CardTranslateViewProps {
  originalText: string;
  originalLanguage: string;
  changeOriginalText: (e: FormEvent<HTMLTextAreaElement>) => void;
  changeOriginalLanguage: (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleCopyToClipboard: (e: FormEvent<HTMLButtonElement>) => void;
  textAreaRef: RefObject<HTMLTextAreaElement>
}

const CardTranslateView: FC<CardTranslateViewProps> = ({ changeOriginalLanguage, changeOriginalText, handleCopyToClipboard, originalLanguage, originalText, textAreaRef }) => {
  return (
    <form className='card'>
      <div className="card-translate__header">
        <div className="language-options">
          {
            mainLanguages.map(language => {
              return (
                <LanguageRadio
                  key={language}
                  language={language}
                  changeLanguage={changeOriginalLanguage}
                  currentOriginalLanguage={originalLanguage}
                />
              )
            })
          }
        </div>
        <select
          title='Language'
          className={`language-select ${otherLanguages.includes(originalLanguage) ? 'selected' : ''}`}
          onClick={changeOriginalLanguage}
        >
          {
            otherLanguages.map(language => <option key={language}>{language}</option>)
          }
        </select>
      </div>
      <hr />
      <textarea
        name="text-to-translate"
        id="text-to-translate"
        cols={30}
        rows={5}
        onChange={changeOriginalText}
        value={originalText}
        ref={textAreaRef}
        placeholder='Escribe...'
      >
      </textarea>
      <p className='card-translate__count'>{originalText.length}/500</p>
      <div className="card-translate__footer">
        <div className="card-translate__buttons">
          <button>
            <img src="/sound_max_fill.svg" alt="Sound icon" />
          </button>
          <button onClick={handleCopyToClipboard}>
            <img src="/Copy.svg" alt="Copy icon" />
          </button>
        </div>
        <button className='translate-button' type='submit'>
          <img src="/Sort_alfa.svg" alt="Sort Alfa" />  Translate
        </button>
      </div>
    </form>
  )
}
export default CardTranslateView;
