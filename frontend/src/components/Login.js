import React from 'react';

const Login = () => {
	return (
		<>
			<div>


				<title>LinkedIn Login Form Using HTML and CSS</title>

				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
					integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous" />

				<link rel="stylesheet" href="liked.css" />
				<link rel="apple-touch-icon" href="https://static-exp1.licdn.com/sc/h/1exdo4axa6eaw1jioxh1vu4fj" />
				<link rel="apple-touch-icon-precomposed" href="https://static-exp1.licdn.com/sc/h/55ggxxse8uyjdh2x78ht3j40q" />
				<link rel="apple-touch-icon-precomposed" sizes="57x57"
					href="https://static-exp1.licdn.com/sc/h/1exdo4axa6eaw1jioxh1vu4fj" />
				<link rel="apple-touch-icon-precomposed" sizes="144x144"
					href="https://static-exp1.licdn.com/sc/h/55ggxxse8uyjdh2x78ht3j40q" />

				<div class="container">
					<h2>Linked<span>
						<i class="fab fa-linkedin"></i>
					</span></h2>
					<div class="text">
						  <h1>Sign in</h1>
						<p>Stay updated on your professional world</p>
					</div>
					<div class="your-input">
						<div class="input">
							<input type="text" name="email" id="email" required />
							<label for="email">Email</label>
						</div>
						<div class="input">
							<input type="password" name="password" id="password" required />
							<label for="password">
								Password
							</label>
						</div>
					</div>
					<a href="/" class="forgot-password-link">
						Forgot Password?
					</a>
					<a href="/register"><div class="form-group">
               <input type="submit" value="Sign in" class="submit-btn" />
            </div></a>
					<p class="join-link">
						New to linkedin?
						<a href="/register" class="join-now">
							Join now
						</a>
					</p>
					<a href="/register"><div class="form-group">
               <input type="submit" value="Sign in with apple" class="submit-btn" />
            </div></a>

				</div>


			</div>
		</>
	);
}

export default Login;
