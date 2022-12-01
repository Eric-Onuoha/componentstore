import React from "react"
import { useState } from "react";

import "./postToFirestore.styles.scss";

const PostToFirestore = () => {
    const defautlFormFields = {
        newsSource: "",
        newsTitle: "",
        newsDate: "",
        newsImage: "",
        newsContent: ""
    };

    const [formFields, setFormFields] = useState(defautlFormFields);
    const {newsSource, newsTitle, newsDate, newsImage, newsContent} = formFields;

    const handleSubmit = () => {
        console.log("Form submitted");
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    } 

    return(
        <div id="postToFirestoreComponent">
            <h2>Post to Firestore</h2>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="newsSource">News Source</label>
                <input onChange={handleChange} type="text" name="newsSource" value={newsSource}/>

                <label htmlFor="newsTitle">News Title</label>
                <input onChange={handleChange} type="text" name="newsTitle" value={newsTitle} />

                <label htmlFor="newsDate">News Date</label>
                <input onChange={handleChange} type="text" name="newsDate" value={newsDate} />

                <label htmlFor="newsImage">News Image URL</label>
                <input onChange={handleChange} type="text" name="newsImage" value={newsImage} />

                <label htmlFor="newsContent">News Content</label>
                <textarea onChange={handleChange} name="newsContent" id="" cols="30" rows="10" value={newsContent}></textarea>
                
            </form>
        </div>
    )
}

export default PostToFirestore;