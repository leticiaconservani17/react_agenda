import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  termo: string
  nome: string
}

const initialState: FilterState = {
  termo: '',
  nome: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alterarTermo } = filterSlice.actions

export default filterSlice.reducer
