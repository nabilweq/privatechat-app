import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-d8f98.firebaseapp.com",
  projectId: "chat-d8f98",
  storageBucket: "chat-d8f98.appspot.com",
  messagingSenderId: "881288104943",
  appId: "1:881288104943:web:cab1a21728fe3ef3e7441a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
