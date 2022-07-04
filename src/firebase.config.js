import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjEsz9vjUa081l-aj37V-sGgbcyaYJMAQ",
  authDomain: "house-marketplace-app-4619f.firebaseapp.com",
  projectId: "house-marketplace-app-4619f",
  storageBucket: "house-marketplace-app-4619f.appspot.com",
  messagingSenderId: "106628802533",
  appId: "1:106628802533:web:18c93ae1f7fd9af2a6b10c"
};
const app = initializeApp(firebaseConfig);
export const db =getFirestore();
