// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJFWJhwfcEL3rxI7xEeAx61WkgT2dw9Yw",
  authDomain: "racecontroller-4c100.firebaseapp.com",
  projectId: "racecontroller-4c100",
  storageBucket: "racecontroller-4c100.appspot.com",
  messagingSenderId: "530549561715",
  appId: "1:530549561715:web:afb81ba4c350677eb54d06"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

const analytics = getAnalytics(app);
export default auth
