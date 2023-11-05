// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCSjzR2r0CeApT2VnxMKdFsixy6iUvrC1E",
	authDomain: "auth-verification-e37c7.firebaseapp.com",
	projectId: "auth-verification-e37c7",
	storageBucket: "auth-verification-e37c7.appspot.com",
	messagingSenderId: "1002679375392",
	appId: "1:1002679375392:web:72002f2468e47ce5f78e45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
