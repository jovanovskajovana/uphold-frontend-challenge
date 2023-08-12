import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTheme } from 'styled-components'

import UpholdSdk from '../api/UpholdSdk'

import Input from '../components/Input'
import Select from '../components/Select'
import Loader from '../components/Loader'

import { supportedCurrencies } from '../constants/data'

import { Container } from '../styles/Layout'

import {
  Headline,
  BodyLarge,
  BodyMedium,
  BodySmall,
} from '../styles/Typography'
import {
  CurrencyStyled,
  CurrencyIcon,
} from '../styles/components/CurrencyStyled'
import {
  HomeStyled,
  InputGroup,
  InputSelector,
  Table,
  TableRow,
} from '../styles/pages/HomeStyled'

import { getCalculatedRate } from '../utils/helpers'

const Home = () => {
  const theme = useTheme()

  const [inputAmount, setInputAmount] = useState(0)
  const [selectedCurrency, setSelectedCurrency] = useState('USD')

  const { isLoading, isError, data } = useQuery({
    queryKey: ['currency', selectedCurrency],
    queryFn: () => UpholdSdk.fetchCurrencies(selectedCurrency),
    refetchOnWindowFocus: false,
  })

  const getCurrencyIcon = (currency: string) =>
    supportedCurrencies.find((item) => item.id === currency)

  return (
    <HomeStyled>
      <Container column mobileColumn alignItems="center">
        <Headline marginBottom="1.5rem">Currency Converter</Headline>
        <BodyLarge
          color={theme.textTertiary}
          maxWidth="32rem"
          alignCenter
          marginBottom="3.5rem"
        >
          Receive competitive and transparent pricing with no hidden spreads.
          See how we compare.
        </BodyLarge>
        <InputGroup>
          <Input onInputChange={setInputAmount} />
          <InputSelector>
            <Select
              selectedOption={selectedCurrency}
              onSelectedOptionChange={setSelectedCurrency}
            />
          </InputSelector>
        </InputGroup>

        {isLoading && <Loader />}

        {!isLoading && isError && (
          <BodyMedium color={theme.textDanger}>
            Something went wrong.
          </BodyMedium>
        )}

        {!isLoading &&
          !isError &&
          (inputAmount === 0 ? (
            <BodyMedium color={theme.textTertiary}>
              Enter an amount to check the rates.
            </BodyMedium>
          ) : (
            <Table>
              {data?.map((item, index) => (
                <TableRow key={index}>
                  <BodyMedium color={theme.textSecondary} weight={600}>
                    {getCalculatedRate(item.value, inputAmount)}
                  </BodyMedium>
                  <CurrencyStyled>
                    <CurrencyIcon
                      src={getCurrencyIcon(item.currency)?.iconPath}
                      alt={item.currency}
                    />
                    <BodySmall color={theme.textSecondary} weight={600}>
                      {item.currency}
                    </BodySmall>
                  </CurrencyStyled>
                </TableRow>
              ))}
            </Table>
          ))}
      </Container>
    </HomeStyled>
  )
}

export default Home
