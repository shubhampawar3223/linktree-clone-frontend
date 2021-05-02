import React,{useState,useRef,useContext,useEffect} from "react";
import {useHistory} from 'react-router-dom';
import Navbar1 from './Navbar1';
import {Context} from '../App';
import axios from 'axios';
import './Profile.css'

export default function Profile(){ 
    const context = useContext(Context);
    const [email,setEmail] = useState()
    const [name,setName] = useState()
    const [loading,setLoading] = useState();
    const history = useHistory();

    useEffect(()=>{
        setEmail(context.email);
        setName(context.fullName)
    },[])

    const save= async(e)=>{
       e.preventDefault();
       setLoading(true);
       let postData = {
           fullName: name,
           email: email
       }
       let config ={
           headers: {
               Authorisation: localStorage.getItem("Authorisation")
           }
       } 
       let url= "https://linktree-backend.herokuapp.com/update-uInfo?userName="+context.uName;
       await axios.put(url,postData,config);
       setLoading(false);
       alert("Information updated successfully");
    }
    
    const resetPass =(e)=>{
        e.preventDefault();
        history.push("/reset-password");
    }

    const deletePass = async(e)=>{
        e.preventDefault();
        let k= window.confirm("Are you sure you want to delete?");
        if(k== true){               
        let url="https://linktree-backend.herokuapp.com/delete-account?userName="+ localStorage.getItem("userName");   
        let config={
            headers: {
                Authorisation:localStorage.getItem("Authorisation")
              }
        } 
        let resp = await axios.delete(url,config);
        if(resp.status === 200)
        history.push('/');
        }        
    }

    return(
        <div style={{backgroundColor:"#f5f6f7"}}>
          <Navbar1/>
     
          <div className="container">
              <div className="offset-3 col-6 pb-5">
                 <h2 className="text-center mt-5" id="head">My Account</h2>
                 <h4 className="mt-5" id="head">My Information</h4>
                 <div className="form-group p-4 bg-white" id="form-box">
                     <div className="mt-2">
                     <small id="font-use">Name</small>                       
                     <input  type="text" className=" inp form-control" value={name} onChange={e=> setName(e.target.value)}/>
                     </div>
                     <div className="mt-2">
                     <small id="font-use">Email</small>    
                     <input   type="text" className="inp form-control" value={email} onChange={e=> setEmail(e.target.value)} placeholder="Your Email"/>    
                     </div>    
                 </div>

                 <button className="btn btn-primary btn-md mt-2" onClick={save}>Save details</button>
                 {
             loading ?
             <span className="ml-3">
               <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
               <span class="sr-only">Loading...</span>  
             </span>
             :null      
           }

                 <h4 className="mt-5" id="head">My Trees</h4>
                 <div className="mt-1 bg-white" id="form-box">
                      <div>
                          <div className="row">
                             <div className="col-2 d-flex justify-content-center" style={{borderRight:"1px solid #e6e9eb"}}>
                             <i class="fa fa-user-circle-o fa-2x m-2"  aria-hidden="true"></i>
                             </div>
                             <div className="col-9">
                                 <p className="p-3" id="my-tree" >@{localStorage.getItem("userName")}</p>
                                 <p className="p-3" id="my-tree">
                                 <a href={"/dashboard/"+localStorage.getItem("userName")}><button className="btn btn-outline-dark">Links</button></a>
                                 </p>
                             </div>
                          </div>
                      </div>                      
                 </div>

                 <h4 className="mt-5" id="head">Account actions</h4>
                 <div className="mt-1 bg-white p-3" id="form-box">
                       <button className="btn btn-dark" onClick={resetPass}>Reset Password</button>     
                 </div>

             <h4 className="mt-5" id="head">Danger Zone</h4>
                 <div className="mt-1 bg-white p-3" id="form-box">
                       <button className="btn btn-danger" onClick={deletePass}>Delete account</button>     
                 </div>
  
              </div>
          </div>
         
        
        </div>
    )
}