// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuZLUGbD1RMdFYEDoS1fwKmGWiIDO_aTA",
  authDomain: "whanau-feeds.firebaseapp.com",
  databaseURL:
    "https://whanau-feeds-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "whanau-feeds",
  storageBucket: "whanau-feeds.appspot.com",
  messagingSenderId: "864383529593",
  appId: "1:864383529593:web:a03892bab48b59e8acdaa8",
  measurementId: "G-4837FZZH3D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
//const store = getFirestore(app);

export { auth } ;
export default app;
