import { FC, useState } from 'react'

import { InputStyled } from '../styles/components/InputStyled'

import { getCommaSeparatedNumber } from '../utils/helpers'

interface InputProps {
  onInputChange: (n: number) => void
}

const Input: FC<InputProps> = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (entry: string) => {
    if (entry.length === 0) {
      setInputValue('')
      onInputChange(0)
      return
    }

    if (entry.slice(-1) === '.') {
      setInputValue(entry)
      return
    }

    if (entry.slice(-2) === '..') {
      return
    }

    const entryToNumber = Number(entry.split(',').join(''))

    const regexp = /^\d+(\.\d{1,2})?$/
    if (!regexp.test(entryToNumber.toString())) {
      return
    }

    onInputChange(entryToNumber)
    setInputValue(getCommaSeparatedNumber(entryToNumber))
  }

  return (
    <InputStyled
      placeholder="0.00"
      value={inputValue}
      onChange={(e) => handleInputChange(e.target.value)}
    />
  )
}

export default Input
