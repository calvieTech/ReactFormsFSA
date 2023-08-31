import React, { useState } from "react";

function SignUpForm({ setToken }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				"https://fsa-jwt-practice.herokuapp.com/signup",
				{
					method: "POST",
					body: JSON.stringify({ username, password }),
				}
			);
			const data = await response.json();
			localStorage.setItem("jwt", data.token);
			setToken(data.token);
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div>
			<h2>Sign Up</h2>
			{error && <p>{error}</p>}
			<form
				action=""
				onSubmit={handleSubmit}>
				<label htmlFor="username">
					Username
					<input
						type="email"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
				<label htmlFor="password">
					Password
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button>Submit</button>
				</label>
			</form>
		</div>
	);
}

export default SignUpForm;
