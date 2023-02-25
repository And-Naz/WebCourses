const ROUTES = {
	HOME: {
		url: "/",
		protected: false,
		showInHeader: true
	},
	ABOUT: {
		url: "/about",
		protected: false,
		showInHeader: true
	},
	CONTACT: {
		url: "/contact",
		protected: false,
		showInHeader: true
	},
	AUTH: {
		url: "/auth",
		protected: false,
		showInHeader: true
	},
	AUTH_SIGN_IN: {
		url: "/auth/signIn",
		protected: false,
		showInHeader: false
	},
	AUTH_SIGN_UP: {
		url: "/auth/signUp",
		protected: false,
		showInHeader: false
	},
	PROFILE: {
		url: "/profile",
		protected: true,
		showInHeader: true
	}
}

export default ROUTES;