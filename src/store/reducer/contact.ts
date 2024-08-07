import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/contact'

type ContactState = {
  itens: Contact[]
  error: string | null
}

const initialState: ContactState = {
  itens: [],
  error: null
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contact) => contact.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const index = state.itens.findIndex(
        (contact) => contact.id === action.payload.id
      )
      const isDuplicate = state.itens.some(
        (contact, idx) =>
          idx !== index &&
          (contact.nome.toLowerCase() === action.payload.nome.toLowerCase() ||
            contact.numero === action.payload.numero)
      )

      if (isDuplicate) {
        state.error = 'Contato já existe com esse nome ou número'
      } else {
        state.itens[index] = action.payload
        state.error = null
      }
    },
    ToAdd: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const isDuplicate = state.itens.some(
        (contact) =>
          contact.nome.toLowerCase() === action.payload.nome.toLowerCase() ||
          contact.numero === action.payload.numero
      )

      if (isDuplicate) {
        alert('Contato já existe')
      } else {
        const lastContact = state.itens[state.itens.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.itens.push(newContact)
        state.error = null
      }
    },
    clearError: (state) => {
      state.error = null
    }
  }
})

export const { remove, edit, ToAdd, clearError } = contactSlice.actions
export default contactSlice.reducer
