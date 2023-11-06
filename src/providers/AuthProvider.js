import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	sendEmailVerification,
	sendSignInLinkToEmail,
} from "firebase/auth";
import { useState, createContext, useEffect } from "react";
import { auth } from "../Firebase";

export const AuthContext = createContext({});

// defining the data to be passed down
const AuthProvider = ({ children }) => {
	// *local state that define's our user
	const [user, setUser] = useState(null);

	//*useEffect that listens to when firebase's auth state changes, and updates our local "user" state -- aka updates local logged in/logged out state and user information when the auth is updated
	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log(user);
				setUser(user);
			} else {
				setUser(null);
			}
		});

		// TODO: explain this
		return listen;
	}, []);

	// *functions to change logged in/out status
	const logIn = (loginEmail, loginPassword) => {
		signInWithEmailAndPassword(auth, loginEmail, loginPassword)
			// TODO: decide if we really want to do anything here
			.then((userCredential) => {
				console.log(userCredential);
			})
			.catch((err) => console.error(err));
	};

	const logOut = () => {
		signOut(auth)
			// expected to return nothing when succesful
			.then(() => {
				console.log("Signed Out!");
			})
			.catch((err) => console.error(err));
	};

	const createNewUser = (signupEmail, signupPassword) => {
		createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
			// TODO: decide if we really want to do anything here
			.then((userCredential) => {
				console.log(userCredential);
				auth.languageCode = "en";
				sendEmailVerification(auth.currentUser);
			})
			.catch((err) => console.error(err));
	};

	const createNewUserFrench = (signupEmail, signupPassword) => {
		createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
			// TODO: decide if we really want to do anything here
			.then((userCredential) => {
				console.log(userCredential);
				auth.languageCode = "fr";
				sendEmailVerification(auth.currentUser);
			})
			.catch((err) => console.error(err));
	};

	// *create account with email verification link
	// "actionCodeSettings" is smth firebase looks for when handling email auth
	const actionCodeSettings = {
		// URL you want to redirect back to. The domain (www.example.com) for this
		// URL must be in the authorized domains list in the Firebase Console.
		url: "https://zombo.com/",
		// This must be true.
		handleCodeInApp: true,
	};

	const createNewUserWithEmailAuth = (email) => {
		sendSignInLinkToEmail(auth, email, actionCodeSettings)
			.then(() => {
				// The link was successfully sent. Inform the user.
				// Save the email locally so you don't need to ask the user for it again
				// if they open the link on the same device.
				window.localStorage.setItem("emailForSignIn", email);
				// TODO for testing: remove after
				console.log(email);
			})
			.catch((error) => {
				// firebase will give us back a specific error object so we can anticipate the structuring like this
				console.log(error.code);
				console.log(error.message);
			});
	};

	return (
		// passing down our relevant state and associated functions in an anonymous object that children can pull from as needed using useContext
		<AuthContext.Provider
			value={{ user, logIn, logOut, createNewUser, createNewUserFrench }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
