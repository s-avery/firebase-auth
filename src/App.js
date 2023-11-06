import { useContext } from "react";
import LogInCard from "./Components/LogInCard";
import SignupCard from "./Components/SignupCard";
import { auth } from "./Firebase";
import { AuthContext } from "./providers/AuthProvider";
import EmailAuthCard from "./Components/EmailAuthCard";

const App = () => {
	const { user, logOut } = useContext(AuthContext);

	return (
		<div className="App">
			<div>
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
			</div>

			<button onClick={logOut}>Log Out</button>
			<LogInCard />
			<SignupCard />
			<EmailAuthCard />
		</div>
	);
};

export default App;

