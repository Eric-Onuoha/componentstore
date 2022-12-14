// import { async } from "@firebase/util";
// import { collection, writeBatch } from "firebase/firestore";

// export const addCollectionAndDocuments = async (collectionKey, docs) => {
//     const collectionRef = collection(db, collectionKey);
//     const batch = writeBatch(db);

//     docs.
// }
import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "./postToFirestore.utils";

export const postToFirestoreContext = createContext({
    documents: [],
});


export const PostToFirestoreProvider = ({children})=> {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        if(documents.length != 0){
            addCollectionAndDocuments("Categories", documents);
        }
    }, [documents]);

    const value = {documents, setDocuments};

    return(
        <postToFirestoreContext.Provider value={value}>{children}</postToFirestoreContext.Provider>
    )
}