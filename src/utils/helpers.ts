import { supportedCurrencies } from '../constants/data'

export const supportedCurrencyPairs = (currency: string) =>
  supportedCurrencies.map((item) => `${currency}${item}`)
