import { useEffect, useState } from "react";
import { REQUEST_URLS } from "./constants"
import UserComponent from "./UserComponent"

const UserList = () => {
	const [users, setUsers] = useState([]);
	const getUserData = async () => {
		const userResponse = await fetch(REQUEST_URLS.USERS);
		const users = await userResponse.json();
		const usersWithPhoto = [];
		for (const user of users) {
			const userAlbumResponse = await fetch(REQUEST_URLS.ALBUMS + "?/_limit=1&userId=" + user.id)
			const userAlbumArray = await userAlbumResponse.json();
			const userAlbum = userAlbumArray[0];
			const userPhotoResponse = await fetch(REQUEST_URLS.PHOTOS + "?/_limit=1&albumId=" + userAlbum.id)
			const userPhotoArray = await userPhotoResponse.json();
			const userPhoto = userPhotoArray[0];
			usersWithPhoto.push(
				{
					...user,
					thumbnailUrl: userPhoto.thumbnailUrl
				}
			);
		}

		setUsers(usersWithPhoto)
	}

	useEffect(() => {
		getUserData();
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