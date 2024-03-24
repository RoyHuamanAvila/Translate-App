import { FormEvent, useEffect, useState } from 'react'
import './App.css'
import CardTranslate from './Components/CardTranslate'
import { LanguageCode, Response } from './Types';
import { verifiedLangCode } from './utils';

function App() {
  const [originalText, setOriginalText] = useState<string>('Hello, how are you?');
  const [originalLanguage, setOriginalLanguage] = useState<LanguageCode>(LanguageCode.Detect_Language);
  const [translatedLanguage, setTranslatedLanguage] = useState<LanguageCode>(LanguageCode.French);
  const [translatedText, setTranslatedText] = useState<string>('');

  const changeOriginalText = (e: FormEvent<HTMLTextAreaElement>) => {
    const targetText = e.currentTarget.value;
    let textToTranslate = targetText.substring(0, 500);

    setOriginalText(textToTranslate);
  }

  const changeOriginalLanguage = async (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const languageCode: LanguageCode = verifiedLangCode(e.currentTarget.value);
    setOriginalLanguage(languageCode);
  }

  const getResponseAPI = async (q: string, langPair: string) => {
    await fetch(`https://api.mymemory.translated.net/get?q=${q}!&langpair=${langPair}`)
      .then(response => response.json())
      .then((data: Response) => {
        console.log(data);
        setTranslatedText(data?.responseData?.translatedText);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const langPair = `${originalLanguage}|${translatedLanguage}`;

    getResponseAPI(originalText, langPair);
  }

  useEffect(() => {
    const langPair = `${originalLanguage}|${translatedLanguage}`;

    getResponseAPI(originalText, langPair);
  }, []);

  return (
    <div className="App">
      <CardTranslate
        changeOriginalLanguage={changeOriginalLanguage}
        changeOriginalText={changeOriginalText}
        originalLanguage={originalLanguage}
        originalText={originalText}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default App
