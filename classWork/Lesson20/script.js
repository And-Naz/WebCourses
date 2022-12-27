const root = document.getElementById('root');
const REQUEST_URLS = {
	USERS: 'https://jsonplaceholder.typicode.com/users',
	ALBUMS: 'https://jsonplaceholder.typicode.com/albums',
	PHOTOS: 'https://jsonplaceholder.typicode.com/photos',
	POSTS: 'https://jsonplaceholder.typicode.com/posts',
	COMMENTS: 'https://jsonplaceholder.typicode.com/comments'
}

async function mainProcess() {
	const users = await getUsers();

	for(const user of users) {
		const img = await getPhotoUrl(user.id);
		const { postId, postTitle, postBody } = await getPost(user.id);
		const comment = await getComment(postId);
		appendUserCard({ ...user, img, postTitle, postBody, comment });
	}
}

mainProcess();

async function getPost(userId) {
	const postArray = await axios.get(REQUEST_URLS.POSTS + `/?userId=${userId}&_limit=1`).then(res => res.data);
	const post = postArray[0];
	return { postId: post.id, postTitle: post.title, postBody: post.body }
}

async function getComment(postId) {
	const commentArray = await new Promise((res, rej) => {
									$.ajax({
										url: REQUEST_URLS.COMMENTS + `/?postId=${postId}&_limit=1`,
										type: 'GET',
										success: data => res(data),
										error: error => rej(error)
									});
								});
	const comment = commentArray[0];
	return comment.body;
}

async function getPhotoUrl(userId) {
	const albumsUrlOfUser = REQUEST_URLS.ALBUMS + `/?userId=${userId}&_limit=1`;

	const albumArray = await fetch(albumsUrlOfUser).then(res => res.json());

	const album = albumArray[0];

	const photosUrlOfUser = REQUEST_URLS.PHOTOS + `/?albumId=${album.id}&_limit=1`;
	
	const photosArray = await fetch(photosUrlOfUser).then(res => res.json());

	const photo = photosArray[0];

	return photo.thumbnailUrl;
}

function getUsers() {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', REQUEST_URLS.USERS, true)
		xhr.onload = () => {
			resolve(JSON.parse(xhr.responseText))
		}
		xhr.onerror = () => {
			reject(new Error('Invalid Request'))
		}
		xhr.send()
	})
}

function createCardForUser (user) {
	return (
		`
			<div class="card with-border">
				<div class="card__img__place with-border">
					<img src="${user.img}" alt="img" />
				</div>
				<div class="card__info with-border">
					<div class="card__info__row data-place">
						<span class="user-data with-border">${user.name}</span>
						<span class="user-data with-border">${user.email}</span>
					</div>
					<div class="card__info__row post-place with-border">
						<h1>${user.postTitle}</h1>
						<p class="user-post">${user.postBody}</p>
					</div>
					<div class="card__info__row comment-place">
						<p class="user-comment with-border">${user.comment}</p>
					</div>
				</div>
			</div>
		`
	);
}

function appendUserCard(user) {
	const userCard = createCardForUser(user);
	root.innerHTML += userCard;
}