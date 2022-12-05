// import { async } from "@firebase/util";
// import { collection, writeBatch } from "firebase/firestore";

// export const addCollectionAndDocuments = async (collectionKey, docs) => {
//     const collectionRef = collection(db, collectionKey);
//     const batch = writeBatch(db);

//     docs.
// }
import { createContext, useState } from "react";

export const postToFirestoreContext = createContext({
    documents: []
});


export const postToFirestoreProvider = (children)=> {
    const {documents, setDocuments} = useState([]);
    const value = {documents};
    return(
        <postToFirestoreContext.Provider value = {value}>{children}</postToFirestoreContext.Provider>
    )
}