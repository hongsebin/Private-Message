import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMcWBQ9BqnAaLCxJK-9Z1YwdbhYRS4F3c",
  authDomain: "private-message-ee858.firebaseapp.com",
  projectId: "private-message-ee858",
  storageBucket: "private-message-ee858.appspot.com",
  messagingSenderId: "356356279648",
  appId: "1:356356279648:web:5cfe216ef5bc79a6d42205"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();