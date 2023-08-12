import { FC, useState } from 'react'
import { useTheme } from 'styled-components'

import { supportedCurrencies } from '../constants/data'

import { BodySmall } from '../styles/Typography'
import { CurrencyIcon } from '../styles/components/CurrencyStyled'
import {
  SelectStyled,
  SelectHeader,
  SelectBody,
  SelectOption,
} from '../styles/components/SelectStyled'

import Caret from './icons/Caret'

interface SelectProps {
  selectedOption: string
  onSelectedOptionChange: (value: string) => void
}

const Select: FC<SelectProps> = ({
  selectedOption,
  onSelectedOptionChange,
}) => {
  const theme = useTheme()

  const [selectOpen, setSelectOpen] = useState(false)

  const handleSelect = (value: string) => {
    onSelectedOptionChange(value)
    setSelectOpen(false)
  }

  const selectedOptionData = supportedCurrencies.find(
    (item) => item.id === selectedOption
  )

  return (
    <SelectStyled>
      <SelectHeader onClick={() => setSelectOpen(!selectOpen)}>
        <CurrencyIcon
          src={selectedOptionData?.iconPath}
          alt={selectedOptionData?.id}
        />
        <BodySmall color={theme.textSecondary} weight={600}>
          {selectedOption}
        </BodySmall>
        <Caret
          fill={theme.textTertiary}
          className={selectOpen ? 'icon-caret open' : 'icon-caret'}
        />
      </SelectHeader>
      {selectOpen && (
        <SelectBody>
          {supportedCurrencies
            .filter((item) => item.id !== selectedOption)
            .map((item, index) => (
              <SelectOption key={index} onClick={() => handleSelect(item.id)}>
                <CurrencyIcon src={item.iconPath} alt={item.id} />
                <BodySmall color={theme.textSecondary} weight={600}>
                  {item.id}
                </BodySmall>
              </SelectOption>
            ))}
        </SelectBody>
      )}
    </SelectStyled>
  )
}

export default Select
