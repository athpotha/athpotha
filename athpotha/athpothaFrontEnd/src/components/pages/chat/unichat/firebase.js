import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig={
        apiKey: "AIzaSyA9sLmJuoZj-jKfEXAx5UwSC0qctG3xmt8",
        authDomain: "unichat-2cfce.firebaseapp.com",
        projectId: "unichat-2cfce",
        storageBucket: "unichat-2cfce.appspot.com",
        messagingSenderId: "395408103830",
        appId: "1:395408103830:web:a9b3b0e981dfc780cb25b7"
      
}; 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore()