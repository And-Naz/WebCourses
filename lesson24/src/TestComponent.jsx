import { useEffect } from "react";
import { memo } from "react";
export default memo(function TestComponent({ array }) {
	// useEffect(() => {
	// 	console.log("render");
	// })
	
	return (
		// <div>
		// 	{counter}
		// </div>
		array.map(num => {
			return (
				<div key={num}>{num}</div>
			);
		})
	);
})