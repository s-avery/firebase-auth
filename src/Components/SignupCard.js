import {
	useState,
	// useContext
} from "react";
// import { AuthContext } from "../providers/AuthProvider";
import { auth } from "../Firebase";
import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
} from "firebase/auth";

const SignupCard = () => {
	// !LOGIC
	const [signupEmail, setSignupEmail] = useState("");
	const [signupPassword, setSignupPassword] = useState("");
	// const { createNewUser } = useContext(AuthContext);

	// *Hardcoding create new user
	const createNewUser = (signupEmail, signupPassword) => {
		createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
			// TODO: decide if we really want to do anything here
			.then((userCredential) => {
				console.log(auth.currentUser);
				sendEmailVerification(auth.currentUser);
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
