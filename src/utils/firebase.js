// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6mxMlSHHtaLtq5quGljQ3i0GodKua5YQ",
  authDomain: "ps-ow-demos.firebaseapp.com",
  databaseURL: "https://ps-ow-demos-default-rtdb.firebaseio.com",
  projectId: "ps-ow-demos",
  storageBucket: "ps-ow-demos.firebasestorage.app",
  messagingSenderId: "77512890389",
  appId: "1:77512890389:web:4480a3be6fbaa0679bd61c",
  measurementId: "G-EMVEFVLJ9H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
