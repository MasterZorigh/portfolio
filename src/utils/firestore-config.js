import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyA7dnpyOSa3jDVEiOUgGFXnPZcofC0_ohE",
  authDomain: "portfolio-499b8.firebaseapp.com",
  projectId: "portfolio-499b8",
  storageBucket: "portfolio-499b8.appspot.com",
  messagingSenderId: "130678741946",
  appId: "1:130678741946:web:2ed3ca70d6618862f05b83",
  measurementId: "G-SWD07RWLSE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
