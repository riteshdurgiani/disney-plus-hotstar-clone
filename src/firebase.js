import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBuf8yb1CvE9cELKCrSgyXzBCRdxe-zyys",
    authDomain: "disneyplus-clone-fdd98.firebaseapp.com",
    projectId: "disneyplus-clone-fdd98",
    storageBucket: "disneyplus-clone-fdd98.appspot.com",
    messagingSenderId: "937317145498",
    appId: "1:937317145498:web:001b4ea910dc3400c93823",
    measurementId: "G-NP9CD8NSR5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage }
export default db;