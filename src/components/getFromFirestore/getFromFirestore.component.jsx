import React, {useContext} from "react";
import "./getFromFirestore.styles.scss";
import { GetFromFirestoreContext } from "./getFromFirestore.contextx";

const GetFromFirestore = () => {
    const {documents} = useContext(GetFromFirestoreContext);
    return(
        <div id="getFromFirestoreComponent">
            {Object.keys(documents).map((title) => (
                    <div id="newsReports" key={title}>
                    <h2>Get From Firestore</h2>
                        <h1>Title: {title}</h1>
                        <p>Date: {documents[title].newsDate}</p>
                        <p>Image Url: {documents[title].newsImage}</p>
                        <p>Source: {documents[title].newsSource}</p>
                        <p>Content: {documents[title].newsContent}</p>
                    </div>
                ))}
        </div>
    );
};

export default GetFromFirestore;