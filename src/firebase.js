import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCKy3uqJZYY1e-Uu_S6LUSuGOxpksfKeSo",
    authDomain: "clone-abd16.firebaseapp.com",
    projectId: "clone-abd16",
    storageBucket: "clone-abd16.appspot.com",
    messagingSenderId: "1051591311768",
    appId: "1:1051591311768:web:5cab6932041448cb6babed",
    measurementId: "G-JZ7K4L434L"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };