import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'; 
import axios from 'axios';
import Navbar1 from './Navbar1';

export default function AcceptPass(props){
    const [loading,setLoading] = useState();
    const[pass,setPass] = useState();
    const history = useHistory();
    
    const change = async()=>{
        setLoading(true);

        if(pass === ""){
           alert("Please fill all fields.")
        }
        else{
        let url="https://linktree-backend.herokuapp.com/pass-reset-confirm/"+ props.match.params.id;
        const postData = {
            password: pass
        }
        let resp = await fetch(url,{
            method: 'POST',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(postData)
        })

        if(resp.status === 200){
        history.push('/login');
        }
        else{
            alert("Link is expired, request another link.")
        }
        setLoading(false); 
        }
}

    return (
        <div>
           <Navbar1/>
           <div className="container">
               <div className="offset-3 col-6 p-3 border" style={{marginTop:"10%",borderRadius:"5%"}}>
                  <h2 className="mt-4 text-center">Enter your new password</h2>
                  <input type="password" className="form-control mt-5" value={pass || ''} onChange={e=>setPass(e.target.value)} placeholder="Password"/>                                       
                  <button className="btn btn-primary form-control mt-3" onClick={change}>Change Password</button>
               </div>
               {
             loading ?
             <div className="d-flex justify-content-center mt-3">
               <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
               <span class="sr-only">Loading...</span>  
             </div>
             :null      
                }
           </div>
        </div>
    )  
}