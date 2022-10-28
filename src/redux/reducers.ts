import { combineReducers } from "redux";
import bookSlice from "./books/bookSlice";

const reducer = combineReducers({
  books: bookSlice,
});

export default reducer;