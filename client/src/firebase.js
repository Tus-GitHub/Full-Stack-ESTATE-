// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "full-stack-estate.firebaseapp.com",
  projectId: "full-stack-estate",
  storageBucket: "full-stack-estate.appspot.com",
  messagingSenderId: "828801759848",
  appId: "1:828801759848:web:751a1bb2aeda9b70d859dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);