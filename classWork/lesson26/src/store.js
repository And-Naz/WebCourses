export const initialState = {
	users: [],
	currentUserId: null,
	isLoading: false,
	error: null
}

const SETUP_USERS = "SETUP_USERS";
const LOADING_TRUE = "LOADING_TRUE";
const LOADING_FALSE = "LOADING_FALSE";
const SET_CURRENT_USER_ID = "SET_CURRENT_USER_ID";
const SET_ERROR = "SET_ERROR";


export function reducer(state, action) {
	switch (action.type) {
		case SETUP_USERS:
			return {
				...state,
				users: action.payload
			}
		case LOADING_TRUE:
			return {
				...state,
				isLoading: true
			}
		case LOADING_FALSE:
			return {
				...state,
				isLoading: false
			}
		case SET_CURRENT_USER_ID:
			return {
				...state,
				currentUserId: action.payload
			}
		case SET_ERROR:
			return {
				...state,
				error: action.payload
			}
		default:
			return state
	}
}

export const setupUsers = (users) => ({
	type: SETUP_USERS,
	payload: users
})

export const loadingTrue = () => ({
	type: LOADING_TRUE,

})

export const loadingFalse = () => ({
	type: LOADING_FALSE,
	
})

export const setUserCurrentId = (userId) => ({
	type: SET_CURRENT_USER_ID,
	payload: userId
})

export const setError = (error) => ({
	type: SET_ERROR,
	payload: error
})