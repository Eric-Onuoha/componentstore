import React, { useState } from "react";
import { Storage } from "./firebase";
import {getDownloadURL, ref, uploadBytes, uploadBytesResumable} from "firebase/storage";
import {v4} from "uuid";

const ImageUpload = () => {

    const [fileUpload, setFileUpload] = useState(null);

    const handleChnage = (e) => {
        const file = e.target.files[0];
        setFileUpload(file);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (fileUpload === null){
            return;
        }

        const fileRef = ref(Storage, `test/files/${fileUpload.name + v4()}`); //1. link to app 2. path to image like you want on firebase e.g. images/'filename'
        // 1. fileRef 2.the file to upload 
        const uploadTask = uploadBytesResumable(fileRef, fileUpload);
        uploadTask.on("state_changed", (snapshot) => {}, (error) => {console.log("Error in image upload", error)}, ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log("File available at: ", downloadURL);
            })
        })
    }

    return(
        <div>
            <h1>Image Upload</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" name="fileUpload" onChange={handleChnage}/>
                <br />
                <br />
                <button type="submit">Upload File</button>
            </form>
        </div>
    )
}; export default ImageUpload;