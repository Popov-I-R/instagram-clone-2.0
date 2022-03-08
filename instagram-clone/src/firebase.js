// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA-l7GYVlWgUCBOnNMQ50PKfvHLfaQvRzQ",
    authDomain: "instagram-clone-react-6950e.firebaseapp.com",
    projectId: "instagram-clone-react-6950e",
    storageBucket: "instagram-clone-react-6950e.appspot.com",
    messagingSenderId: "66026706370",
    appId: "1:66026706370:web:dd98969cf24008c481b25b",
    measurementId: "G-9EW5WJN4H9"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }