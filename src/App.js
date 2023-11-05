import { useContext } from "react";
import LoginCard from "./Components/LoginCard";
import SignupCard from "./Components/SignupCard";
import { auth } from "./Firebase";
import { AuthContext } from "./providers/AuthProvider";

const App = () => {
	const { user } = useContext(AuthContext);

	return (
		<div className="App">
			Current user:
			{user}
			<LoginCard />
			<SignupCard />
		</div>
	);
};

export default App;

