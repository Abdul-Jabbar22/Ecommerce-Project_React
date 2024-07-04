import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPGzLhbn5-XdIsXYUcwQAeoxRd5u1upZ4",
  authDomain: "ecommerce-13f95.firebaseapp.com",
  projectId: "ecommerce-13f95",
  storageBucket: "ecommerce-13f95.appspot.com",
  messagingSenderId: "1006169981311",
  appId: "1:1006169981311:web:b8b6815778cbe05eabda4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };