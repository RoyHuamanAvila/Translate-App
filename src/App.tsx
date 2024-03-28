import './App.css'
import { Response } from './Types';
import { CardTranslate, CardResultTranslate } from './Components';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { FormEvent, useEffect } from 'react';
import { setTranslateText } from './features/translate/translateSlice';

function App() {
  const { originalText, originalLanguageCode, translateLanguageCode } = useAppSelector(state => state.translate);
  const dispatch = useAppDispatch();

  const getResponseAPI = async (q: string, langPair: string) => {
    await fetch(`https://api.mymemory.translated.net/get?q=${q}!&langpair=${langPair}`)
      .then(response => response.json())
      .then((data: Response) => {
        console.log(data);
        dispatch(setTranslateText(data.responseData.translatedText));
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const langPair = `${originalLanguageCode}|${translateLanguageCode}`;

    getResponseAPI(originalText, langPair);
  }

  useEffect(() => {
    const langPair = `${originalLanguageCode}|${translateLanguageCode}`;

    getResponseAPI(originalText, langPair);
  }, []);

  return (
    <div className="App">
      <CardTranslate handleSubmit={handleSubmit} />
      <CardResultTranslate />
    </div>
  )
}

export default App
