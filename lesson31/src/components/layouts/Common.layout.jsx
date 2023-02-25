import { Fragment } from "react";
import { Outlet } from "react-router";
import Header from "../Header"

const CommonLayout = () => {
	return (
		<Fragment>
			<div className="App">
				<Header />
				<main>
					<Outlet />
				</main>
				<footer>FOOTER</footer>
			</div>
		</Fragment>
	)
}

export default CommonLayout;