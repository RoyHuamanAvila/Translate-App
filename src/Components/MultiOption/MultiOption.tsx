import "./MultiOption.css"
import { FC, InputHTMLAttributes } from "react"

interface MultiOptionProps {
  name: string;
  options: string[];
  prefix?: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
}

const MultiOption: FC<MultiOptionProps> = ({ name, options, prefix, type = "radio" }) => {
  return (
    <span className="multi-option">
      {
        options.map(option => {
          const fixedID = `${prefix}_${option}`
          return (
            <>
              <input
                type={type}
                id={fixedID}
                title={option}
                className="option-input"
                name={name}
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
