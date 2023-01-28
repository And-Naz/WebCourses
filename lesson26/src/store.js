export const ACTION_TYPES = {
	SETUP_USER: "SETUP_USER",
	SETUP_ERROR: "SETUP_ERROR",
	CHANGE_NAME: "CHANGE_NAME",
	CHANGE_USER_NAME: "CHANGE_USER_NAME",
	CHANGE_EMAIL: "CHANGE_EMAIL",
	CHANGE_WEBSITE: "CHANGE_WEBSITE",
	CLEAR_DATA: "CLEAR_DATA",
	REQUEST_BEFORE: "REQUEST_BEFORE",
	REQUEST_AFTER: "REQUEST_AFTER"
};

export const initialState = {
	loading: false,
	error: null,
	user: null,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case ACTION_TYPES.REQUEST_BEFORE:
			return {
				...state,
				loading: true
			}
		case ACTION_TYPES.REQUEST_AFTER:
			return {
				...state,
				loading: false
			}
		case ACTION_TYPES.SETUP_USER:
			return {
				...state,
				user: action.payload,
			};
		case ACTION_TYPES.SETUP_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case ACTION_TYPES.CHANGE_NAME:
			return {
				...state,
				user: {
					...state.user,
					name: action.payload
				}
			};
		case ACTION_TYPES.CHANGE_USER_NAME:
			return {
				...state,
				user: {
					...state.user,
					username: action.payload,
				}
			};
		case ACTION_TYPES.CHANGE_EMAIL:
			return {
				...state,
				user: {
					...state.user,
					email: action.payload,
				}
			};
		case ACTION_TYPES.CHANGE_WEBSITE:
			return {
				...state,
				user: {
					...state.user,
					website: action.payload,
				}
			};
		case ACTION_TYPES.CLEAR_DATA:
			return {...initialState};
		default:
			return state;
	}
};

export const requestBefore = () => ({
	type: ACTION_TYPES.REQUEST_BEFORE
})

export const requestAfter = () => ({
	type: ACTION_TYPES.REQUEST_AFTER
})

export const setupUser = (value) => {
	return {
		type: ACTION_TYPES.SETUP_USER,
		payload: value
	}
}

export const setupError = (value) => {
	return {
		type: ACTION_TYPES.SETUP_ERROR,
		payload: value
	}
}

export const changeName = (value) => {
	return {
		type: ACTION_TYPES.CHANGE_NAME,
		payload: value,
	};
};

export const changeUserName = (value) => {
	return {
		type: ACTION_TYPES.CHANGE_USER_NAME,
		payload: value,
	};
};

export const changeUserEmail = (value) => {
	return {
		type: ACTION_TYPES.CHANGE_EMAIL,
		payload: value,
	};
};

export const changeWebsite = (value) => {
	return {
		type: ACTION_TYPES.CHANGE_WEBSITE,
		payload: value,
	};
};

export const clearData = () => {
	return {
		type: ACTION_TYPES.CLEAR_DATA,
	};
};
