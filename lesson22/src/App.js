import MyClassComponent from "./MyClassComponent"

import './App.css';
import { useState } from "react";

function App() {
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
			<MyClassComponent text="btn" count={counter} />
		</>
	);
}

export default App;