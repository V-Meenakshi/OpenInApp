import React, { useContext } from "react";
import "./Upload.css";
import { FaDownload } from "react-icons/fa";
import LOadingPage from "./LoadingPage";
import { globalContext } from "./App";
// import { useNavigate } from "react-router-dom";
// import LOadingPage from "./LoadingPage";

export default function UploadCSV() {
    const{Upload,setUpload}=useContext(globalContext);

    const formSubmitted= (event) => {
        event.preventDefault();
        console.log("open loadingpage");
        setUpload(true);
    };
    if (Upload) {
        
        return <LOadingPage />;
    }
    
    
    return (
        <div className="upload-container">
            <h1>Upload CSV</h1>
            <div className="upload-box">
                <input type="file" id="file-upload" className="file-input" />
                <label htmlFor="file-upload" className="file-label">
                    <img src="/excel.png" alt="excel"/>
                    Drop your excel sheet here or <span className="browse-text">browse</span>
                </label>
                <form onSubmit={formSubmitted}>
                    <button className="upload-button" type="sunmit">
                        <FaDownload/> Upload
                    </button>
                </form>
            </div>
        </div>
    );
}