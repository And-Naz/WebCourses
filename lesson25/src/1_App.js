import { useState } from "react"
import './App.css';

function App() {
	
	const [userName, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [comfirmPassword, setComfirmPassword] = useState("");
	const [acceptTherms, setAcceptTherms] = useState(false);
	// new state

	const onSubmit = e => {
		e.preventDefault();
		const data = {
			userName,
			email,
			password
			// new field
		}
		console.log(data)
	}

	const onReset = e => {
		e.preventDefault();
		setUsername("")
		setEmail("")
		setPassword("")
		setComfirmPassword("")
		setAcceptTherms(false)
		// reset new field
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
							value={userName}
							onChange={(e) => {
								setUsername(e.target.value)
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
							value={email}
							onChange={(e) => {
								setEmail(e.target.value)
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
							value={password}
							onChange={(e) => {
								setPassword(e.target.value)
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
							value={comfirmPassword}
							onChange={(e) => {
								setComfirmPassword(e.target.value)
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
							checked={acceptTherms}
							onChange={() => {
								setAcceptTherms(!acceptTherms)
							}}
						/>
					</p>
				</div>

				{/* drow new field */}

				<div>
					<input className="btn" type="submit" value="Submit"/>
					<input className="btn" type="reset" value="Reset" />
				</div>

			</form>
		</div>
	);
}

export default App;