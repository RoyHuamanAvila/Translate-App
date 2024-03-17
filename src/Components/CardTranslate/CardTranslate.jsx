import propTypes from 'prop-types';
import './CardTranslate.css'
import { useState } from 'react';

const languages = [
  "detect_language",
  "english",
  "french"
];

const otherLanguages = [
  "spanish",
  "france"
]

const LanguageRadio = ({ language, handleSelectLanguage }) => {
  return (
    <span className='language-radio-control'>
      <input
        className='language-radio'
        type='radio'
        id={language}
        name='language'
        defaultChecked={language === languages[0]}
        onChange={handleSelectLanguage}
        value={language}
      ></input>
      <label className='language-label' htmlFor={language}>{language.replace('_', ' ')}</label>
    </span>
  )
}

LanguageRadio.propTypes = {
  language: propTypes.string,
  handleSelectLanguage: propTypes.func,
}

const CardTranslate = () => {
  const [text, setText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleInput = (e) => {
    const targetText = e.target.value;
    let textToTranslate = targetText.substring(0, 500);

    setText(textToTranslate);
  }

  const handleSelectLanguage = (e) => {
    setSelectedLanguage(e.target.value);
  }

  return (
    <form className={`card-translate`}>
      <div className="card-translate__header">
        <div className="language-options">
          {
            languages.map(language => <LanguageRadio key={language} language={language} handleSelectLanguage={handleSelectLanguage} />)
          }
        </div>
        <select
          className='language-select'
          onChange={handleSelectLanguage}
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
        onChange={handleInput}
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
export default CardTranslate;
