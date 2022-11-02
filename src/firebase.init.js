// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCF8DTOwxQjuiyC267eAgtYi5viXWKhuf8",
    authDomain: "reacer-50b7b.firebaseapp.com",
    projectId: "reacer-50b7b",
    storageBucket: "reacer-50b7b.appspot.com",
    messagingSenderId: "179240052722",
    appId: "1:179240052722:web:baa043f3d7cdade2bc6d6b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

const analytics = getAnalytics(app);
export default auth
