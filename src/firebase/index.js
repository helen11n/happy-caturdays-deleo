import firebase from "firebase"
import "firebase/firestore"

const app = firebase.initializeApp({

    apiKey: "AIzaSyA12dYuU5_CmbZt5nL-iWK1ECO6DcbKZr0",
    authDomain: "happy-caturdays.firebaseapp.com",
    projectId: "happy-caturdays",
    storageBucket: "happy-caturdays.appspot.com",
    messagingSenderId: "435478586365",
    appId: "1:435478586365:web:a3670b440515a0388a6f94"

})

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)