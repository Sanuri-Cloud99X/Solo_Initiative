import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; // Add other Firebase services you need


const firebaseConfig = {
    apiKey: "AIzaSyAnJ3e3zfJ7c916FxyT2s_YiXGk_soUJmA",
    authDomain: "cinemax-9d6fc.firebaseapp.com",
    projectId: "cinemax-9d6fc",
    storageBucket: "cinemax-9d6fc.appspot.com",
    messagingSenderId: "936145226841",
    appId: "1:936145226841:web:5364a52c165267a5fa3548",
    measurementId: "G-PLCD6LB5DG"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
