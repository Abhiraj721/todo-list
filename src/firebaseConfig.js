// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAinBjDjSNiBxRIf9n5Rlad-kdHBd9kaCI",
  authDomain: "tidy-tract-345708.firebaseapp.com",
  projectId: "tidy-tract-345708",
  storageBucket: "tidy-tract-345708.appspot.com",
  messagingSenderId: "980365719504",
  appId: "1:980365719504:web:cbadb4f0ae28df3dc26bd5",
  measurementId: "G-NQHZLCSYTX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
