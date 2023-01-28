import { useState, useEffect } from "react";
import { REQUEST_URLS } from "./constants"

const UserComponent = ({ user }) => {

	const [photoUrl, setPhotoUrl] = useState(null);
	const [isPhotoLoading, setIsPhotoLoading] = useState(false);

	const getPhoto = async () => {
		setIsPhotoLoading(true);

		const userAlbumResponse = await fetch(REQUEST_URLS.ALBUMS + "?/_limit=1&userId=" + user.id)
		const userAlbumArray = await userAlbumResponse.json();
		const userAlbum = userAlbumArray[0];
		const userPhotoResponse = await fetch(REQUEST_URLS.PHOTOS + "?/_limit=1&albumId=" + userAlbum.id)
		const userPhotoArray = await userPhotoResponse.json();
		const userPhoto = userPhotoArray[0];

		setPhotoUrl(userPhoto.thumbnailUrl)
		setIsPhotoLoading(false);
	}

	useEffect(() => {
		getPhoto();
	}, [])

	return (
		<div key={user.id} className="card with-border">
			<div className="card_img-place with-border">
				{
					isPhotoLoading
						? (<span>Photo Loading...</span>)
						: (<img src={photoUrl} alt="img" />)
				}
			</div>
			<div className="card_info">
				<div className="card_info_row data_place">
					<span className="user-data with-border" >{user.name}</span>
					<span className="user-data with-border">{user.email}</span>
				</div>
			</div>
		</div>
	)
}

export default UserComponent;