import { combineReducers, configureStore } from '@reduxjs/toolkit'
import movieSlice from '../features/slice/movieSlice'
import logger from 'redux-logger'

// kombinasi beberapa reducer
const rootReducer = combineReducers({
  movies: movieSlice,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

// subscribe untuk menyimpan state ke local storage di setiap ada perubahan
store.subscribe(() => {
  localStorage.setItem('all', JSON.stringify(store.getState()))
  // console.log("STORE STATE",store.getState().auth)
})
