import { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignupCard = () => {
	// !LOGIC
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { createNewUser } = useContext(AuthContext);

	// !RETURN
	return (
		<div>
			<form>
				<h1>Create Account</h1>
				<input
					type="email"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				></input>
				<input
					type="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				></input>
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						createNewUser(email, password);
					}}
				>
					Sign Up
				</button>
			</form>
		</div>
	);
};
export default SignupCard;
