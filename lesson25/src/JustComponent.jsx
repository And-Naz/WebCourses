import { useEffect, useLayoutEffect } from "react"

export const JustComponent1 = ({ children }) => {

	useEffect(() => console.log('useEffect 1'), [])
	
	useLayoutEffect(() => console.log('useLayoutEffect 1'), [])
	
	console.log("render 1");
	
	return <span>JustComponent{children}</span>
}


export const JustComponent2 = ({ children }) => {

	useEffect(() => console.log('useEffect 2'), [])
	
	useLayoutEffect(() => console.log('useLayoutEffect 2'), [])
	
	console.log("render 2");
	
	return <span>JustComponent{children}</span>
}