import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../features/services/cryptoAPI'
import { cryptoNewsApi } from '../features/services/cryptoNewsApi'

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
})
