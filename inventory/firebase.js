// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaLRam-LrU8aEsK4KUamgUPQuzbBCIZ_A",
    authDomain: "pantry-7144.firebaseapp.com",
    projectId: "pantry-7144",
    storageBucket: "pantry-7144.appspot.com",
    messagingSenderId: "254237628522",
    appId: "1:254237628522:web:63e903f04b6228b7fbd213",
    measurementId: "G-LMVEWZBQ1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
//export { firestore }
export{app, firestore}
//const analytics = getAnalytics(app);