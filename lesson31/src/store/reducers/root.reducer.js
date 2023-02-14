import { combineReducers } from "redux";
import homeReducer from "./home.reducer";
import aboutReducer from "./about.reducer";
import contactReducer from "./contact.reducer";
import authReducer from "./auth.reducer";

export default combineReducers({
	home: homeReducer,
	about: aboutReducer,
	contact: contactReducer,
	auth: authReducer
})