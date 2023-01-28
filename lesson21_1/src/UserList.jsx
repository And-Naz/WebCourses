import { useEffect, useState } from "react";
import { REQUEST_URLS } from "./constants"
import UserComponent from "./UserComponent"

const UserList = () => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const userResponse = await fetch(REQUEST_URLS.USERS);
		const users = await userResponse.json();
		setUsers(users);
	}

	useEffect(() => {
		getUsers();
	}, [])
	return (
		<>
			{
				users.map((user) => {
					return (
						<UserComponent key={user.id} user={user} />
					)
				})
			}
		</>
	)
}

export default UserList;