import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 2.9rem;
  margin: 0 auto;
  /* background-color: ${props => props.theme.colors.box}; */
  background-color: none;

  span {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.8rem;

    color: ${({ theme }) => theme.text.secondary};
  }

  p {
    font-weight: 500;
    font-size: 1.4rem;

    color: ${({ theme }) => theme.text.footer};
  }

  :hover {
    background-color: ${props => props.theme.colors.box};

    span {
      color: ${({ theme }) => theme.text.author};
    }

    svg {
      cursor: pointer;

      color: ${props => props.theme.text.author};
    }
  }

  svg {
    width: 9rem;
    height: 3rem;

    color: ${({ theme }) => theme.background};
  }
`

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.8rem;
`
