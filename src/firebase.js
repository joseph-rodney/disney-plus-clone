// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpKRzyA-C5Bp4B7RKtNRBRrIUTvzFIruw",
  authDomain: "disneyplus-clone-93519.firebaseapp.com",
  projectId: "disneyplus-clone-93519",
  storageBucket: "disneyplus-clone-93519.appspot.com",
  messagingSenderId: "230191072161",
  appId: "1:230191072161:web:3dd96466d4b44d7134c1e0",
  measurementId: "G-CFL8TW6NCK"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const analytics = getAnalytics(app);

export {auth, storage, provider}

export default db;