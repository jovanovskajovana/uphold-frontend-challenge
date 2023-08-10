import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import UpholdSdk from '../api/UpholdSdk'

import { Container } from '../styles/Layout'
import { HomeStyled } from '../styles/pages/HomeStyled'

const Home = () => {
  const [inputAmount, setInputAmount] = useState('1')
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
        <input
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
        />

        <button
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
        </button>

        <div className="table">
          {data?.map((item, index) => (
            <div key={index} className="table-row">
              <p>{item.value * parseFloat(inputAmount)}</p>
              <p>{item.currency}</p>
            </div>
          ))}
        </div>
      </Container>
    </HomeStyled>
  )
}

export default Home
