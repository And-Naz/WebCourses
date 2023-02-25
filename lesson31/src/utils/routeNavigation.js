export const generateNavLinkClassName = ({ isActive }) => {
	return "page-link" + (isActive ? " page-link-active" : "");
}