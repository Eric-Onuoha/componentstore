import { initializeApp } from "firebase/app";

import{
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';

import { 
    getFirestore 
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDjwtvBa3aLNCzbzBjRp7E9V9KU8gKbqHg",  
    authDomain: "componentstore-42aeb.firebaseapp.com",  
    projectId: "componentstore-42aeb",  
    storageBucket: "componentstore-42aeb.appspot.com",  
    messagingSenderId: "1040987285100",  
    appId: "1:1040987285100:web:e27731c91ac56ac20d9a49",  
    measurementId: "G-2974WYB1HZ"  
}

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export const signIn = async (username, password) => {
    if(!username || !password){
        return;
    }

    return await signInWithEmailAndPassword(auth, username, password);
}

