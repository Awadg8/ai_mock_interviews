
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsclQpjL88MpRrrRyfjgY87Ks8TPyL9RI",
  authDomain: "prepwise-d7856.firebaseapp.com",
  projectId: "prepwise-d7856",
  storageBucket: "prepwise-d7856.firebasestorage.app",
  messagingSenderId: "255827273285",
  appId: "1:255827273285:web:55415d62aa698ebe7b252c",
  measurementId: "G-WLX6NSVPN1"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db =  getFirestore(app);