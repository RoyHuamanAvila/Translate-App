import './CardTranslate.css'
import { FC } from 'react'
import { Copy, SortAlfa, SoundMaxFill } from "../SVG";
import type { CardTranslateView } from '../../Types';
import { MultiOption } from '../MultiOption';
import { getAllLanguagesName, getLanguageName } from '../../utils';

const CardTranslateView: FC<CardTranslateView> = ({ changeOriginalLanguage, changeOriginalText, handleCopyToClipboard, originalLanguageCode, originalText, textAreaRef, handleSubmit }) => {
  return (
    <form className='card' onSubmit={handleSubmit}>
      <div className="card-translate__header">
        <MultiOption
          name='languageOriginal'
          prefix='language-original'
          options={getAllLanguagesName()}
          onClick={changeOriginalLanguage}
          currentOption={getLanguageName(originalLanguageCode)}
        />
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
