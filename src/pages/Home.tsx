import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTheme } from 'styled-components'

import UpholdSdk from '../api/UpholdSdk'

import Input from '../components/Input'

import { Container } from '../styles/Layout'
import { BodyLarge, Headline } from '../styles/Typography'
import {
  HomeStyled,
  InputGroup,
  InputSelector,
  Table,
  TableRow,
} from '../styles/pages/HomeStyled'

const Home = () => {
  const theme = useTheme()

  const [inputAmount, setInputAmount] = useState(0)
  const [selectedCurrency, setSelectedCurrency] = useState('USD')

  const { isLoading, isError, data } = useQuery({
    queryKey: ['currency', selectedCurrency],
    queryFn: () => UpholdSdk.fetchCurrencies(selectedCurrency),
    refetchOnWindowFocus: false,
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Something went wrong</span>
  }

  return (
    <HomeStyled>
      <Container column mobileColumn alignItems="center">
        <Headline marginBottom="1.5rem" mobileMarginBottom="1.5rem">
          Currency Converter
        </Headline>
        <BodyLarge
          color={theme.textTertiary}
          maxWidth="32rem"
          alignCenter
          marginBottom="3rem"
        >
          Receive competitive and transparent pricing with no hidden spreads.
          See how we compare.
        </BodyLarge>
        <InputGroup>
          <Input onInputChange={setInputAmount} />

          <InputSelector>
            <button
              onClick={() => {
                setSelectedCurrency('EUR')
              }}
            >
              Set EUR
            </button>
          </InputSelector>
        </InputGroup>

        {/* <button
          onClick={() => {
            setSelectedCurrency('EUR')
          }}
        >
          Set EUR
        </button>

        <button
          onClick={() => {
            setSelectedCurrency('CNY')
          }}
        >
          Set CNY
        </button> 

        <button
          onClick={() => {
            setSelectedCurrency('NZD')
          }}
        >
          Set NZD
        </button>*/}

        <Table>
          {data?.map((item, index) => (
            <TableRow key={index}>
              <p>{item.value * inputAmount}</p>
              <p>{item.currency}</p>
            </TableRow>
          ))}
        </Table>
      </Container>
    </HomeStyled>
  )
}

export default Home
