import styled from 'styled-components'

import { breakpoints } from '../../constants/breakpoints'

export const InputStyled = styled.input`
  font-size: 3rem;
  color: ${({ theme }) => theme.textSecondary};
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border: 0;
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.75rem 9rem 0.75rem 1.5rem;

  @media (max-width: ${breakpoints.screenSM}) {
    padding: 0.75rem 9rem 0.75rem 1rem;
  }

  ::placeholder {
    color: ${({ theme }) => theme.textTertiary};
  }
`
