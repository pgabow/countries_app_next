import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from '@/store/countriesSlice.js'

export default configureStore({
  reducer: {
    countries: countriesReducer,
  },
})
