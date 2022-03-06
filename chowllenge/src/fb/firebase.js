// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt-8b4y3dAOemsIwX0obm-URfDcYYq-Pg",
  authDomain: "chowllenge.firebaseapp.com",
  projectId: "chowllenge",
  storageBucket: "chowllenge.appspot.com",
  messagingSenderId: "333844702777",
  appId: "1:333844702777:web:386365469f0b9b0391cfe8",
  measurementId: "G-C5QZEXP9QC"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();

