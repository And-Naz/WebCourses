import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import ROUTES from 'constants/routes.constants';
import { generateNavLinkClassName } from "utils/routeNavigation";

const AuthLayout = () => {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if(location.pathname === ROUTES.AUTH.url) {
			navigate(ROUTES.AUTH_SIGN_IN.url, { replace: true })
		}
	}, [location.pathname, navigate])

	return (
		<section>
			<div>
				<nav className="navigation">
					<ul>
						<li>
							<NavLink to={ROUTES.AUTH_SIGN_IN.url} className={generateNavLinkClassName} >Sign In</NavLink>
						</li>
						<li>
							<NavLink to={ROUTES.AUTH_SIGN_UP.url} className={generateNavLinkClassName} >Sign Up</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<div>
				<Outlet />
			</div>
		</section>
	);
}

export default AuthLayout;