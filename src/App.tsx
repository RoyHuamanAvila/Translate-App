import { useEffect, useState } from 'react'
import './App.css'
import CardTranslate from './Components/CardTranslate'
import { LanguageCode, Response } from './Types';

function App() {
  const [originalText, setOriginalText] = useState<string>('Hello, how are you?');
  const [originalLanguage, setOriginalLanguage] = useState<LanguageCode>(LanguageCode.Detect_Language);
  const [translatedLanguage, setTranslatedLanguage] = useState<LanguageCode>(LanguageCode.French);
  const [translatedText, setTranslatedText] = useState<string>('');

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

  useEffect(() => {
    const langPair = `${originalLanguage}|${translatedLanguage}`;

    getResponseAPI(originalText, langPair);
  }, []);

  return (
    <div className="App">
      <CardTranslate />
    </div>
  )
}

export default App
