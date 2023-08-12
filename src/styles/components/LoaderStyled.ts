import styled, { keyframes } from 'styled-components'

const flash = keyframes`
  0% {
    background-color: #f5f9fc;
    box-shadow: 1rem 0 #f5f9fc, -1rem 0 #49cc68;
  }
  50% {
    background-color: #49cc68;
    box-shadow: 1rem 0 #f5f9fc, -1rem 0 #f5f9fc;
  }
  100% {
    background-color: #f5f9fc;
    box-shadow: 1rem 0 #49cc68, -1rem 0 #f5f9fc;
  }
`

export const LoaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.75rem;
`

export const LoaderInner = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.backgroundHighlight};
  box-shadow:
    1rem 0 ${({ theme }) => theme.backgroundSecondary},
    -1rem 0 ${({ theme }) => theme.backgroundSecondary};
  position: relative;
  animation: ${flash} 1s ease-out infinite alternate;
`
