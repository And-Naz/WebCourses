import { useMemo, useCallback, useRef, useState,  useEffect } from "react";

function ClickBug({ bgColor, counter }) {
	const divRef = useRef();
	const data = useRef();
	
	useEffect(() => {

		const click = (e) => {
			console.log(counter);
		}

		divRef.current.addEventListener(
			'click',
			click
		)

		return () => {
			divRef.current.removeEventListener(
				'click',
				click
			)
		}

	}, [counter])

	return (
		<div
			ref={divRef}
			className="rectangle"
			style={{backgroundColor: bgColor}}
		>
		</div>
	);
}

export default ClickBug;

