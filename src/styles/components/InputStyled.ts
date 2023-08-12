import styled from 'styled-components'

export const InputStyled = styled.input`
  font-size: 3rem;
  color: ${({ theme }) => theme.textSecondary};
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border: 0;
  border-radius: 0.5rem;
  max-width: 100%;
  padding: 0.75rem 1.5rem;

  ::placeholder {
    color: ${({ theme }) => theme.textTertiary};
  }
`
