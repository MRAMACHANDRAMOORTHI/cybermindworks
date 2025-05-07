import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC3m4MTv_M1Kt-_WBz70pU3iBMDcczmJA",
  authDomain: "cybermind-2bae8.firebaseapp.com",
  projectId: "cybermind-2bae8",
  storageBucket: "cybermind-2bae8.firebasestorage.app",
  messagingSenderId: "105771652029",
  appId: "1:105771652029:web:62a7e44aceeb73b13178d4"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);