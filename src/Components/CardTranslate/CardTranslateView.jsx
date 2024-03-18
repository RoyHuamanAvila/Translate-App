import { func, string } from 'prop-types';
import './CardTranslate.css'
import LanguageRadio from '../LanguageRadio/LanguageRadio'
import { mainLanguages, otherLanguages } from '../../LanguagesSettings.json'

const CardTranslateView = ({ text, handleInputTextArea, handleSelectLanguage, selectedLanguage }) => {
  return (
    <form className={`card-translate`}>
      <div className="card-translate__header">
        <div className="language-options">
          {
            mainLanguages.map(language => {
              return (
                <LanguageRadio
                  key={language}
                  language={language}
                  handleSelectLanguage={handleSelectLanguage}
                  selectedLanguage={selectedLanguage}
                />
              )
            })
          }
        </div>
        <select
          className={`language-select ${otherLanguages.includes(selectedLanguage) ? 'selected' : ''}`}
          onChange={handleSelectLanguage}
          onClick={handleSelectLanguage}
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
        cols="30"
        rows="5"
        onChange={handleInputTextArea}
        value={text}
      >
      </textarea>
      <p className='card-translate__count'>{text.length}/500</p>
      <div className="card-translate__footer">
        <div className="card-translate__buttons">
          <button>
            <img src="/sound_max_fill.svg" alt="Sound icon" />
          </button>
          <button>
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

CardTranslateView.propTypes = {
  text: string,
  handleInputTextArea: func,
  handleSelectLanguage: func,
  selectedLanguage: string,
}
export default CardTranslateView;
