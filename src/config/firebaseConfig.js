import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-FlPhOnHgHBEqM88_1nfGW-aGFKkKt98Y",
  authDomain: "entrega-reactjs-flores.firebaseapp.co",
  projectId: "entrega-reactjs-flores",
  storageBucket: "entrega-reactjs-flores.firebasestorage.app",
  messagingSenderId: "646691293672",
  appId: "1:646691293672:web:565726b1af884e92b4bc5d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };