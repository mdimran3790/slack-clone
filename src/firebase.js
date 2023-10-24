// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase'
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCMJyhrxsbPtSzGpIsn1qG4QXzZVNY_kQs",
    authDomain: "slack-clone-1cbe1.firebaseapp.com",
    projectId: "slack-clone-1cbe1",
    storageBucket: "slack-clone-1cbe1.appspot.com",
    messagingSenderId: "499662306575",
    appId: "1:499662306575:web:e2d3d665d84511c29b127a",
    measurementId: "G-40H27VLXJK"
  };

  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();



  // const firebaseApp=firebase.initializeApp(firebaseConfig);
  // const db=firebaseApp.firestore();
  // const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  // export {db, auth, provider};
  export { auth, db, provider };
  export default db;