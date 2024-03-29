import MultiOption from "../MultiOption/MultiOption"
import { getAllLanguagesName } from "../../utils"
import { useAppSelector } from "../../app/hooks";

const CardResultTranslate = () => {
  const { translateText } = useAppSelector(state => state.translate);
  return (
    <form className="card">
      <MultiOption
        options={getAllLanguagesName()}
        name="language-traduced"
        prefix="language-traduced"
      />
      <textarea className="text-area" name="text-traduced" title="Text traduced" readOnly value={translateText}></textarea>
    </form>
  )
}
export default CardResultTranslate
