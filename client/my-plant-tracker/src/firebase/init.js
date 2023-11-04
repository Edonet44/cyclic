// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT5g8JTpGP749v7Fw6bW7TfpXnfhVlFSk",
  authDomain: "myplanttracker-2e0a9.firebaseapp.com",
  projectId: "myplanttracker-2e0a9",
  storageBucket: "myplanttracker-2e0a9.appspot.com",
  messagingSenderId: "736563312857",
  appId: "1:736563312857:web:dc575a1f172dfefa42e6c8",
  measurementId: "G-M3SVG0K0Y9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//inizilizza firestore service
const db = getFirestore()
export default db