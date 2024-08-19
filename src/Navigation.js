import {Link} from "react-router-dom";
export default function Navigation(){
    return(
        <div className="card">
        <div style={{display:"flex",gap:"10px",cursor:'pointer' ,flexDirection:"row",
            justifyContent:"space-between",background:"black",padding:"10px"}}>
                <div >
                    
                </div>
                <div style={{display:"flex",gap:"10px",cursor:'pointer' }}>

                    <Link to="/notification"><img src="/notification.png" alt="home" style={{height:"37px",width:"37px"}}/></Link>
                    <Link to="/profile"><img src="/profile.png" alt="home" style={{height:"40px",width:"40px"}}/></Link>
                
            </div>

        </div>
        </div>
    );
}