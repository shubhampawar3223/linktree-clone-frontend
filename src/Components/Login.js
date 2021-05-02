import React,{useState,useRef,useContext} from 'react';
import {useHistory} from 'react-router-dom';
import Navbar1 from './Navbar1';
import axios from 'axios';
import { Alert } from "reactstrap";
import {Context} from '../App';
import './Login.css';

export default function Login(){
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [loading,setLoading] = useState(false);
    const context = useContext(Context);

    const onDismiss = () => setVisible(false);
    const onDismiss1 = () => setVisible1(false);
    const onDismiss2 = () => setVisible2(false);
    const nameRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();

    const login=async(e)=>{
      e.preventDefault();
      let name = nameRef.current.value;
      let pass = passwordRef.current.value;
      if(name==='' || pass===''){
          setVisible(true);
      }
      else{
          setLoading(true);
          let url="https://linktree-backend.herokuapp.com/login";

          let postData ={
              userName:name,
              password:pass
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
        let n = await resp.json();
        
        
        if(resp.status === 200){
          localStorage.setItem("Authorisation",n.token);
          context.setMail(n.data.email);
          context.setFname(n.data.fullName);
          context.setName(name);
          context.setStatus(n.data.status);
          localStorage.setItem("status",n.data.status);
          localStorage.setItem("userName",name);  
          history.push('/dashboard/'+name);
        }
        else if(resp.status === 400){
            setVisible1(true);  
        }
        else if(resp.status === 404){
            setVisible2(true);
        }
        setLoading(false);
      }
    }

    return(
        <div>
        <Navbar1/>

        <Alert color="danger" isOpen={visible} toggle={onDismiss} fade={false}>
        Please Enter All The Fields.
        </Alert>

        <Alert color="danger" isOpen={visible1} toggle={onDismiss1} fade={false}>
        Incorrect Password.
        </Alert>

        <Alert color="danger" isOpen={visible2} toggle={onDismiss2} fade={false}>
        User is not present.Please Signup.
        </Alert>
        
           <div className="container"> 
               <div className="p-5 border login col-6 offset-3" style={{marginTop:"12%"}}>
                   <p className="p-2 font1 font1 text-center">Sign in to your Linktree account</p>
                   <div className="mt-3">
                   <input type="text" ref={nameRef} className="form-control p-3" style={{backgroundColor:"#dcddde"}} placeholder="Username"/>
                   </div>
                   <div className="mt-4">
                   <input type="password" ref={passwordRef} style={{backgroundColor:"#dcddde"}} className="form-control p-3" placeholder="Password"/>
                   </div>
                   <button className="btn btn-primary mt-4 form-control" onClick={login}>Login</button>
                   <p className="mt-4 text-center font2">Don't have an account? <a href="/signup">Create one</a></p>
                   <p className="mt-4 text-center font2"><a href="/reset-password">Forget Password</a></p>
               </div> 
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
    )
}