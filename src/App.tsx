import './App.css'
import { Response } from './Types';
import { FormTranslate } from './Components';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
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

  useEffect(() => {
    const langPair = `${originalLanguageCode}|${translateLanguageCode}`;

    getResponseAPI(originalText, langPair);
  }, []);

  return (
    <div className="App">
      <FormTranslate />
    </div>
  )
}

export default App
