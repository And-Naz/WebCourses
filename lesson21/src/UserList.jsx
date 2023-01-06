import { useState, useEffect } from "react"
// import userData from "./userData"
const url = "https://jsonplaceholder.typicode.com/users"

const UserList = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {

		fetch(url)
			.then(res => res.json())
			.then(data => setUsers(data))

	}, [])



	return (
		<ul>
			{
				users.map((user, i) => {
					return (
						<li key={user.id}>{user.id} {user.name}</li>
					)
				})
			}
		</ul>
	)
}

export default UserList;