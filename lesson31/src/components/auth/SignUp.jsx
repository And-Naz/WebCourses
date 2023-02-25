const SignUp = () => {
	return (
		<section>
			<h1>Sign Un</h1>
			<div>
				<form>
					<div>
						<label>
							<span>Login: </span>
							<input type="text" name="login" />
						</label>
					</div>
					<div>
						<label>
							<span>Email: </span>
							<input type="email" name="email" />
						</label>
					</div>
					<div>
						<label>
							<span>Password: </span>
							<input type="password" name="password" />
						</label>
					</div>
					<div>
						<label>
							<span>Comfirm Password: </span>
							<input type="password" name="comfirmPassword" />
						</label>
					</div>
					<div>
						<p>Lorem ipsum dolor <label><span>terms </span><input type="checkbox" name="terms" /></label> sit amet consectetur adipisicing elit. Totam magni ab tempore optio pariatur provident, vero facere voluptatibus facilis sint sunt ea consequatur nihil vitae voluptates quo eaque necessitatibus, repudiandae magnam quod. Rerum eaque ipsum, temporibus voluptas molestias facere sint est quis, nobis ad ex et inventore maiores aperiam. Recusandae!</p>
					</div>
					<div>
						<input type="submit" value="Sign in" />
					</div>
				</form>
			</div>
		</section>
	);
}

export default SignUp;