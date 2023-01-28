import { useContext  } from "react";
import { AppContext, PrintContext } from "./globalState";

export const InputName = () => {
	const contextValue = useContext(AppContext);
	const printFunction = useContext(PrintContext);
	const value = contextValue.state.user.name;
	const onChange = contextValue.onChangeName;
	printFunction(value)
	return (
		<div>
			<h2>Register Form</h2>
			<label>
				<span>name </span>
				<input
					type="text"
					name="name"
					value={value}
					onChange={onChange}
				/>
			</label>
		</div>
	)
}

export const InputUserName = () => {
	const contextValue = useContext(AppContext);
	const value = contextValue.state.user.username;
	const onChange = contextValue.onChangeUserName;
	return (
		<div>
				<label>
					<span>username </span>
					<input
						type="text"
						name="username"
						value={value}
						onChange={onChange}
					/>
				</label>
			</div>
	)
}

export const InputEmail = () => {
	const contextValue = useContext(AppContext);
	const value = contextValue.state.user.email;
	const onChange = contextValue.onChangeEmail;
	return (
		<div>
			<label>
				<span> email </span>
				<input
					type="text"
					name="email"
					value={value}
					onChange={onChange}
				/>
			</label>
		</div>
	)
}

export const InputWebsite = () => {
	const contextValue = useContext(AppContext);
	const value = contextValue.state.user.website;
	const onChange = contextValue.onChangeWebsite;
	return (
		<div>
			<label>
			<span>website </span>
				<input
					type="text"
					name="website"
					value={value}
					onChange={onChange}
				/>
			</label>
		</div>
	)
}

export const InputCompany = ({ children }) => {
	const contextValue = useContext(AppContext);
	const { name, catchPhrase, bs } = contextValue.state.user.company;

	return (
		<div className="Company">
				<h2>Company </h2>
				<div>
					<label>
						<span>name </span>
						<input
							type="text"
							name="companyName"
							defaultValue={name}
						/>
					</label>
				</div>
				<div>
					<label>
						<span>catchPhrase </span>
						<input
							type="text"
							name="catchPhrase"
							defaultValue={catchPhrase}
						/>
					</label>
				</div>
				<div>
					<label>
						<span>bs </span>
						<input
							type="text"
							name="bs"
							defaultValue={bs}
						/>
					</label>
				</div>
				{children}
			</div>
	)
}

export const ButtonsSection = () => {
	const contextValue = useContext(AppContext);
	const onClear = contextValue.onClearBtnClick;
	return (
		<div className="btns">
			<input className="btn" type="submit" value="Submit" />

			<input
				className="btn"
				style={{ backgroundColor: "red" }}
				type="reset"
				value="Reset"
			/>

			<button onClick={onClear}>Clear</button>
		</div>
	)
}