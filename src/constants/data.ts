import { SupportedCurrency } from '../interfaces/data'

import iconUsd from '../assets/images/icon-usd.png'
import iconEur from '../assets/images/icon-eur.png'
import iconBat from '../assets/images/icon-bat.png'
import iconBtc from '../assets/images/icon-btc.png'
import iconBch from '../assets/images/icon-bch.png'
import iconCny from '../assets/images/icon-cny.png'
import iconEth from '../assets/images/icon-eth.png'
import iconGbp from '../assets/images/icon-gbp.png'
import iconDkk from '../assets/images/icon-dkk.png'
import iconAud from '../assets/images/icon-aud.png'
import iconNzd from '../assets/images/icon-nzd.png'
import iconNok from '../assets/images/icon-nok.png'

export const supportedCurrencies: SupportedCurrency[] = [
  {
    id: 'USD',
    iconPath: iconUsd,
  },
  {
    id: 'EUR',
    iconPath: iconEur,
  },
  {
    id: 'BAT',
    iconPath: iconBat,
  },
  {
    id: 'BTC',
    iconPath: iconBtc,
  },
  {
    id: 'BCH',
    iconPath: iconBch,
  },
  {
    id: 'ETH',
    iconPath: iconEth,
  },
  {
    id: 'CNY',
    iconPath: iconCny,
  },
  {
    id: 'GBP',
    iconPath: iconGbp,
  },
  {
    id: 'AUD',
    iconPath: iconAud,
  },
  {
    id: 'NZD',
    iconPath: iconNzd,
  },
  {
    id: 'DKK',
    iconPath: iconDkk,
  },
  {
    id: 'NOK',
    iconPath: iconNok,
  },
]
