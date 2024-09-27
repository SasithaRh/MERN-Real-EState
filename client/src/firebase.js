// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-df9be.firebaseapp.com",
  projectId: "mern-estate-df9be",
  storageBucket: "mern-estate-df9be.appspot.com",
  messagingSenderId: "194987303867",
  appId: "1:194987303867:web:8280a1117191a75f2c1a9e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);