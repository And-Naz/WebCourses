function UserForm ({
	inputConfigList = [],
	onSubmitText ="Submit",
	onSubmitClick = Function.prototype,
	onResetText = "Reset",
	onResetClick = Function.prototype
}) {
	return (
		<div className="form-wrapper">
			<form>
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
							onClick={onSubmitClick}
						/>
						<input
							type='reset'
							name='reset'
							value={onResetText}
							onClick={onResetClick}
						/>
					</div>
				</div>
			</form>
		</div>
	)
}

export default UserForm;