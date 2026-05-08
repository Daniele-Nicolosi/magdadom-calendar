
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ_-ZcS3uUCul9o3OrCu4YpZSJfoDIraY",
  authDomain: "magdadom-calendar.firebaseapp.com",
  projectId: "magdadom-calendar",
  storageBucket: "magdadom-calendar.firebasestorage.app",
  messagingSenderId: "627850100929",
  appId: "1:627850100929:web:b8448bf07b3a64dedc1440",
  measurementId: "G-4QRJHQ6C3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);