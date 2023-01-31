function UserForm ({
	inputConfigList = [],
	onSubmitText ="Submit",
	onSubmit = Function.prototype,
	onResetText = "Reset",
	onReset = Function.prototype
}) {
	return (
		<div className="form-wrapper">
			<form onSubmit={onSubmit} onReset={onReset} >
				<div className="form-container">
					{
						inputConfigList.map((inputConfig) => {
							return (
								<div key={inputConfig.name} className="form-row">
									<label>
										<span>
											{inputConfig.text}
										</span>
										<input
											type={inputConfig.type}
											name={inputConfig.name}
											value={inputConfig.value}
											defaultValue={inputConfig.defaultValue}
											defaultChecked={inputConfig.defaultChecked}
											{...inputConfig.handlers}
										/>
									</label>
								</div>
							)
						})
					}
					<div className="form-row">
						<input
							type='submit'
							name='submit'
							value={onSubmitText}
						/>
						<input
							type='reset'
							name='reset'
							value={onResetText}
						/>
					</div>
				</div>
			</form>
		</div>
	)
}

export default UserForm;