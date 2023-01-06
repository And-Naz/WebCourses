const MyButton = (props) => {
	const { onClick, children } = props;
	console.log("MyButton");
	return (
		<button
			className="btn"
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default MyButton;