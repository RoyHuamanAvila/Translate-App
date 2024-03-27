import MultiOption from "../MultiOption/MultiOption"
import { getAllLanguages } from "../../utils"

const CardResultTranslate = () => {
  return (
    <div className="card">
      <MultiOption options={getAllLanguages()} name="language-traduced" />
    </div>
  )
}
export default CardResultTranslate
