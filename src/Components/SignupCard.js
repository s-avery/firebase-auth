import { useState, useContext } from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupCard = () => {
	// !LOGIC
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const { createNewUser } = useContext(AuthContext);

	// *Hardcoding create new user
	const createNewUser = (signupEmail, signupPassword) => {
		createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
			// TODO: decide if we really want to do anything here
			.then((userCredential) => {
				console.log(userCredential);
			})
			.catch((err) => console.error(err));
	};

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
						alert("new user created");
					}}
				>
					Sign Up
				</button>
			</form>
		</div>
	);
};
export default SignupCard;
