// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEuN7bxuQPM5lTftN50QkEgtj5AivKMqE",
  authDomain: "early-marty.firebaseapp.com",
  projectId: "early-marty",
  storageBucket: "early-marty.firebasestorage.app",
  messagingSenderId: "434891690510",
  appId: "1:434891690510:web:cf9bdd25ca577235b1e25f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase =  getFirestore(app)

export {dataBase}
