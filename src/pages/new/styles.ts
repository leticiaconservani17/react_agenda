import styled from 'styled-components'

interface InputProps {
  hasError?: boolean
}

export const ContainerForm = styled.div`
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 220px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  .error-message {
    max-width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #ffdddd;
    border-left: 5px solid #f44336;
    color: #f44336;
    text-align: center;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    font-family: Roboto;
  }
`

export const Label = styled.label`
  font-size: 14px;
  color: #333;
  font-family: Roboto, 'sans-serif';
  font-weight: bold;
`

export const Input = styled.input<InputProps>`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;

  border-color: ${(props) => (props.hasError ? '#f44336' : '#ddd')};

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-around;
`
