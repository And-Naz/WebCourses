import { InputName, InputUserName, InputEmail, InputWebsite, InputCompany, ButtonsSection } from "./formItems"

const UserComponent = ({
	user,
	onSubmit,
	onReset,
	onChangeName,
	onChangeUserName,
	onChangeEmail,
	onChangeWebsite,
	onClearBtnClick,
}) => {
	return (
		<form onSubmit={onSubmit} onReset={onReset}>
			<InputName value={user.name} onChange={onChangeName} />
			<InputUserName value={user.username} onChange={onChangeUserName} />
			<InputEmail value={user.email} onChange={onChangeEmail} />
			<InputWebsite value={user.website} onChange={onChangeWebsite} />
			<InputCompany
				companyName={user.company.name}
				catchPhrase={user.company.catchPhrase}
				bs={user.company.bs}
			>
				<ButtonsSection onClear={onClearBtnClick} />
			</InputCompany>
		</form>
	)
}

export default UserComponent;