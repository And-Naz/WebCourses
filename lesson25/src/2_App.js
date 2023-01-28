import { useState } from "react"
import './App.css';

function App() {
	
	// const [userName, setUsername] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [comfirmPassword, setComfirmPassword] = useState("");
	// const [acceptTherms, setAcceptTherms] = useState(false);

	const [userData, setUserData] = useState({
		userName: "",
		email: "",
		password: "",
		comfirmPassword: "",
		acceptTherms: false
	})
	// new state

	const onSubmit = e => {
		e.preventDefault();
		const data = { ...userData }
		delete data.comfirmPassword;
		delete data.acceptTherms;
		console.log(data)
	}

	const onReset = e => {
		e.preventDefault();
		// setUsername("")
		// setEmail("")
		// setPassword("")
		// setComfirmPassword("")
		// setAcceptTherms(false)
		// // reset new field
		setUserData({
			userName: "",
			email: "",
			password: "",
			comfirmPassword: "",
			acceptTherms: false
		})
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
							value={userData.userName}
							onChange={(e) => {
								setUserData({ ...userData, userName: e.target.value })
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
							value={userData.email}
							onChange={(e) => {
								setUserData({ ...userData, email: e.target.value })
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
							value={userData.password}
							onChange={(e) => {
								setUserData({ ...userData, password: e.target.value })
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
							value={userData.comfirmPassword}
							onChange={(e) => {
								setUserData({ ...userData, comfirmPassword: e.target.value })
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
							checked={userData.acceptTherms}
							onChange={() => {
								setUserData({ ...userData, acceptTherms: !userData.acceptTherms })
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