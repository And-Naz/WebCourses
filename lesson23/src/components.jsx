import React, { memo } from "react";
import { useState } from "react";
import { useLayoutEffect, useEffect } from "react";

export function GreetingFunctionalComponent ({ name }) {
	useLayoutEffect(() => {
		console.log(name);
		// return () => {}
	})
	return <h1>{ name }</h1>;
}

export class GreetingClassComponent extends React.Component {
	componentDidMount() {
		console.log(this.props.name);
	}

	componentDidUpdate() {
		console.log(this.props.name);
	}

	render() {
		return <h1>{this.props.name}</h1>;
	}
}

export class GreetingClassPureComponent extends React.PureComponent {

	componentDidMount() {
		console.log(this.props.name);
	}

	componentDidUpdate() {
		console.log(this.props.name);
	}

	render() {
		return <h1>Hi, {this.props.name}</h1>;
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return (
	// 		this.props !== this.nextProps
	// 		||
	// 		this.state !== this.nextState
	// 	)
	// }
}

export const MemoedFunctional = memo(
	GreetingFunctionalComponent,
	(prevProps, nextProps) => {
		return prevProps.name !== nextProps.name
	}
);
export const MemoedClass = memo(
	GreetingClassComponent,
	(prevProps, nextProps) => {
		return prevProps.name !== nextProps.name
	}
);

export function RecursiveRenderComponent(params) {
	const [state, setState] = useState(0)

	useEffect(() => {
		setState(state + 1)
	}, [state])
	
	// return
}