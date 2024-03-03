import './CardTranslate.css'

const CardTranslate = () => {
  return (
    <form className={`card-translate`}>
      <div className="card-translate__header">
        <div className="language-options">
          <input className='language-radio' type="radio" id='detect_language' name='language' />
          <label className='language-label' htmlFor="detect_language">Detect Language</label>

          <input className='language-radio' type="radio" id='english' name='language' defaultChecked />
          <label className='language-label' htmlFor="english">English</label>

          <input className='language-radio' type="radio" id='french' name='language' />
          <label className='language-label' htmlFor="french">French</label>
        </div>
      </div>
      <hr />
      <textarea name="text-to-translate" id="text-to-translate" cols="30" rows="5" defaultValue={'Hello, how are you?'}>
      </textarea>
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
export default CardTranslate
