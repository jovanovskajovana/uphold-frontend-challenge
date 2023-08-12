import styled, { css } from 'styled-components'

import { breakpoints } from '../constants/breakpoints'

interface TextProps {
  color?: string
  weight?: number
  marginTop?: string
  marginRight?: string
  marginBottom?: string
  marginLeft?: string
  maxWidth?: string
  alignCenter?: boolean
}

const Text = css<TextProps>`
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ alignCenter }) =>
    alignCenter &&
    `
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    `}
`

export const Headline = styled.h1<TextProps>`
  font-size: 3rem;
  line-height: 3.5rem;
  letter-spacing: -0.015rem;
  color: ${({ theme, color }) => color ?? theme.textPrimary};
  font-weight: ${({ weight }) => weight ?? 600};
  ${Text}

  @media (max-width: ${breakpoints.screenSM}) {
    font-size: 1.75rem;
    line-height: 2.25rem;
    letter-spacing: 0;
  }
`

export const BodyLarge = styled.p<TextProps>`
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: -0.0125rem;
  color: ${({ theme, color }) => (color ? color : theme.textPrimary)};
  font-weight: ${({ weight }) => weight ?? 400};
  ${Text}

  @media (max-width: ${breakpoints.screenSM}) {
    font-size: 1.25rem;
    line-height: 1.75rem;
    letter-spacing: 0;
  }
`

export const BodyMedium = styled.p<TextProps>`
  font-size: 1.25rem;
  line-height: 1.75rem;
  letter-spacing: -0.0125rem;
  color: ${({ theme, color }) => (color ? color : theme.textPrimary)};
  font-weight: ${({ weight }) => weight ?? 400};
  ${Text}

  @media (max-width: ${breakpoints.screenSM}) {
    font-size: 1rem;
    line-height: 1.3rem;
    letter-spacing: 0;
  }
`

export const BodySmall = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.0125rem;
  color: ${({ theme, color }) => (color ? color : theme.textPrimary)};
  font-weight: ${({ weight }) => weight ?? 400};
  ${Text}

  @media (max-width: ${breakpoints.screenSM}) {
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0;
  }
`
