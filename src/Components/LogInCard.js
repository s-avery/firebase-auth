import { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const LoginCard = () => {
	// !LOGIC
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { logIn } = useContext(AuthContext);

	// !RETURN
	return (
		<div>
			{/* change */}
			<form
				onSubmit={(e) => {
					e.preventDefault();
					logIn(email, password);
				}}
			>
				<h1>Log In</h1>
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

				<input
					type="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				></input>

				<button type="submit">Log In</button>
			</form>
		</div>
	);
};
export default LogInCard;
