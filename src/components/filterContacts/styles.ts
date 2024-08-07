import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  justify-content: space-evenly;
  width: 90%;
`

export const FilterInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
  box-sizing: border-box;
  margin-left: 10px;
  width: 80%;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`

export const FilterButton = styled(Link)`
  display: flex;
  background-color: #007bff;
  height: 64px;
  width: 64px;
  color: #fff;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 40px;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`
