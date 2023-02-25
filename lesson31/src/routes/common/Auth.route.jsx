import { Fragment } from "react";
import SignInComponent from "components/auth/SignIn";
import SignUpComponent from "components/auth/SignUp";

export const SignIn = () => {
	return (
		<Fragment>
			<SignInComponent />
		</Fragment>
	);
}

export const SignUp = () => {
	return (
		<Fragment>
			<SignUpComponent />
		</Fragment>
	);
}