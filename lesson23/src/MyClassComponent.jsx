import React from "react";

/*
	const component = new MyClassComponent(props)
	component.componentWillMount()
	const tag = component.render()
	document append tag
	component.componentDidMount()
*/

class MyClassComponent extends React.Component {

	componentDidMount() {
		console.log("componentDidMount");
	}

	UNSAFE_componentWillMount() {
		console.log("componentWillMount");
	}

	constructor(props) {
		super(props);
		// const [color, setState] = useState("red")
		this.state = {
			color: "red"
		};
		setTimeout(() => {

			this.setState({ color: "blue" });

		}, 2000)
	}

	render() {
		console.log("render");
		return (
			<h1 style={{ color: this.state.color }}>{this.props.text}{this.props.count}</h1>
		)
	}

}

export default MyClassComponent;