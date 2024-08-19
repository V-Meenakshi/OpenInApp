import React from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import UploadCSV from "./Upload";




export default function Dashboard() {
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
