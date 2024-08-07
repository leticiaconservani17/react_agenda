import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  font-family: Roboto;
  align-items: center;
`

export default GlobalStyle
