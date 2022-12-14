import React from "react"
import { useState, useContext } from "react";
import { postToFirestoreContext } from "./postToFirestore.contexts";

import "./postToFirestore.styles.scss";

const PostToFirestore = () => {

    const {documents, setDocuments} = useContext(postToFirestoreContext);

    const [formFields, setFormFields] = useState([]);
    const {newsSource, title, newsDate, newsImage, newsContent} = formFields;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formFields);
        setDocuments(formFields);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    } 

    return(
        <div id="postToFirestoreComponent">
            <h2>Post to Firestore</h2>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="newsSource">News Source</label>
                <input onChange={handleChange} type="text" name="newsSource" value={newsSource}/>

                <label htmlFor="title">News Title</label>
                <input onChange={handleChange} type="text" name="title" value={title} />

                <label htmlFor="newsDate">News Date</label>
                <input onChange={handleChange} type="text" name="newsDate" value={newsDate} />

                <label htmlFor="newsImage">News Image URL</label>
                <input onChange={handleChange} type="text" name="newsImage" value={newsImage} />

                <label htmlFor="newsContent">News Content</label>
                <textarea onChange={handleChange} name="newsContent" id="" cols="30" rows="10" value={newsContent}></textarea>

                <label htmlFor=""></label>
                <button type="submit">Submit</button>                
            </form>
        </div>
    )
}

export default PostToFirestore;