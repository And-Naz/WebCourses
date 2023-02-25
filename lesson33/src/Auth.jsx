const Auth = () => {
	return (
		<section>
			<h1>Auth</h1>
			<div>
				<form>
					<label>
						<span>Login: </span>
						<input type="text" name="login" />
					</label>
					<label>
						<span>Password: </span>
						<input type="password" name="password" />
					</label>
					<input type="submit" value="Sign in" />
				</form>
			</div>
		</section>
	);
}

export default Auth;