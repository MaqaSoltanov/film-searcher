import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";
import movieReducer from "./movieReducer";

const allReducers = combineReducers({
    movieReducer: movieReducer,
    favoriteReducer: favoriteReducer
});

export default allReducers;