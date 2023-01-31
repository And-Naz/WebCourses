import useDispatcher from "./hooks/useDispatcher";
import useSelector from "./hooks/useSelector"
import { setUserCurrentId } from "./stores/main";

const UserNavigation = () => {
	const users = useSelector((state)=> state.users);
	const currentUserId = useSelector((state)=> state.currentUserId)
	const dispatch = useDispatcher()

	return <header className="header flex flex-row flex-justify-center flex-align-center mt-50" >
		<nav className="header__navigation flex flex-row flex-justify-center flex-align-center flex-equal"> 
			<ul className="header__navigation__list flex flex-row flex-justify-center flex-align-center flex-equal">
				{
					users.map((user) => {
						return (
							<li
								key={user.id}
								className={
									"header__navigation__element" +
									(
										user.id === currentUserId
											? " header__navigation__element-active"
											: ""
									)
								}
							>
								<button
									className="header__navigation__button pt-10 pb-10 pl-20 pr-20"
									onClick={() => dispatch(setUserCurrentId(user.id))}
								>
									{user.name}
								</button>
							</li>
						)
					})
				}
			</ul>
		</nav>
	</header>
}

export default UserNavigation;

