import { createStore, combineReducers } from "redux";
import userReducer from "./public/reducer/userReducer";

export let store =createStore(combineReducers({userReducer}));