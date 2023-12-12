// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE44adyROZJNpcSCBrMrXpVsg6xbc2lG0",
  authDomain: "my-protfolio-project-ab076.firebaseapp.com",
  projectId: "my-protfolio-project-ab076",
  storageBucket: "my-protfolio-project-ab076.appspot.com",
  messagingSenderId: "544543044470",
  appId: "1:544543044470:web:28f6b885324040b4528057"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;