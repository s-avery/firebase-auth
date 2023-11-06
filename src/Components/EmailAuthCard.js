import { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const EmailAuthCard = () => {
	// !LOGIC
	const [email, setEmail] = useState("");
	const { createNewUserWithEmailAuth } = useContext(AuthContext);

	// !RETURN
	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					createNewUserWithEmailAuth(email);
				}}
			>
				<h1>Sign Up With Email Authentication</h1>

				<input
					type="email"
					name=""
					placeholder="Enter your email"
					value={email}
					onChange={(e) => {
						e.preventDefault();
						setEmail(e.target.value);
					}}
				/>

				<button type="submit">Log In</button>
			</form>
		</div>
	);
};
export default EmailAuthCard;
