// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuNgCHqTjs2zkoI9i5H2tXSCsOolYSuF4",
    authDomain: "personal-api-5216c.firebaseapp.com",
    databaseURL: "https://personal-api-5216c-default-rtdb.firebaseio.com",
    projectId: "personal-api-5216c",
    storageBucket: "personal-api-5216c.appspot.com",
    messagingSenderId: "218847636315",
    appId: "1:218847636315:web:0337842748a4ed3fef887e",
    measurementId: "G-1NKKDLZQ24",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);