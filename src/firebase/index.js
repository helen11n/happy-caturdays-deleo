import firebase from "firebase"
import "firebase/firestore"

const app = firebase.initializeApp({

    apiKey: process.env.REACT_APP_HAPPY_CATURDAYS_APIKEY,
    authDomain: process.env.REACT_APP_HAPPY_CATURDAYS_AUTHDOMAIN,
    projectId: process.env.REACT_APP_HAPPY_CATURDAYS_PROJECTID,
    storageBucket: process.env.REACT_APP_HAPPY_CATURDAYS_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_HAPPY_CATURDAYS_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_HAPPY_CATURDAYS_APPID

})

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)