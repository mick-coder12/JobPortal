// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJoOiEB1__43cSY9mzf8wZ_QCf6zI3beU",
  authDomain: "jobportal-84d11.firebaseapp.com",
  projectId: "jobportal-84d11",
  storageBucket: "jobportal-84d11.appspot.com",
  messagingSenderId: "431052485720",
  appId: "1:431052485720:web:5b79b8ba4c6b6138e0862d",
  measurementId: "G-28RN368BLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const analytics = getAnalytics(app);


export { db};

