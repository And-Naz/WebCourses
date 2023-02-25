import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ROUTES from "constants/routes.constants";
import { generateNavLinkClassName } from "utils/routeNavigation";

const Header = () => {
	const isAuthorized = useSelector(state => state.auth.isAuthorized)
	
	return (
		<header className="App-header">
			<nav className="navigation">
				<ul>
					{
						Object.entries(ROUTES)
							.reduce((acc, [key, value]) => {
								if(value.showInHeader && (!value.protected || isAuthorized)) {
									acc.push(
										<li key={key}>
											<NavLink to={value.url} className={generateNavLinkClassName} >{key.toUpperCase()}</NavLink>
										</li>
									)
								}
								return acc;
							}, [])
					}
				</ul>
			</nav>
		</header>
	)
}

export default Header;