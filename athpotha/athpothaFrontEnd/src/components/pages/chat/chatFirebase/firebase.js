import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwQwsbsx3SM5ttB7jFvRtB43Fux3_YwRc",
  authDomain: "athpotha-720ab.firebaseapp.com",
  projectId: "athpotha-720ab",
  storageBucket: "athpotha-720ab.appspot.com",
  messagingSenderId: "188904584167",
  appId: "1:188904584167:web:09ef3ddab8a8ac44f58342",
  measurementId: "G-41HG9SFB13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
