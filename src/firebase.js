import{getAuth} from 'firebase/auth'
import firebase from "firebase/compat/app";
import {GoogleAuthProvider} from'firebase/auth'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAIv5xRFTHSn5ZZG8m6Bm9vPzUQptYVP3U",
  authDomain: "fir-authentication-f437b.firebaseapp.com",
  projectId: "fir-authentication-f437b",
  storageBucket: "fir-authentication-f437b.appspot.com",
  messagingSenderId: "463985982499",
  appId: "1:463985982499:web:19152481173b42a7608596",
  measurementId: "G-YNDEZEWSM7"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig); 
const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app)
const Auth = firebase.auth();
export  { app, googleProvider, Auth}