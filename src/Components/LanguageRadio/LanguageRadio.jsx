import propTypes from 'prop-types';
import { mainLanguages } from '../../LanguagesSettings.json';

const LanguageRadio = ({ language, handleSelectLanguage }) => {
  return (
    <span className='language-radio-control'>
      <input
        className='language-radio'
        type='radio'
        id={language}
        name='language'
        defaultChecked={language === mainLanguages[0]}
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

export default LanguageRadio;
