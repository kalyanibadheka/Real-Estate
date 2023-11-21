// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-9cee1.firebaseapp.com",
  projectId: "real-estate-9cee1",
  storageBucket: "real-estate-9cee1.appspot.com",
  messagingSenderId: "1051178774963",
  appId: "1:1051178774963:web:c22eae01f7a4c3de195bc6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);