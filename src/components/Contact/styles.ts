import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ListItem = styled.li`
  padding: 20px;
  background-color: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 220px;

  &:last-child {
    border-bottom: none;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  font-family: Roboto, 'sans-serif';
`

export const ContactName = styled.div`
  width: 100%;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  padding: 5px;
  font-weight: bold;
  color: #333;
  font-size: 20px;
`

export const ContactEmail = styled.div`
  width: 100%;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  padding: 5px;
  color: #333;
  font-size: 14px;
`

export const ContactNumber = styled.div`
  width: 100%;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  padding: 5px;
  color: #333;
  font-size: 14px;
`

export const EditInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  padding: 5px;
  font-weight: bold;
  color: #333;
  font-size: 14px;
  font-family: Roboto, 'sans-serif';
`

export const ContactActions = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  gap: 10px;
  justify-content: center;
`

export const Button = styled.button`
  margin-left: 8px;
  border: none;
  color: #007bff;
  font-size: 12px;
  cursor: pointer;
  background: transparent;
  display: flex;
  align-items: center;
`

export const Icon = styled.i`
  font-size: 18px;
  margin-right: 5px;

  &:hover {
    color: #0056b3;
  }
`

export const SaveButton = styled(Button)`
  color: ${variables.verde};
`

export const CancelButton = styled(Button)`
  color: ${variables.vermelho};
`

export const TrashButton = styled(Button)`
  color: ${variables.vermelho};
`
