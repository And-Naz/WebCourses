import Rectangle from "./Rectangle";
import ClickBug from "./ClickBug"
import './App.css';
import { useState } from "react";

const colors = ["red", "blue", "black", "grey", "green", "yellow"]

function App() {
	const [counter, setCounter] = useState(0)
	return (
		<>
			<button onClick={() => setCounter(counter + 1)}>just buton {counter}</button>
			{
				colors.map(color => {
					return (
						<ClickBug key={color} bgColor={color} counter={counter} />
					);
				})
			}
		</>
	);
}

export default App;

