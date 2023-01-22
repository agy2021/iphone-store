// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGjkRby5esxaI_i09Zd3lBGVSMJLPrz84",
  authDomain: "iphonestore-16a54.firebaseapp.com",
  projectId: "iphonestore-16a54",
  storageBucket: "iphonestore-16a54.appspot.com",
  messagingSenderId: "277048435228",
  appId: "1:277048435228:web:6ab6eca6c5eb4cc489b5d9",
  measurementId: "G-NQ4XK5PM5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);