import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axios } from "../../services";
import { IBooks } from '../../types/data'; 

export const getBooks = createAsyncThunk<IBooks[], IBooks>(
  'books/getBooks',
  async (data: any) => {
    const {valueSearch, category, sort, maxResults} = data;
    const response = await axios.get('volumes', {
      params: {
        q: valueSearch + category,
        orderBy: sort,
        maxResults: maxResults,
      },
    }).then((response) => response.data.items);
    return response
  }
);

type BookState = {
  books: IBooks[];
  valueSearch: string;
  categories: string;
  sort: string;
  maxResults: number;
  loading: boolean;
  error: string | null;
}

const initialState: BookState = {
  books: [],
  valueSearch: '',
  categories: 'all',
  sort: 'relevance',
  maxResults: 10,
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    booksSearch: (state, action: PayloadAction<string>) => {
      state.valueSearch = action.payload;
    },
    booksCategories: (state, action: PayloadAction<string>) => {
      state.categories = action.payload;
    },
    booksSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    booksIndex: (state, action: PayloadAction<number>) => {
      state.maxResults = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
        console.log(state.books)
      })
      .addCase(getBooks.rejected, (state) => {
        state.loading = false
      })
  }
});


export default bookSlice.reducer;
export const { booksSearch, booksCategories, booksSort, booksIndex } = bookSlice.actions;