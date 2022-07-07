import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 96rem;
  padding-bottom: 2.5rem;

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`
export const NameAuthor = styled.span`
  font-weight: 700;
  font-size: 3.6rem;

  color: ${props => props.theme.colors.box};
`
