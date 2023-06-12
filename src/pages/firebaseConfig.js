import { initializeApp } from "firebase/app";
//import firebase from 'firebase/app';
//import 'firebase/firestore';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSIlQ4suGS5PWX13jGIwljckb_x3o8G90",
  authDomain: "gg-mapproject.firebaseapp.com",
  projectId: "gg-mapproject",
  storageBucket: "gg-mapproject.appspot.com",
  messagingSenderId: "35505130917",
  appId: "1:35505130917:web:e01abbb3260295cde52c4c",
  measurementId: "G-LLBPTQ5FWS"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);
// const db = firebase.firestore();

// export { db };
const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();