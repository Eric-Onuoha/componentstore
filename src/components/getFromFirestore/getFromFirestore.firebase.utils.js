import { initializeApp } from 'firebase/app';

import {
    getFirestore,
    collection,
    query,
    getDocs
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

export const getCollectionAndDocuments = async (collectionKey) => {
    const collectionRef = collection(db, collectionKey);
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, newsContent, newsDate, newsSource, newsImage } = docSnapshot.data();
        acc[title] = {title, newsContent, newsDate, newsSource, newsImage};
        return acc;
    }, {});

    return categoryMap;
}


