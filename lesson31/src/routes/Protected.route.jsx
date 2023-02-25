import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
	const isAuthorized = useSelector(state => state.auth.isAuthorized)
	if(isAuthorized) {
		return children;
	}
	return <Navigate to={-1} />;
}

export default ProtectedRoute;