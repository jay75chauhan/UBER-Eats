import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzQfboKzgLzoNPulcBP1oX6fcICFNraCo",
  authDomain: "uber-eats-clone-3fae8.firebaseapp.com",
  projectId: "uber-eats-clone-3fae8",
  storageBucket: "uber-eats-clone-3fae8.appspot.com",
  messagingSenderId: "283775888604",
  appId: "1:283775888604:web:4a38034691b5391f765819",
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
