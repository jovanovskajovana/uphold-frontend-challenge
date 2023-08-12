import { supportedCurrencies } from '../constants/data'

/**
 * Map supported currency to match Ticker pairs.
 */
export const getSupportedCurrencyPairs = (currency: string) =>
  supportedCurrencies.map((item) => `${currency}${item.id}`)

/**
 * Format number to comma-separated digits.
 */
export const getCommaSeparatedNumber = (entry: number) =>
  entry.toLocaleString('en-US', { maximumFractionDigits: 2 })
