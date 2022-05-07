// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ6Z4eOLoh7X4EC55jBFTAo5YLUFTdPDM",
  authDomain: "warehouse-f4400.firebaseapp.com",
  projectId: "warehouse-f4400",
  storageBucket: "warehouse-f4400.appspot.com",
  messagingSenderId: "43219995536",
  appId: "1:43219995536:web:3597781c78fb498637c115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
