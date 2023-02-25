import React, { Fragment, useState } from 'react';
import { Provider } from "react-redux";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import configStore from "store/configStore";
import NotFound from "components/NotFound"
import HomeRoute from "routes/common/Home.route"
import AboutRoute from "routes/common/About.route"
import ContactRoute from "routes/common/Contact.route"
import { SignIn, SignUp } from "routes/common/Auth.route"
import ProfileRoute from "routes/auth/Profile.route"
import ROUTES from 'constants/routes.constants';
import AuthLayout from 'components/layouts/Auth.layout';
import CommonLayouts from 'components/layouts/Common.layout';
import 'App.css';

function App() {

	const router =  createBrowserRouter(createRoutesFromElements(
		<Route path={ROUTES.HOME.url} element={<CommonLayouts />} errorElement={<NotFound />}>
			<Route path={ROUTES.HOME.url} element={<HomeRoute />}/>
			<Route path={ROUTES.ABOUT.url} element={<AboutRoute />}/>
			<Route path={ROUTES.CONTACT.url} element={<ContactRoute />}/>
			<Route path={ROUTES.AUTH.url} element={<AuthLayout />}>
				<Route path={ROUTES.AUTH_SIGN_IN.url} element={<SignIn />}/>
				<Route path={ROUTES.AUTH_SIGN_UP.url} element={<SignUp />}/>
			</Route>
			<Route path={ROUTES.PROFILE.url} element={<ProfileRoute />}/>
		</Route>
	))
	return (
		<Provider store={configStore}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
