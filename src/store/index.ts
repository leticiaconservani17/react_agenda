import { configureStore } from '@reduxjs/toolkit'

import contactReducer from './reducer/contact'
import filterReducer from './reducer/filter'

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
