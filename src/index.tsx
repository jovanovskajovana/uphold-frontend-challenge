import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'

import { theme } from './constants/theme'

import Home from './pages/Home'

import GlobalStyles from './styles/GlobalStyles'
import Fonts from './styles/Fonts'
import { Main } from './styles/Layout'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <Fonts />
    <ThemeProvider theme={theme}>
      <Main>
        <Home />
      </Main>
    </ThemeProvider>
  </QueryClientProvider>,
)
