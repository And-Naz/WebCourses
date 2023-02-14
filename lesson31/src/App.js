import React, { useState } from 'react';
import { Provider } from "react-redux"
import configStore from "./store/configStore";
import './App.css';

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));
const Auth = React.lazy(() => import("./Auth"));

const loading = (<span>Loading...</span>);

function App() {

	const PAGES = {
		home: {
			key: "home",
			element: <Home />
		},
		about: {
			key: "about",
			element: <About />
		},
		contact: {
			key: "contact",
			element: <Contact id="1" />
		},
		auth: {
			key: "auth",
			element: <Auth />
		},
	}

	const [currentPage, setCurrentPage] = useState(PAGES.home.key);

	return (
		<Provider store={configStore}>
			<div className="App">
				<header className="App-header">
					<nav>
						<ul>
							{
								Object.values(PAGES).map(pageInfo => {
									return (
										<li key={pageInfo.key}>
											<button
												className={
													"page-link" +
													(
														currentPage === pageInfo.key ? " page-link-active" : ""
													)
												}
												onClick={() => {
													setCurrentPage(pageInfo.key)
												}}
											>
												{pageInfo.key.toUpperCase()}
											</button>
										</li>
									);
								})
							}
						</ul>
					</nav>
				</header>
				<main>
					<React.Suspense fallback={loading}>
						{
							PAGES[currentPage].element
						}
					</React.Suspense>
				</main>
			</div>
		</Provider>
	);
}

export default App;
