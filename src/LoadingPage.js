import React, { useContext } from "react";
import "./LoadingPage.css";
// import { FaDownload } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { globalContext } from "./App";
// import UploadsTable from "./UploadTable";
// import UploadFiles from "./UploadFiles";
import UploadTable from "./UploadTable";
// import UploadFiles from "./UploadFiles";
// import Dashboard from "./DashBoard";
// import UploadFiles from "./UploadFiles";
// import UploadFiles from "./UploadFiles";

export default function LOadingPage() {
    const {Loading ,setLoading}=useContext(globalContext);
    const formSubmitted=(event)=>{
        event.preventDefault();
        console.log("open uploadfiles");
        setLoading(true);
    };
    if(Loading){
        console.log("open uploadfiles");
        
        return(<UploadTable/>);
    }
    return (
        <div className="upload-container">
            <h1>Upload CSV</h1>
            <div className="upload-box">
                <input type="file" id="file-upload" className="file-input" />
                <label  className="file-label">
                    <img src="/excel.png" alt="excel"/>
                    upload-template.xlsx<label style={{color:"red"}}>Remove</label>
                </label>
                <form onSubmit={formSubmitted}>
                    <button className="upload-button" type="submit">
                        <AiOutlineLoading3Quarters/>
                    </button>
                </form>
            </div>
        </div>
    );
}