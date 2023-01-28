// import MyClassComponent from "./MyClassComponent"
import {
	GreetingClassComponent,
	GreetingClassPureComponent,
	GreetingFunctionalComponent,
	MemoedFunctional,
	MemoedClass
} from "./components"

import './App.css';
import { useState } from "react";

function App() {
	const [flag, setFlag] = useState(false);
	const [counter, setCounter] = useState(0);
	return (
		<>
			<button
				onClick={() => {
					setFlag(prev => !prev)
				}}
			>
				hide/show
			</button>
			<button
				onClick={() => {
					setCounter(counter + 1)
				}}
			>
				Counter: {counter}
			</button>
			{
				flag
					? (
						<>
							<GreetingClassComponent name="GreetingClassComponent" />
							<GreetingClassPureComponent name="GreetingClassPureComponent" />
							<GreetingFunctionalComponent name="GreetingFunctionalComponent" />
							<MemoedFunctional name="MemoedFunctional" />
							<MemoedClass name="MemoedClass" />
						</>
					)
					: null
			}
		</>
	);
}

export default App;