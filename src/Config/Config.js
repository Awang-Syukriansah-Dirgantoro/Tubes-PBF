import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDC6ege9DCXtMXXM8OgxxF3JJ-Hndc2CUw",
    authDomain: "coba-52197.firebaseapp.com",
    databaseURL: "https://coba-52197-default-rtdb.firebaseio.com",
    projectId: "coba-52197",
    storageBucket: "coba-52197.appspot.com",
    messagingSenderId: "74021296523",
    appId: "1:74021296523:web:3adfcdb4103a2b835b778e",
    measurementId: "G-YYX32XM466"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }