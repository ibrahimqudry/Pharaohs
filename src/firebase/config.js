// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0FtFVzceBuf6q7BVBpzVsAqbVlt2tnes",
  authDomain: "pharaohs-7e1a2.firebaseapp.com",
  projectId: "pharaohs-7e1a2",
  storageBucket: "pharaohs-7e1a2.firebasestorage.app",
  messagingSenderId: "675479382602",
  appId: "1:675479382602:web:b58758666f06227f33d4b3",
  measurementId: "G-7TXJMLQD5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);