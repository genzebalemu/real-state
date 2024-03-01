// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyBA6lgUZRfUIh5NISzmkboXuf90I9Atrcw",
  authDomain: "real-state-4b130.firebaseapp.com",
  projectId: "real-state-4b130",
  storageBucket: "real-state-4b130.appspot.com",
  messagingSenderId: "508258151940",
  appId: "1:508258151940:web:29979e015bd887359a0f51",
  measurementId: "G-4YGY4VZBVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
