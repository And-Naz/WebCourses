import { SET_CONTACTS_USERS } from "../actionType"

export const setContactUsers = (users) => ({
	type: SET_CONTACTS_USERS,
	payload: { users },
})

export const getContactUsers = () => {
	return (dispatch /* , getState */) => {
		return fetch("https://jsonplaceholder.typicode.com/users")
				.then(res => res.json())
				.then(data => dispatch(setContactUsers(data)))
	}
}