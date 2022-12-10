import favoriteReducer from "./favoriteReducer";
import movieReducer from "./movieReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    movieReducer: movieReducer,
    favoriteReducer: favoriteReducer
});

export default allReducers;