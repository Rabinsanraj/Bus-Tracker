// FireBase.config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0sHZ1ixZM20GKB6EEE8SC4LtBaRvdh8U",
  authDomain: "bus-tracker-207.firebaseapp.com",
  projectId: "bus-tracker-207",
  storageBucket: "bus-tracker-207.appspot.com", // ✅ fixed
  messagingSenderId: "245665500892",
  appId: "1:245665500892:web:8ce70fa3c9269fd0a06e19",
  measurementId: "G-YJV81VLWW3"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app); // ✅ good
