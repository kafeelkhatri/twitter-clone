import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqeOrQSV-X1pPWxdoSCMdDoKj6i-GFCXg",
  authDomain: "twitter-clone-f8f5c.firebaseapp.com",
  projectId: "twitter-clone-f8f5c",
  storageBucket: "twitter-clone-f8f5c.appspot.com",
  messagingSenderId: "863059795320",
  appId: "1:863059795320:web:eedb607d52a0c354cb7c8d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
