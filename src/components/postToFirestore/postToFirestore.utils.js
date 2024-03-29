import { initializeApp } from 'firebase/app';

import {
  getFirestore,
  doc,
  // getDoc,
  // setDoc,
  collection, //to get collection reference
  writeBatch
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

  export const db = getFirestore();

  export const addCollectionAndDocuments = async (collectionKey, docToAdd) => {
    const collectionRef = collection(db, collectionKey); // search in the db for a collectionName that will be passed. If it doesnt exist firestore will create a ref anyway and if it does then you'd have the ref
    const batch = writeBatch(db); // this gives you a batch first you can use to attach a bunch of writes, deletes etc that can get fired all together later

    console.log(collectionRef);
    const docRef = doc(collectionRef, docToAdd.title);
    batch.set(docRef, docToAdd);

    await batch.commit();
    console.log("added");

  }