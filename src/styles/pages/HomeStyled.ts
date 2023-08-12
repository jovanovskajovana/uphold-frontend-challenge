import styled from 'styled-components'

import { breakpoints } from '../../constants/breakpoints'

export const HomeStyled = styled.div`
  padding: 5rem 1.5rem;
`

export const InputGroup = styled.div`
  position: relative;
  width: 35%;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.screenMD}) {
    width: 70%;
  }

  @media (max-width: ${breakpoints.screenSM}) {
    width: 100%;
  }
`

export const InputSelector = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.5rem;

  @media (max-width: ${breakpoints.screenSM}) {
    right: 1rem;
  }
`

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 35%;

  @media (max-width: ${breakpoints.screenMD}) {
    width: 70%;
  }

  @media (max-width: ${breakpoints.screenSM}) {
    width: 100%;
  }
`

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 1.5rem;

  @media (max-width: ${breakpoints.screenSM}) {
    padding: 0 1rem;
  }
`
