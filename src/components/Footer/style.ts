import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: flex-end;

  margin: 2.4rem 0;

  position: absolute;
  bottom: 0;
  margin-top: auto;
  /* padding: 5rem 0; */

  span {
    font-weight: 700;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.text.footer};
  }

  strong {
    text-decoration: underline;
  }
`
