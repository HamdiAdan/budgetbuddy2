// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYIlnTJ_PgNVO7qhfImVlQP-DmzkDJYGw",
  authDomain: "budgetbuddy-ee20c.firebaseapp.com",
  projectId: "budgetbuddy-ee20c",
  storageBucket: "budgetbuddy-ee20c.appspot.com",
  messagingSenderId: "763109152709",
  appId: "1:763109152709:web:a5e1e6ee5c3ad66ee3ddac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
