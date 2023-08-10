import styled from 'styled-components'

import { breakpoints } from '../constants/breakpoints'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  color: ${({ theme }) => theme.textPrimary};
  width: 100%;
  min-height: 100vh;
`

interface ContainerProps {
  column?: boolean
  alignItems?: string
  justifyContent?: string
  gap?: string
  maxWidth?: string
  mobileColumn?: boolean
  mobileJustifyContent?: string
  mobileAlignItems?: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  max-width: ${({ maxWidth }) => maxWidth ?? '1400px'};
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.screenMD}) {
    flex-direction: ${({ mobileColumn }) => (mobileColumn ? 'column' : 'row')};
    justify-content: ${({ mobileJustifyContent }) => mobileJustifyContent};
    align-items: ${({ mobileAlignItems }) => mobileAlignItems};
  }
`
