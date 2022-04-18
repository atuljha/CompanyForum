import firebase from "firebase";


//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTE9g71ENvnAPEaNquZyr4cPVU9y8fhWs",
  authDomain: "fir-aa5a9.firebaseapp.com",
  projectId: "fir-aa5a9",
  storageBucket: "fir-aa5a9.appspot.com",
  messagingSenderId: "9180406450",
  appId: "1:9180406450:web:696046ad68c708d8c05fab",
  measurementId: "G-QEZJWHYKLP"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


const db = app.firestore()

export default db;
