import React from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import UploadCSV from "./Upload";
// import UploadTable from "./UploadTable";




export default function UploadFiles() {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ flex: 1 }}>
                <Navigation />
                <UploadCSV />
                
                
            </div>
        </div>
    );
}
