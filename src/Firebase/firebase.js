import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAssGfUJVrBqBOKaptotOZbCjRfduez0OU",
  authDomain: "adminpanel-product.firebaseapp.com",
  projectId: "adminpanel-product",
  storageBucket: "adminpanel-product.firebasestorage.app",
  messagingSenderId: "186062400795",
  appId: "1:186062400795:web:0577b2cd852693f8f6f7be"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);