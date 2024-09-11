// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfE2c0i_WsfnAWsTFEFwYnKTkdruRCWYQ",
  authDomain: "online-joboard.firebaseapp.com",
  projectId: "online-joboard",
  storageBucket: "online-joboard.appspot.com",
  messagingSenderId: "1059317491278",
  appId: "1:1059317491278:web:c66937bfb57b0d0b36451f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};