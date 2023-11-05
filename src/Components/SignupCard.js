import { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignupCard = () => {
// !LOGIC
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { logIn } = useContext(AuthContext);


	return <div>SignupCard</div>;
};
export default SignupCard;
