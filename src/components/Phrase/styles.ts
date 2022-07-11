import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  border-left: 8px solid ${props => props.theme.colors.border};

  span {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 120%;

    color: ${({ theme }) => theme.text.phrase};
  }
`
export const Content = styled.div`
  display: flex;
  width: 80%;
`
