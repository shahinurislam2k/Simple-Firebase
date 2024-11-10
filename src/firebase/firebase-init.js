// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-qQMAHC3DYVnLRe7w_GDwMMNypHPZ0is",
  authDomain: "simple-firebase-2ef84.firebaseapp.com",
  projectId: "simple-firebase-2ef84",
  storageBucket: "simple-firebase-2ef84.firebasestorage.app",
  messagingSenderId: "145741123122",
  appId: "1:145741123122:web:289b725778f8ddd842762b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
