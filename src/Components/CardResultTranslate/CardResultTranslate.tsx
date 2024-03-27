import MultiOption from "../MultiOption/MultiOption"
import { otherLanguages } from "../../language.config"

const CardResultTranslate = () => {
  return (
    <div className="card">
      <MultiOption options={otherLanguages} name="language-traduced" />
    </div>
  )
}
export default CardResultTranslate
