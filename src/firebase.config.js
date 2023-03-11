
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCkIcyc-jQAI56AMWVjZDGI68wXdh_8yAM",
  authDomain: "tcshop2.firebaseapp.com",
  projectId: "tcshop2",
  storageBucket: "tcshop2.appspot.com",
  messagingSenderId: "179976852484",
  appId: "1:179976852484:web:e511e3cefd3df149b45151"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage  = getStorage(app);
export default app;