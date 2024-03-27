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
    <span className="multi-option">
      {
        options.map(option => {
          const fixedID = `${prefix}_${option}`
          return (
            <>
              <input
                id={fixedID}
                type="radio"
                className="option-input"
                name={name}
                onClick={onClick}
                value={option}
                checked={option === currentOption}
              />
              <label htmlFor={fixedID}>{option}</label>
            </>
          )
        })
      }
    </span>
  )
}
export default MultiOption
