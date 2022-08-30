// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOFhXNmCPFkfDuXNNKikfDEmTtmQ0zlI8",
    authDomain: "shopper-59114.firebaseapp.com",
    projectId: "shopper-59114",
    storageBucket: "shopper-59114.appspot.com",
    messagingSenderId: "432328712392",
    appId: "1:432328712392:web:60bb5d1ddefaac6a7ac5fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signUp(email,password) {
    return createUserWithEmailAndPassword(auth, email, password);
}