// import { async } from "@firebase/util";
// import { collection, writeBatch } from "firebase/firestore";

// export const addCollectionAndDocuments = async (collectionKey, docs) => {
//     const collectionRef = collection(db, collectionKey);
//     const batch = writeBatch(db);

//     docs.
// }
import { createContext, useState } from "react";
import SHOP_DATA from "./shopData";

import { addCollectionAndDocuments } from "./postToFirestore.utils";
import { useEffect } from "react";

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