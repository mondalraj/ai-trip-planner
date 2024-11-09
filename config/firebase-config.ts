import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFflrUbxryJiJI-gAdIcW6AUNIFYHwlZI",
  authDomain: "mobile-apps-7972e.firebaseapp.com",
  projectId: "mobile-apps-7972e",
  storageBucket: "mobile-apps-7972e.firebasestorage.app",
  messagingSenderId: "404136103612",
  appId: "1:404136103612:web:b66a84032c0898b7d00ab9",
  measurementId: "G-3NH9F1DZ07"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);