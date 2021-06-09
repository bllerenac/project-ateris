import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = 'AIzaSyDo8xM2GOEdneQXHgIFkjSQBR1Un-8TqOc';
//const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A';
//'AIzaSyDo8xM2GOEdneQXHgIFkjSQBR1Un-8TqOc'
// const channelID = 'UCBR8-60-B28hp2BmDPdntcQ'
// const result = 20;
const BASE_URI = 'https://www.googleapis.com/youtube/v3';

//category = ${BASE_URI}/videoCategories?key=${API_KEY}&part=snippet,id&order=date&regionCode=PE&maxResults=${result}

export const fetchSearch = createAsyncThunk(
  'get/fetchSearch',
  async(query)=> {
    return fetch(`${BASE_URI}/search?key=${API_KEY}&part=snippet,id&maxResults=5&type=video&videoCategoryId=10&q=${query}`).then((res) => 
    res.json())
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: [],
    status: null,
  },
  extraReducers: {
    [fetchSearch.pending]: (state, action)=>{
      state.status = 'loading'
    },
    [fetchSearch.fulfilled]: (state, {payload})=>{
      state.list = payload;
      state.status = 'success';
    },
    [fetchSearch.rejected]: (state, action)=>{
      state.status = 'failed';
    },
  }
});

export default searchSlice.reducer;
