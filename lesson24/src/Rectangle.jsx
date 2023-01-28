import { useMemo, useCallback, useRef, useState,  useEffect } from "react";

function Rectangle({ bgColor }) {
	const divRef = useRef();
	
	useEffect(() => {

		const hoverFn = (e) => {
			divRef.current.innerHTML = `x: ${e.clientX}, y: ${e.clientY}`
		}

		divRef.current.addEventListener(
			'mousemove',
			hoverFn
		)

		return () => {
			divRef.current.removeEventListener(
				'mousemove',
				hoverFn
			)
		}

	}, [])

	return (
		<div
			ref={divRef}
			className="rectangle"
			style={{backgroundColor: bgColor}}
		>
		</div>
	);
}

export default Rectangle;

