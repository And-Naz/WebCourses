import { useReducer } from "react"
import {
	getDefaultUserData,
	reducer,
	changeUserName,
	changeUserPassword,
	changeUserEmail,
	changeUserComfirmPassword,
	changeUserAcceptTherms,
	resetUserData
} from "./store"
import './App.css';

const defaultData = getDefaultUserData()

function App() {

	const [state, dispatch] = useReducer(reducer, defaultData)

	const onSubmit = e => {
		e.preventDefault();
	
		console.log("submit")
	}

	const onReset = e => {
		e.preventDefault();
		dispatch(resetUserData())
		console.log("reseted")
	}

	return (
		<div>
			<form
				onSubmit={onSubmit}
				onReset={onReset}
			>
				<div>
					<label>
						<span>userName: </span>
						<input
							type="text"
							name="userName"
							value={state.userName}
							onChange={(e) => {
								dispatch(changeUserName(e.target.value))
							}}
						/>
					</label>
				</div>
				<div>

				</div>
				
				<div>
					<label>
						<span>email: </span>
						<input
							type="email"
							name="email"
							value={state.email}
							onChange={(e) => {
								dispatch(changeUserEmail(e.target.value))
							}}
						/>
					</label>
				</div>

				<div>
					<label>
						<span>password: </span>
						<input
							type="password"
							name="password"
							value={state.password}
							onChange={(e) => {
								dispatch(changeUserPassword(e.target.value))
							}}
						/>
					</label>
				</div>
				
				<div>
					<label>
						<span>comfirm password: </span>
						<input
							type="password"
							name="comfirmPassword"
							value={state.comfirmPassword}
							onChange={(e) => {
								dispatch(changeUserComfirmPassword(e.target.value))
							}}
						/>
					</label>
				</div>
				
				<div>
					<p>
						Agree <a href="#">therms</a> of site
						<input
							type="checkbox"
							name="acceptTherms"
							checked={state.acceptTherms}
							onChange={() => {
								dispatch(changeUserAcceptTherms())
							}}
						/>
					</p>
				</div>

				<div>
					<input className="btn" type="submit" value="Submit"/>
					<input className="btn" type="reset" value="Reset" />
				</div>

			</form>
		</div>
	);
}

export default App;