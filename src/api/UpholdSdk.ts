import SDK from '@uphold/uphold-sdk-javascript'

import { ValuePerCurrency } from '../interfaces/data'

import { getSupportedCurrencyPairs } from '../utils/helpers'

const sdk = new SDK({
  baseUrl: process.env.REACT_APP_UPHOLD_BASE_URL,
  clientId: process.env.REACT_APP_UPHOLD_CLIENT_ID!,
  clientSecret: process.env.REACT_APP_UPHOLD_CLIENT_SECRET!,
})

export default {
  async fetchCurrencies(currency: string): Promise<ValuePerCurrency[]> {
    const response = await sdk.getTicker(currency)

    const parsedResponse = response
      .filter((item) => getSupportedCurrencyPairs(currency).includes(item.pair))
      .map((item) => ({
        currency: item.currency,
        value: parseFloat(item.ask),
      }))

    return parsedResponse
  },
}
