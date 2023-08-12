import {
  getSupportedCurrencyPairs,
  getCalculatedRate,
  formatToNumber,
  isValid,
  formatToLocaleString,
} from './helpers'

describe('getSupportedCurrencyPairs', () => {
  it('maps supported currencies to currency pairs', () => {
    const currency = 'USD'
    const expectedPairs = [
      'USDUSD',
      'USDEUR',
      'USDBAT',
      'USDBTC',
      'USDBCH',
      'USDETH',
      'USDCNY',
      'USDGBP',
      'USDAUD',
      'USDNZD',
      'USDDKK',
      'USDNOK',
    ]

    const result = getSupportedCurrencyPairs(currency)
    expect(result).toEqual(expectedPairs)
  })
})

describe('getCalculatedRate', () => {
  it('calculates currency rate for the given amount', () => {
    const currencyValue = 1.25
    const inputAmount = 100
    const expectedAmount = '125.0000'
    const result = getCalculatedRate(currencyValue, inputAmount)
    expect(result).toBe(expectedAmount)
  })

  it('calculates currency rate with decimals', () => {
    const currencyValue = 0.125
    const inputAmount = 80
    const expectedAmount = '10.0000'
    const result = getCalculatedRate(currencyValue, inputAmount)
    expect(result).toBe(expectedAmount)
  })
})

describe('formatToNumber', () => {
  it('converts comma-separated string to number', () => {
    const entry = '1,234.56'
    const result = formatToNumber(entry)
    expect(result).toBe(1234.56)
  })

  it('converts string with commas and no decimal places', () => {
    const entry = '1,000'
    const result = formatToNumber(entry)
    expect(result).toBe(1000)
  })

  it('converts string with no commas', () => {
    const entry = '12345.67'
    const result = formatToNumber(entry)
    expect(result).toBe(12345.67)
  })

  it('converts random chars to NaN', () => {
    const entry = 'abc'
    const result = formatToNumber(entry)
    expect(result).toBe(NaN)
  })
})

describe('isValid', () => {
  it('returns true for valid number format', () => {
    const entry = '12345.67'
    const result = isValid(entry)
    expect(result).toBe(true)
  })

  it('returns true for integer', () => {
    const entry = '1000'
    const result = isValid(entry)
    expect(result).toBe(true)
  })

  it('returns false for invalid format', () => {
    const entry = '12.345.67'
    const result = isValid(entry)
    expect(result).toBe(false)
  })

  it('returns false for non-numeric input', () => {
    const entry = 'abc'
    const result = isValid(entry)
    expect(result).toBe(false)
  })
})

describe('formatToLocaleString', () => {
  it('formats valid input to locale string', () => {
    const entry = '12345.67'
    const result = formatToLocaleString(entry)
    expect(result).toBe('12,345.67')
  })

  it('returns empty string for empty input', () => {
    const entry = ''
    const result = formatToLocaleString(entry)
    expect(result).toBe('')
  })

  it('throws error for invalid input', () => {
    const entry = 'abc'
    expect(() => {
      formatToLocaleString(entry)
    }).toThrow('The entry cannot be formatted. Invalid input string.')
  })

  it('allows trailing dot for decimal input', () => {
    const entry = '12345.'
    const result = formatToLocaleString(entry)
    expect(result).toBe(entry)
  })
})
