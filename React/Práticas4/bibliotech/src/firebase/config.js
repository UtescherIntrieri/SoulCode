import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQAkemHIEzJ1JK-70dCaG4onHH10SmvRI",
  authDomain: "bibliotech-nai.firebaseapp.com",
  projectId: "bibliotech-nai",
  storageBucket: "bibliotech-nai.appspot.com",
  messagingSenderId: "650664067450",
  appId: "1:650664067450:web:4b57b17ebb1ac4396956c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)