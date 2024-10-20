 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "drc-gov-digital-platform.firebaseapp.com",
  projectId: "drc-gov-digital-platform",
  storageBucket: "drc-gov-digital-platform.appspot.com",
  messagingSenderId: "698275485623",
  appId: "1:698275485623:web:1a3d0e0ad740836e1afa32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);