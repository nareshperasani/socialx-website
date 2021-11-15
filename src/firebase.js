import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDap-ZVT15b-XmxaJJRZQ4WHRAZr9CnNvw",
    authDomain: "onlinestore-e34d8.firebaseapp.com",
    projectId: "onlinestore-e34d8",
    storageBucket: "onlinestore-e34d8.appspot.com",
    messagingSenderId: "84496337977",
    appId: "1:84496337977:web:08ebd39011e557bb7311e8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export { db, auth };