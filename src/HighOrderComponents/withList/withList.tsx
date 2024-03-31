import './withList.css'
import { FC, useEffect, useState } from "react"
import { OmitMultiple } from "../../Types"

interface SelectProps {
  name: string
  options: string[]
}

const withList = <T extends SelectProps>(WrappedComponent: FC<T>, { name, options }: SelectProps) => {
  return (props: OmitMultiple<T, 'options' | 'name'>) => {
    const [visibleOptions, setVisibleOptions] = useState<string[]>([])
    const [hiddenOptions, setHiddenOptions] = useState<string[]>([])

    useEffect(() => {
      setVisibleOptions(options.slice(0, 3));
      setHiddenOptions(options.slice(3));
    }, [])

    return (
      <div className='with-list'>
        <WrappedComponent {...props as T} options={visibleOptions} />
        <select name={name} id={`${name}-select`} title={name}>
          {hiddenOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    )
  }
}
export default withList
