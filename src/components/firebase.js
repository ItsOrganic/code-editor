// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB5JD5_idMewzEKQ7UmtCvqNr_66HNjwQk",
  authDomain: "code-final.firebaseapp.com",
  projectId: "code-final",
  storageBucket: "code-final.appspot.com",
  messagingSenderId: "1096292322390",
  appId: "1:1096292322390:web:babd19f185fa68066e7ff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}
