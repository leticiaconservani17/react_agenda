import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ListContainer = styled.div`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 90vh;
  align-items: center;
  flex-grow: 1;
`

export const Main = styled.main`
  display: flex;
  width: 90%;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 0 10px;
  overflow-y: auto;
  margin-bottom: 24px;
  justify-content: center;
  height: 90%;
  flex-grow: 1;
`

export const ContactsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  gap: 20px;
  align-self: start;
`

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin: 20px 0;
  font-family: Roboto, 'sans-serif';
`
