import "./MultiOption.css"
import { FC, FormEvent, useEffect, useState } from "react"

interface MultiOptionProps {
  name: string;
  options: string[];
  prefix?: string;
  onClick: (e: FormEvent<HTMLInputElement>) => void;
  currentOption: string;
}

const MultiOption: FC<MultiOptionProps> = ({ name, options, prefix, onClick, currentOption }) => {
  const [radioOptions, setRadioOptions] = useState<string[]>([])
  const [selectOptions, setSelectOptions] = useState<string[]>([])
  const [selectedOption, setSelectedOption] = useState<string>('')

  useEffect(() => {
    setRadioOptions(options.slice(0, 3));
    setSelectOptions(options.slice(3));
  }, [])

  useEffect(() => {
    if (options.includes(currentOption)) setSelectedOption(currentOption);
  }, [currentOption])

  const handleSelectChange = (e: FormEvent<HTMLSelectElement>) => {
    onClick(e as any);
    setSelectedOption(e.currentTarget.value);
  }

  return (
    <div className="multi-option">
      <div className="multi-option-container">
        {
          radioOptions.map(option => {
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
                <label htmlFor={fixedID}>{option.replace('_', ' ')}</label>
              </div>
            )
          })
        }
      </div>
      <select
        className={`multi-option-select ${selectOptions.includes(currentOption) ? 'active' : ''}`}
        name={name}
        title={name}
        onChange={handleSelectChange}
        value={selectedOption}
      >
        {selectOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
export default MultiOption
