import { initializeApp } from 'firebase/app';
import {
  getAuth,
    createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjwtvBa3aLNCzbzBjRp7E9V9KU8gKbqHg",  
    authDomain: "componentstore-42aeb.firebaseapp.com",  
    projectId: "componentstore-42aeb",  
    storageBucket: "componentstore-42aeb.appspot.com",  
    messagingSenderId: "1040987285100",  
    appId: "1:1040987285100:web:e27731c91ac56ac20d9a49",  
    measurementId: "G-2974WYB1HZ"  
  };

  const firebaseapp = initializeApp(firebaseConfig);

  export const auth = getAuth();

  export const db = getFirestore();

  export const createAccount = async (email, password) =>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
   
  }  

  export const getUserDocFromAuth = async(userAuth, username)=>{
    const userRef = doc(db,"Users", userAuth.uid);
    const usersDbSnapshot = await getDoc(userRef);
    
    if(!usersDbSnapshot.exists()){
      const {email} = userAuth;
      const createdAt = new Date();

      try{
        const setSnap = await setDoc(userRef, {
          username,
          email,
          createdAt
          });
      } catch(err){
        console.log(err.message);
      }
    }
  }