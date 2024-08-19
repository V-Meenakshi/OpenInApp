import {BrowserRouter, Routes,Route} from "react-router-dom";
import { createContext,useState} from "react";
import Home from "./Home";
import DashBoard from "./DashBoard";
import UploadCSV from "./Upload";
import LOadingPage from "./LoadingPage";
import UploadFiles from "./UploadFiles";
export const globalContext = createContext();

export default function App(){
    const[globalIsLogin,setGlobalIsLogin]=useState(false);
    const[Upload,setUpload]=useState(false);
    const[Loading,setLoading]=useState(false);
    return(
        <globalContext.Provider value={{globalIsLogin,setGlobalIsLogin,Upload,setUpload,Loading,setLoading}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/DashBoard" element={<DashBoard/>}/>
                    <Route path="/Upload" element={<UploadCSV/>}/>
                    <Route path="/LoadingPage" element={<LOadingPage/>}/>
                    <Route path="/UploadFiles" element={<UploadFiles/>}/>

                </Routes>
            </BrowserRouter>
        </globalContext.Provider>

    );
}