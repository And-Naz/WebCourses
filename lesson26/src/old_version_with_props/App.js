import { useReducer, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import NoData from "./NoData";
import Error from "./Error"
import UserComponent from "./UserComponent"
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

	const onSubmit = (e) => { e.preventDefault(); updateUser(); };
	const onReset = (e) => { e.preventDefault(); sendRequest(); };
	const onChangeName = (e) => dispatch(changeName(e.target.value))
	const onChangeUserName = (e) => dispatch(changeUserName(e.target.value));
	const onChangeEmail = (e) => dispatch(changeUserEmail(e.target.value));
	const onChangeWebsite = (e) => dispatch(changeWebsite(e.target.value));
	const onClearBtnClick = () => dispatch(clearData());

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
								<UserComponent
									user={state.user}
									onSubmit={onSubmit}
									onReset={onReset}
									onChangeName={onChangeName}
									onChangeUserName={onChangeUserName}
									onChangeEmail={onChangeEmail}
									onChangeWebsite={onChangeWebsite}
									onClearBtnClick={onClearBtnClick}
								/>
							)
			}
		</div>
	);
}

export default App;
