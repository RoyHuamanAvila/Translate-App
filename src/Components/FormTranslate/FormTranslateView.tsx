import { FC } from 'react'
import { MultiOption } from '../MultiOption'
import './FormTranslate.css'
import { getLanguageName } from '../../utils'
import { LanguageCode } from '../../Types'
import { Copy, SortAlfa, SoundMaxFill } from '../SVG'

interface FormTranslateViewProps {
  options: string[]
  originalText: string
  translateText: string
  originalLanguageCode: LanguageCode
  translateLanguageCode: LanguageCode
}

const FormTranslateView: FC<FormTranslateViewProps> = ({ options, originalText, translateText, originalLanguageCode, translateLanguageCode }) => {
  return (
    <form className='form'>
      <section className='form__section'>
        <MultiOption
          currentOption={getLanguageName(originalLanguageCode)}
          options={options}
          name='originalLanguage'
          onClick={() => { }}
          prefix='originalLanguage'
        />
        <hr />
        <textarea
          className='form__textarea'
          name="originalText"
          id="originalText"
          cols={30}
          rows={10}
          title='Original Text'
          value={originalText}
        ></textarea>
        <div className="form__footer">
          <section>
            <button className='btn btn-outline' title='Listen'>
              <SoundMaxFill />
            </button>
            <button className='btn btn-outline' title='Copy'>
              <Copy />
            </button>
          </section>
          <button className='btn btn-primary'>
            <SortAlfa /> Translate
          </button>
        </div>
      </section>
      <section className='form__section'>
        <MultiOption
          currentOption={getLanguageName(translateLanguageCode)}
          options={options}
          name='originalLanguage'
          onClick={() => { }}
          prefix='translateLanguage'
        />
        <hr />
        <textarea
          className='form__textarea'
          name="translatedText"
          id="translatedText"
          cols={30}
          rows={10}
          title='Translated Text'
          value={translateText}
          readOnly
        ></textarea>
        <div className="form__footer">
          <section>
            <button className='btn btn-outline' title='Listen'>
              <SoundMaxFill />
            </button>
            <button className='btn btn-outline' title='Copy'>
              <Copy />
            </button>
          </section>
        </div>
      </section>
    </form>
  )
}
export default FormTranslateView
