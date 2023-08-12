import { FC, useState, useCallback } from 'react'
import debounce from 'lodash/debounce'

import { InputStyled } from '../styles/components/InputStyled'

import { formatToNumber, formatToLocaleString } from '../utils/helpers'

interface InputProps {
  onInputChange: (amount: number) => void
}

const Input: FC<InputProps> = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('')

  const debouncedOnInputChange = useCallback(debounce(onInputChange, 300), [])

  const handleInputChange = (entry: string) => {
    try {
      setInputValue(formatToLocaleString(entry))
      debouncedOnInputChange(formatToNumber(entry))
    } catch (error) {
      console.warn(error)
    }
  }

  return (
    <InputStyled
      placeholder="0.00"
      value={inputValue}
      onChange={(e) => handleInputChange(e.target.value)}
      onPaste={(e) => e.preventDefault()}
      maxLength={15}
    />
  )
}

export default Input
