// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDElHZQZg4b81xJle5uFemNXWmAxhhN0DU",
  authDomain: "xnbeats-38271.firebaseapp.com",
  projectId: "xnbeats-38271",
  storageBucket: "xnbeats-38271.appspot.com",
  messagingSenderId: "466212486658",
  appId: "1:466212486658:web:0da16f4e74920fd9a8711b",
  measurementId: "G-CYEC069YDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const usersCollection = collection(db, "users");