// ** Axios Imports
import axios from 'axios'

// ** Redux Imports
import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit'

const endpoint = '/post'

export const getArticles = createAsyncThunk("post/getArticles", async () => {
  return await axios.get(`${endpoint}/list`).then((res) => {
    return res.data.data
  })
})

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    isLoading: false,
    articles: []
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getArticles.fulfilled, (state, action) => {
        state.articles = action.payload.map((item) => ({
          ...item,
          authorImage: 'https://via.placeholder.com/50',
          readTime: '10 min read',
          date: item.createdAt,
          image: '../../article-images/article-1.JPG',
          summary: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et repellat sit vitae eligendi voluptatum exercitationem autem quia.',
          url: '#',

        }))
      })
      .addMatcher(isAnyOf(
        getArticles.pending
      ), (state) => {
        state.isLoading = true
      })
      .addMatcher(isAnyOf(
        getArticles.fulfilled, getArticles.rejected
      ), (state) => {
        state.isLoading = false
      })
  }
})

export const { } = postSlice.actions

export default postSlice.reducer

