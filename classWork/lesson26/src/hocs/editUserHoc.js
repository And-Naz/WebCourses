import useSelector from "../hooks/useSelector"
import useDispatcher from "../hooks/useDispatcher"
import { useEffect, useReducer } from "react";
import { reducer } from "./editUserHocStor";
import { deepCopy } from "../utils"


const EditUserHoc = (Component) => {

	const WrappedByEditUserHoc = () => {

		const currentUserId = useSelector(state => state.currentUserId);
		const users = useSelector(state => state.users);
		const currentUser = users.find(user => user.id === currentUserId);
		const [editUser, dispatch] = useReducer(reducer, deepCopy(currentUser))
		
		if (!editUser) {
			return null
		}

		const inputConfigList = [
			{
				name: "name",
				text: "Name",
				type: "text",
				value: editUser.name,
				handlers: {
					onChange: Function.prototype
				}
			},
			{
				name: "email",
				text: "Email",
				type: "email",
				value: editUser.email,
				handlers: {
					onChange: Function.prototype
				}
			},
			{
				name: "addressStreet",
				text: "Address Street",
				type: "text",
				value: editUser.address.street,
				handlers: {
					onChange: Function.prototype
				}
			},
			{
				name: "companyName",
				text: "Company Name",
				type: "text",
				value: editUser.company.name,
				handlers: {
					onChange: Function.prototype
				}
			}
		]
		

		return (
			<Component
				inputConfigList={inputConfigList}
				onSubmitText="Submit"
				onSubmitClick={Function.prototype}
				onResetText="Reset"
				onResetClick={Function.prototype}
			/>
		)
	}


	return WrappedByEditUserHoc;
}

export default EditUserHoc;


