import { InputName, InputUserName, InputEmail, InputWebsite, InputCompany, ButtonsSection } from "./formItems"
import { useContext  } from "react";
import { AppContext } from "./globalState";

const UserComponent = () => {
	const contextValue = useContext(AppContext);
	const onSubmit = contextValue.onSubmit;
	const onReset = contextValue.onReset;
	return (
		<form onSubmit={onSubmit} onReset={onReset}>
			<InputName />
			<InputUserName />
			<InputEmail />
			<InputWebsite />
			<InputCompany >
				<ButtonsSection />
			</InputCompany>
		</form>
	)
}

export default UserComponent;