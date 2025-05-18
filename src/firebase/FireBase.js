// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app" ;
import { getFirestore } from "@firebase/firestore"
import Test from "../components/Test";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhVVOaSUUWgv5uDVo2awCRoaLU_jN4us8",
  authDomain: "lawyermanage-8cf2f.firebaseapp.com",
  projectId: "lawyermanage-8cf2f",
  storageBucket: "lawyermanage-8cf2f.firebasestorage.app",
  messagingSenderId: "160808851093",
  appId: "1:160808851093:web:4316fcc373bfd82defad9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);