// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdKeGe9RgvsLRPlRZGOUXv0-8bMYSkVKE",
  authDomain: "bay-of-bengal-times.firebaseapp.com",
  projectId: "bay-of-bengal-times",
  storageBucket: "bay-of-bengal-times.firebasestorage.app",
  messagingSenderId: "56671631179",
  appId: "1:56671631179:web:d26d1a55c2cbb1bf01dace"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
