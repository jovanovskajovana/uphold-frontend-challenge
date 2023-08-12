import styled from 'styled-components'

export const SelectStyled = styled.div`
  position: relative;
`

export const SelectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 1.5rem;
  padding: 0.5rem 1.25rem 0.5rem 0.75rem;
  cursor: pointer;

  .icon-caret {
    transform: rotate(0) translateY(0);
    will-change: transform;
    transition: transform 0.3s ease-in;

    &.open {
      transform: rotate(-180deg) translateY(0.125rem);
    }
  }
`

export const SelectBody = styled.div`
  position: absolute;
  top: calc(100% + 0.125rem);
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
  border-radius: 0.5rem;
  width: 100%;
  max-height: 11rem;
  overflow-y: auto;
  z-index: 1;
`

export const SelectOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  will-change: background-color;
  transition: background-color 0.15s ease-in;
  padding: 0.5rem 1.25rem 0.5rem 0.75rem;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }
`

export const SelectOptionIcon = styled.img`
  max-width: 1.5rem;
`
