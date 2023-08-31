import { useState } from "react";

function Authenticate({ token, setToken }) {
	const [successMessage, setSuccessMessage] =
		useState(null);

	const handleClick = async (e) => {
		e.preventDefault();
		const storedToken = localStorage.getItem("jwt");
		try {
			const response = await fetch(
				"https://fsa-jwt-practice.herokuapp.com/authenticate",
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${storedToken}`,
					},
				}
			);
			const result = await response.json();
			console.log(result);
			setSuccessMessage(result.message);
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<div>
			<h2>Authenticate Below</h2>
			{!successMessage ? (
				<button
					type="button"
					onClick={handleClick}>
					Authenticate Token
				</button>
			) : (
				<h2>{successMessage}</h2>
			)}
		</div>
	);
}

export default Authenticate;
