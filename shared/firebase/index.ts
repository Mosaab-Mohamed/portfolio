// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCldylzrtT0hXRm3KpJX82DXJYV10hYxjg",
	authDomain: "portfolio-9383d.firebaseapp.com",
	projectId: "portfolio-9383d",
	storageBucket: "portfolio-9383d.appspot.com",
	messagingSenderId: "173728013378",
	appId: "1:173728013378:web:059c8db7dc65b5bf3261db",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage();
