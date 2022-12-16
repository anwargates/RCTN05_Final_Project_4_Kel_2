import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../api/api'

const initialState = {
  isPending: false,
  isSuccess: false,
  isFailed: null,
  errorMessage: null,
  currentPageNumber: 1,
  totalPage: '',
  currentSearch: 'man',
  item: [],
}

// async thunk untuk mencari move
export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async ({ search, page = 1 }, { getState, rejectWithValue }) => {
    try {
      const currentSearch = search ? search : getState().movies.currentSearch
      const response = await axios.get(
        `${BASE_URL}s=${currentSearch}&page=${page}`
      )
      console.log('RESPONSE IN SEARCH', response)
      // reject jika ada error
      if (response.data.Error) throw response.data.Error
      return { response: response.data, search: search, page: page }
    } catch (err) {
      throw err
    }
  }
)

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(searchMovies.pending, (state) => {
        // alert('ispending')
        state.isSuccess = false
        state.isPending = true
        state.isFailed = false
        state.errorMessage = null
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        // console.log('fulfilled', action.payload.response.Search)
        // // console.log('state', state.item)
        state.isPending = false
        state.isSuccess = true
        state.isFailed = false
        state.errorMessage = null
        state.item = action.payload.response.Search
        state.totalPage = Math.ceil(action.payload.response.totalResults / 10)
        state.currentPageNumber = action.payload.page
        state.currentSearch = action.payload.search
        state.errorMessage = action.payload.response.Error ?? null
      })
      .addCase(searchMovies.rejected, (state, action) => {
        alert(action.error.message)
        // console.log('rejected', action)
        state.isPending = false
        state.isSuccess = false
        state.isFailed = true
        state.item = null
        state.errorMessage = action.error.message
      })
  },
})

export default movieSlice.reducer
