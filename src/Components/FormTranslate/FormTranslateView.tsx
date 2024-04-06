import { FC, FormEvent } from "react";
import { MultiOption } from "../MultiOption";
import "./FormTranslate.css";
import { getLanguageName } from "../../utils";
import { LanguageCode } from "../../Types";
import { Copy, SortAlfa, SoundMaxFill } from "../SVG";

interface FormTranslateViewProps {
  options: string[];
  originalText: string;
  translateText: string;
  originalLanguageCode: LanguageCode;
  translateLanguageCode: LanguageCode;
  changeOriginalLanguage: (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => void
  changeTranslateLanguage: (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => void
  changeOriginalText: (e: FormEvent<HTMLTextAreaElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const FormTranslateView: FC<FormTranslateViewProps> = ({
  options,
  originalText,
  translateText,
  originalLanguageCode,
  translateLanguageCode,
  changeOriginalLanguage,
  changeTranslateLanguage,
  changeOriginalText,
  handleSubmit
}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <section className="form__section">
        <MultiOption
          currentOption={getLanguageName(originalLanguageCode)}
          options={options}
          name="originalLanguage"
          onClick={changeOriginalLanguage}
          prefix="originalLanguage"
        />
        <hr />
        <textarea
          className="form__textarea"
          name="originalText"
          id="originalText"
          title="Original Text"
          value={originalText}
          onChange={changeOriginalText}
        ></textarea>
        <p className="form__counter">{originalText.length}/500</p>
        <div className="form__footer">
          <section>
            <button className="btn btn-outline" title="Listen">
              <SoundMaxFill />
            </button>
            <button className="btn btn-outline" title="Copy">
              <Copy />
            </button>
          </section>
          <button className="btn btn-primary" type="submit">
            <SortAlfa /> Translate
          </button>
        </div>
      </section>
      <section className="form__section">
        <MultiOption
          currentOption={getLanguageName(translateLanguageCode)}
          options={options.slice(1)}
          name="translateLanguage"
          onClick={changeTranslateLanguage}
          prefix="translateLanguage"
        />
        <hr />
        <textarea
          className="form__textarea"
          name="translatedText"
          id="translatedText"
          title="Translated Text"
          value={translateText}
          readOnly
        ></textarea>
        <div className="form__footer">
          <section>
            <button className="btn btn-outline" title="Listen">
              <SoundMaxFill />
            </button>
            <button className="btn btn-outline" title="Copy">
              <Copy />
            </button>
          </section>
        </div>
      </section>
    </form>
  );
};
export default FormTranslateView;
