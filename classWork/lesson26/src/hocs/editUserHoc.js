import useSelector from "../hooks/useSelector"
import useDispatcher from "../hooks/useDispatcher"
import { useEffect, useReducer } from "react";
import { updateUser } from "../stores/main"
import { reducer, fullUpdate, updateName, updateEmail, updateCompany, updateAddress } from "../stores/editUseStor";


const EditUserHoc = (Component) => {

	const WrappedByEditUserHoc = () => {

		const currentUserId = useSelector(state => state.currentUserId);
		const users = useSelector(state => state.users);
		const currentUser = users.find(user => user.id === currentUserId);
		const mainDispatcher = useDispatcher();
		const [editUser, dispatch] = useReducer(reducer, null)

		const onSubmit = (e) => {
			e.stopPropagation();
			e.preventDefault();
			mainDispatcher(updateUser(editUser))
		}

		const onReset = (e) => {
			e.stopPropagation();
			e.preventDefault();
			dispatch(fullUpdate(currentUser))
		}

		useEffect(() => {
			dispatch(fullUpdate(currentUser))
		}, [currentUser])
		
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
					onChange: (e) => {
						dispatch(updateName(e.target.value))
					}
				}
			},
			{
				name: "email",
				text: "Email",
				type: "email",
				value: editUser.email,
				handlers: {
					onChange: (e) => {
						dispatch(updateEmail(e.target.value))
					}
				}
			},
			{
				name: "addressStreet",
				text: "Address Street",
				type: "text",
				value: editUser.address.street,
				handlers: {
					onChange: (e) => {
						dispatch(updateAddress(e.target.value))
					}
				}
			},
			{
				name: "companyName",
				text: "Company Name",
				type: "text",
				value: editUser.company.name,
				handlers: {
					onChange: (e) => {
						dispatch(updateCompany(e.target.value))
					}
				}
			}
		]
		

		return (
			<Component
				inputConfigList={inputConfigList}
				onSubmitText="Submit"
				onSubmit={onSubmit}
				onResetText="Reset"
				onReset={onReset}
			/>
		)
	}


	return WrappedByEditUserHoc;
}

export default EditUserHoc;


