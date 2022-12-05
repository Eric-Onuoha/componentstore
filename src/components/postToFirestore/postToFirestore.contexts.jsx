// import { async } from "@firebase/util";
// import { collection, writeBatch } from "firebase/firestore";

// export const addCollectionAndDocuments = async (collectionKey, docs) => {
//     const collectionRef = collection(db, collectionKey);
//     const batch = writeBatch(db);

//     docs.
// }
import { createContext, useState } from "react";

import { addCollectionAndDocuments } from "./postToFirestore.utils";

export const postToFirestoreContext = createContext({
    documents: [],
    setDocuments: ()=> null
});


export const PostToFirestoreProvider = ({children})=> {
    const [documents, setDocuments] = useState([]);
    console.log("Documents: " + documents);
    const value = {documents, setDocuments};
    if(documents){
        addCollectionAndDocuments("NewsDetails", documents);
    }
    return(
        <postToFirestoreContext.Provider value = {value}>{children}</postToFirestoreContext.Provider>
    )
}