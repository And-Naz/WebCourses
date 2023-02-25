import ProtectedRoute from "routes/Protected.route";

const HomeRoute = () => {
	return (
		<ProtectedRoute>
			<div>
				My Profile
			</div>
		</ProtectedRoute>
	);
}

export default HomeRoute;