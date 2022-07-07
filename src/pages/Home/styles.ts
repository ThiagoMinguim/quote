import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 96rem;
  /* background-color: red; */
  /* justify-content: space-between; */
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

export const Content = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  /* width: 80%;   */

  gap: 10rem;
`
export const Red = styled.div`
  background-color: red;
`
