import { useReducer, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import NoData from "./NoData";
import Error from "./Error"
import {
	reducer,
	initialState,
	requestBefore,
	requestAfter,
	setupUser,
	setupError,
	changeName,
	changeUserName,
	changeUserEmail,
	changeWebsite,
	clearData,
} from "./store";
import "./App.css";

const URL = "https://jsonplaceholder.typicode.com/users/1"

function App() {

	const [state, dispatch] = useReducer(reducer, initialState);

	const sendRequest = async () => {
		try {
			dispatch(requestBefore())
			const response = await axios.get(URL);
			dispatch(setupUser(response.data))
		} catch (error) {
			dispatch(setupError(error.message))
		} finally {
			dispatch(requestAfter())
		}
	}

	const updateUser = async () => {
		try {
			dispatch(requestBefore())
			const response = await axios.patch(URL, state.user);
			console.log(response);
		} catch (error) {
			dispatch(setupError(error.message))
		} finally {
			dispatch(requestAfter())
		}
	}

	useEffect(() => {
		sendRequest()
	}, []);

	const onSubmit = (e) => {
		e.preventDefault();
		updateUser()
	};

	const onReset = (e) => {
		e.preventDefault();
		sendRequest()
	};

	return (
		<div className="App">
			{
				state.loading
					? (<Loading />)
					: state.error
						? (<Error text={state.error} />)
						: !state.user
							? (<NoData />)
							: (
								<form onSubmit={onSubmit} onReset={onReset}>
									<div>
										<h2>Register Form</h2>
										<label>
											<span>name </span>
											<input
												type="text"
												name="name"
												value={state.user.name}
												onChange={e => {
													dispatch(changeName(e.target.value))
												}}
											/>
										</label>
									</div>
									<div>
										<label>
											<span>username </span>
											<input
												type="text"
												name="username"
												value={state.user.username}
												onChange={e => {
													dispatch(changeUserName(e.target.value))
												}}
											/>
										</label>
									</div>
									<div>
										<label>
											<span> email </span>
											<input
												type="text"
												name="email"
												value={state.user.email}
												onChange={e => {
													dispatch(changeUserEmail(e.target.value))
												}}
											/>
										</label>
									</div>
									<div>
										<label>
											<span>website </span>
											<input
												type="text"
												name="website"
												value={state.user.website}
												onChange={e => {
													dispatch(changeWebsite(e.target.value))
												}}
											/>
										</label>
									</div>
									<div className="Company">
										<h2>Company </h2>
										<div>
											<label>
												<span>name </span>
												<input
													type="text"
													name="companyName"
													defaultValue={state.user.company.name}
												/>
											</label>
										</div>
										<div>
											<label>
												<span>catchPhrase </span>
												<input
													type="text"
													name="catchPhrase"
													defaultValue={state.user.company.catchPhrase}
												/>
											</label>
										</div>
										<div>
											<label>
												<span>bs </span>
												<input
													type="text"
													name="bs"
													defaultValue={state.user.company.bs}
												/>
											</label>
										</div>

										<div className="btns">
											<input className="btn" type="submit" value="Submit" />

											<input
												className="btn"
												style={{ backgroundColor: "red" }}
												type="reset"
												value="Reset"
											/>
											<button onClick={() => dispatch(clearData())}>Clear</button>
										</div>
									</div>
								</form>
							)
			}
			
		</div>
	);
}

export default App;
