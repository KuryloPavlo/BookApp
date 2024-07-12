import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookData from "../../../assets/data";

const initialState: initialBookStateI = {
  availableGenres: null,
  books: null,
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  try {
    console.log("here");
    const data: BookI[] = JSON.parse(JSON.stringify(bookData));
    const allGenres: string[] = data.map((book: BookI) => book.genre);
    return {
      books: data,
      availableGenres: Array.from(new Set(allGenres)),
    };
  } catch (error) {
    console.log(error);
    throw Error("Failed to read JSON file");
  }
});

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
      state.books = payload.books;
      state.availableGenres = payload.availableGenres;
    });
  },
});

export default bookSlice.reducer;
