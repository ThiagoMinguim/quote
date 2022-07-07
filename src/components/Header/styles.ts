import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;

  align-items: center;
  margin: 3.1rem 0;
  gap: 0.4375rem;

  color: ${({ theme }) => theme.text.secondary};

  span {
    font-weight: 500;
    font-size: 1.8rem;
  }

  svg {
    width: 1.6rem;
    height: 2.2rem;
  }

  button {
    /* background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit; */
  }
`
