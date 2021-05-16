import firebase from 'firebase/app';
//firebaseの認証機能を使う
import 'firebase/auth';
//firebaseのfirestoreを使う
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAsIRz1MyEJdpE8UE94xeZwpPY92Qm_Q28",
    authDomain: "befinner.firebaseapp.com",
    projectId: "befinner",
    storageBucket: "befinner.appspot.com",
    messagingSenderId: "793080453099",
    appId: "1:793080453099:web:3c07ff964a34fe0df7ebae",
    measurementId: "G-FK6ZNPK3X3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebase;
  export const auth = firebase.auth();
  export const db = firebase.firestore();