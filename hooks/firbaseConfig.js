// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyLcd_QamH1hp60WXJNOCU89NrbbOqpdU",
  authDomain: "cibo-food-app-d111d.firebaseapp.com",
  projectId: "cibo-food-app-d111d",
  storageBucket: "cibo-food-app-d111d.appspot.com",
  messagingSenderId: "574044929460",
  appId: "1:574044929460:web:6cf5d8558440a0a5eb06e1",
  measurementId: "G-S0TMW7CX93"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auths = getAuth(app);
export const Firestore = getFirestore(Firestore);
