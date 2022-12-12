import { createContext, useState, useEffect } from "react";
import { getCollectionAndDocuments } from "./getFromFirestore.firebase.utils";

export const GetFromFirestoreContext = createContext({
    documents: []
});

export const GetFromFirestoreProvider = ({children}) => {
    const [documents, setDocuments] = useState([]);
    
    useEffect(()=>{
        const getCollectionDoc = async ()=>{
            const collectionMap = await getCollectionAndDocuments("Categories");
            setDocuments(collectionMap);
        }
        getCollectionDoc();
    }, []);

    const value = {documents, setDocuments};

    return(
        <GetFromFirestoreContext.Provider value={value}>{children}</GetFromFirestoreContext.Provider>
    )
}