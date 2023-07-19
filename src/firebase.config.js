
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  // apiKey: "AIzaSyAw0CWLGCxs0PEiT9vjl2vu_1KKbBexASs",
  // authDomain: "shopecommerce-59d51.firebaseapp.com",
  // projectId: "shopecommerce-59d51",
  // storageBucket: "shopecommerce-59d51.appspot.com",
  // messagingSenderId: "216492660981",
  // appId: "1:216492660981:web:2be70f7c40eeb601db0dbc"
  apiKey: "AIzaSyC6Qi34rI25c8zQg1bSSSSYVOM_d1lZsXk",
  authDomain: "toannshop.firebaseapp.com",
  projectId: "toannshop",
  storageBucket: "toannshop.appspot.com",
  messagingSenderId: "456644576643",
  appId: "1:456644576643:web:6e0ff2a08dda53a6c822b6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage  = getStorage(app);
export default app;