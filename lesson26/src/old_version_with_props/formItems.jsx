export const InputName = ({ value, onChange }) => {
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

export const InputUserName = ({ value, onChange }) => {
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

export const InputEmail = ({ value, onChange }) => {
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

export const InputWebsite = ({ value, onChange }) => {
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

export const InputCompany = ({ companyName, catchPhrase, bs, children }) => {
	return (
		<div className="Company">
				<h2>Company </h2>
				<div>
					<label>
						<span>name </span>
						<input
							type="text"
							name="companyName"
							defaultValue={companyName}
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

export const ButtonsSection = ({ onClear }) => {
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