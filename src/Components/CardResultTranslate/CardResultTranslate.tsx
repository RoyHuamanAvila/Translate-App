import MultiOption from "../MultiOption/MultiOption"
import { getAllLanguages } from "../../utils"
import { useAppSelector } from "../../app/hooks";

const CardResultTranslate = () => {
  const { translateText } = useAppSelector(state => state.translate);
  return (
    <form className="card">
      <MultiOption options={getAllLanguages()} name="language-traduced" />
      <textarea className="text-area" name="text-traduced" title="Text traduced" readOnly value={translateText}></textarea>
    </form>
  )
}
export default CardResultTranslate
