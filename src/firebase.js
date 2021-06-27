import firebase from 'firebase/app'
import 'firebase/firestore'

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDBiDnLZlym2aboM1ec_2cM_Vy5z8fvemM",
    authDomain: "fb-crud-735b2.firebaseapp.com",
    projectId: "fb-crud-735b2",
    storageBucket: "fb-crud-735b2.appspot.com",
    messagingSenderId: "199096648762",
    appId: "1:199096648762:web:8730735a7a885509c8e103"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();