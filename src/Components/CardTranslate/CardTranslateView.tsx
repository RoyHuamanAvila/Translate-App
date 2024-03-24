import './CardTranslate.css'
import LanguageRadio from '../LanguageRadio/LanguageRadio'
import { mainLanguages, otherLanguages } from '../../language.config'
import { FC } from 'react'
import { getLanguageName } from '../../utils';
import { Copy, SortAlfa, SoundMaxFill } from "../SVG";
import type { CardTranslateView } from '../../Types';

const CardTranslateView: FC<CardTranslateView> = ({ changeOriginalLanguage, changeOriginalText, handleCopyToClipboard, originalLanguage, originalText, textAreaRef, handleSubmit }) => {
  return (
    <form className='card' onSubmit={handleSubmit}>
      <div className="card-translate__header">
        <div className="language-options">
          {
            mainLanguages.map((language) => {
              return (
                <LanguageRadio
                  key={language}
                  languageCode={language}
                  changeLanguage={changeOriginalLanguage}
                  currentOriginalLanguageCode={originalLanguage}
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
            otherLanguages.map(language => <option key={language} value={language}>{getLanguageName(language)}</option>)
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
        maxLength={500}
      >
      </textarea>
      <p className='card-translate__count'>{originalText.length}/500</p>
      <div className="card-translate__footer">
        <div className="card-translate__buttons">
          <button className='btn' title='Voice'>
            <SoundMaxFill />
          </button>
          <button className='btn' title='Copy' onClick={handleCopyToClipboard}>
            <Copy />
          </button>
        </div>
        <button className='btn btn--translate' type='submit'>
          <SortAlfa /> Translate
        </button>
      </div>
    </form>
  )
}
export default CardTranslateView;
