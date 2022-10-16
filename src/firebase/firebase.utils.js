import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCon9mgNuN8ldrbVnAWR54gGUpv6FL1CR8",
    authDomain: "crwn-db-f911d.firebaseapp.com",
    projectId: "crwn-db-f911d",
    storageBucket: "crwn-db-f911d.appspot.com",
    messagingSenderId: "920636084827",
    appId: "1:920636084827:web:0d2c37b29beb113f9be57e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;