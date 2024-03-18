import propTypes from 'prop-types';

const LanguageRadio = ({ language, handleSelectLanguage, selectedLanguage }) => {
  return (
    <span className='language-radio-control'>
      <input
        className='language-radio'
        type='radio'
        id={language}
        name='language'
        onChange={handleSelectLanguage}
        value={language}
        checked={language === selectedLanguage ? true : false}
      ></input>
      <label className='language-label' htmlFor={language}>{language.replace('_', ' ')}</label>
    </span>
  )
}

LanguageRadio.propTypes = {
  language: propTypes.string,
  handleSelectLanguage: propTypes.func,
  selectedLanguage: propTypes.string
}

export default LanguageRadio;
