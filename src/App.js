import { useContext } from "react";
import LogInCard from "./Components/LogInCard";
import SignupCard from "./Components/SignupCard";
import { auth } from "./Firebase";
import { AuthContext } from "./providers/AuthProvider";

const App = () => {
	const { user, logOut } = useContext(AuthContext);

	return (
		<div className="App">
			<p>
				Current user:
				{user ? (
					<div>
						<p>{auth.currentUser.email}</p>
						<p>
							Is this user email-verified?
							{auth.currentUser.emailVerified ? "yes" : "no"}
						</p>
					</div>
				) : (
					"no current user"
				)}
			</p>

			<button onClick={logOut}>Log Out</button>
			<LogInCard />
			<SignupCard />
		</div>
	);
};

export default App;

