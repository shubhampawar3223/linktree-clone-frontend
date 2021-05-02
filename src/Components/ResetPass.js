import React,{useState,useRef,useContext,useEffect} from 'react';
import Navbar1 from './Navbar1';
import {Context} from '../App'; 
import './Resetpass.css';

export default function ResetPass(props){
    const context = useContext(Context);
    const [name,setName] = useState("");
    const [temp,setTemp] = useState(false);
    const [loading,setLoading] = useState(false);


    const sendRequest = async()=>{
       setLoading(true);
       if(name === ""){
         alert("Please enter your username.")
       }
       else{
       const url="https://linktree-backend.herokuapp.com/reset-pass-req";
       let postData={
           userName:name
       }
       let resp= await fetch(url,{
         method: 'POST',
         mode:'cors',
          headers: {
              'Content-Type': 'application/json'
          },
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(postData)  
       });

       let n = await resp.json();
       if(resp.status === 200){
             setTemp(true);
       }
       else{
           alert("User is not registered.Please register first.")
       }
       setLoading(false);
    }
    }

    return(
        <div> 
        <Navbar1/>
        <div className="container">
        {
           (temp === false) ?
           <div className="offset-3 col-6 p-5 border" style={{marginTop:"10%",borderRadius:"5%"}}>
                <h2 id="head">Enter your username to receive a password reset email.</h2>
                <p className="mt-4" id="matter">When you joined Linktree, you either signed up by creating a username and password
                You’ll only get a password reset email if you signed up with username and password. 
                </p>
                <input type="text" className="form-control mt-5" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your username"/>
                <button className="btn btn-primary form-control mt-3" onClick={sendRequest}>Reset Password</button>
                <p className="text-center mt-3"><a href="/login">Back to login</a></p>
           </div>
           :
           <div>
               <div className="offset-3 col-6 p-5 border" style={{marginTop:"10%",borderRadius:"5%"}}>
                <h2 id="head">Password reset email sent</h2>
                <p className="mt-5" id="matter">We've sent you a link to reset your password. Please note: Your reset link expires after 6 hours.</p>
                <p className="mt-3" id="matter">Didn't receive an email? Check your junk folder or request another link.</p>
                <p className="text-center mt-5"><a href="/login">Back to login</a></p>
               </div>                   
           </div>    
        }
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