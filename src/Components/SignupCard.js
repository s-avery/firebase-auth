import { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignupCard = () => {
	// !LOGIC
	const [signupEmail, setSignupEmail] = useState("");
	const [signupPassword, setSignupPassword] = useState("");
	const { createNewUser } = useContext(AuthContext);

	// !RETURN
	return (
		<div>
			<form>
				<h1>Create Account</h1>
				<input
					type="email"
					placeholder="Enter your email"
					value={signupEmail}
					onChange={(e) => setSignupEmail(e.target.value)}
				></input>
				<input
					type="password"
					placeholder="Enter your password"
					value={signupPassword}
					onChange={(e) => setSignupPassword(e.target.value)}
				></input>
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						createNewUser(signupEmail, signupPassword);
					}}
				>
					Sign Up
				</button>
			</form>
		</div>
	);
};
export default SignupCard;
