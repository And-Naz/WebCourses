export const ACTION_TYPES = {
	CHANGE_USER_NAME: "CHANGE_USER_NAME",
	CHANGE_EMAIL: "CHANGE_EMAIL",
	CHANGE_PASSWORD: "CHANGE_PASSWORD",
	CHANGE_COMFIRM_PASSWORD: "CHANGE_COMFIRM_PASSWORD",
	CHANGE_ACCEPT_THERMS: "CHANGE_ACCEPT_THERMS",
	RESET_USER_DATA: "RESET_USER_DATA"
}

export const getDefaultUserData = () => {
	return {
		userName: "",
		email: "",
		password: "",
		comfirmPassword: "",
		acceptTherms: false
	}
}

export const reducer = (state, action) => {
	switch (action.type) {
		case ACTION_TYPES.CHANGE_USER_NAME:
			return {
				...state,
				userName: action.payload
			}
		case ACTION_TYPES.CHANGE_PASSWORD:
			return {
				...state,
				password: action.payload
			}
		case ACTION_TYPES.CHANGE_EMAIL:
			return {
				...state,
				email: action.payload
			}
		case ACTION_TYPES.CHANGE_COMFIRM_PASSWORD:
			return {
				...state,
				comfirmPassword: action.payload
			}
		case ACTION_TYPES.CHANGE_ACCEPT_THERMS:
			return {
				...state,
				acceptTherms: !state.acceptTherms
			}
		case ACTION_TYPES.RESET_USER_DATA:
			return getDefaultUserData();
		default:
			return state;
	}
}

export const changeUserName = (value) => {
	return ({
		type: ACTION_TYPES.CHANGE_USER_NAME,
		payload: value
	})
}

export const changeUserPassword = (value) => {
	return ({
		type: ACTION_TYPES.CHANGE_PASSWORD,
		payload: value
	})
}

export const changeUserEmail = (value) => {
	return ({
		type: ACTION_TYPES.CHANGE_EMAIL,
		payload: value
	})
}

export const changeUserComfirmPassword = (value) => {
	return ({
		type: ACTION_TYPES.CHANGE_COMFIRM_PASSWORD,
		payload: value
	})
}

export const changeUserAcceptTherms = () => {
	return ({
		type: ACTION_TYPES.CHANGE_ACCEPT_THERMS
	})
}

export const resetUserData = () => {
	return ({
		type: ACTION_TYPES.RESET_USER_DATA
	})
}

