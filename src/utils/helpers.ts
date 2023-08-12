import { supportedCurrencies } from '../constants/data'

/**
 * Map supported currency to match Ticker pairs.
 * @param currency - currency name
 * @returns string[] - array of currency pairs
 */
export const getSupportedCurrencyPairs = (currency: string) =>
  supportedCurrencies.map((item) => `${currency}${item.id}`)

/**
 * Calculate currency rate for the given amount.
 * @param currencyValue - rate for the given currency
 * @param inputAmount - the amount entered
 * @returns string - maximum four-decimals formatted amount
 */
export const getCalculatedRate = (currencyValue: number, inputAmount: number) =>
  (currencyValue * inputAmount).toFixed(4)

/**
 * Remove commas from string and convert to number or NaN if entry is char.
 * @param entry - input string
 * @returns number
 */
export const formatToNumber = (entry: string) => {
  return Number(entry.split(',').join(''))
}

/**
 * Verify if the input entry is a valid number format.
 * @param entry - input string
 * @returns boolean
 */
export const isValid = (entry: string) => {
  const regexp = /^\d+(\.\d{1,2})?$/
  return regexp.test(formatToNumber(entry).toString())
}

/**
 * Format input to locale string.
 * @param entry - input string
 * @returns string
 * @throws Error if input is invalid
 */
export const formatToLocaleString = (entry: string) => {
  // return empty string if input is empty
  if (entry.length === 0) {
    return ''
  }

  // check if input is valid
  if (!isValid(entry)) {
    throw new Error('The entry cannot be formatted. Invalid input string.')
  }

  // allow trailing dot for decimal input
  if (entry.slice(-1) === '.') {
    return entry
  }

  return formatToNumber(entry).toLocaleString('en-US')
}
