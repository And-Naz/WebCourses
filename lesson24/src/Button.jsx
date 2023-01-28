import { useEffect, memo } from "react";

const Button = ({ onClick, children }) => {
	useEffect(() => {
		console.log("render: ", children);
	})
	return (
		<button onClick={onClick}>{children}</button>
	);
}

export default memo(Button);