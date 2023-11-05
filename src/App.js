import { useContext } from "react";
import LoginCard from "./Components/LoginCard";
import SignupCard from "./Components/SignupCard";
import { auth } from "./Firebase";
import { AuthContext } from "./providers/AuthProvider";

const App = () => {
	const { user, logOut } = useContext(AuthContext);

	return (
		<div className="App">
			Current user:
			{user ? "yes logged in" : "no logged out"}
			<button onClick={logOut}>Log Out</button>
			<LoginCard />
			<SignupCard />
		</div>
	);
};

export default App;

