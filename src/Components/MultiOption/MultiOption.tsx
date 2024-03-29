import "./MultiOption.css"
import { FC, FormEvent } from "react"

interface MultiOptionProps {
  name: string;
  options: string[];
  prefix?: string;
  onClick?: (e: FormEvent<HTMLInputElement>) => void;
  currentOption?: string;
}

const MultiOption: FC<MultiOptionProps> = ({ name, options, prefix, onClick, currentOption }) => {
  return (
    <div className="multi-option">
      {
        options.map(option => {
          const fixedID = `${prefix}_${option}`
          return (
            <div className="option" key={fixedID}>
              <input
                id={fixedID}
                type="radio"
                className="option-input"
                name={name}
                onClick={onClick}
                value={option}
                checked={option === currentOption}
                readOnly
              />
              <label htmlFor={fixedID}>{option}</label>
            </div>
          )
        })
      }
    </div>
  )
}
export default MultiOption
