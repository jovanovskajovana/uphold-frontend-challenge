import 'styled-components'
import { Theme } from './src/constants/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
