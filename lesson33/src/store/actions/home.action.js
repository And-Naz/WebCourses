import { SET_HOME_TEXT } from "../actionType"

export const setHomeText = text => ({
	type: SET_HOME_TEXT,
	payload: { text }
})