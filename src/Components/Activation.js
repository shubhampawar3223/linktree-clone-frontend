import React,{useState} from 'react'
import {useHistory} from 'react-router-dom';
import Navbar1 from './Navbar1';
import axios from 'axios';

export default function Activation(props){
    let [loading,setLoading] = useState(false);
    const history = useHistory();
    
    const submit = async(e) =>{
       setLoading(true); 
       e.preventDefault();
       let url="https://linktree-backend.herokuapp.com/activate?email="+props.match.params.email;
       await axios.put(url);
       history.push('/login');  
    }

    return(
        <div>
            <Navbar1/>
            <div className="container">
               <div className="offset-3 col-6 border rounded p-3" style={{marginTop:"10%"}}>
                   <h3 className="text-center mt-3">Your account has been verified</h3>
                   <div className=" mt-4 mb-3">
                   <button className="btn btn-primary form-control" onClick={submit}>Continue</button>  
                   </div>
               </div>
               {
             loading ?
             <div className="d-flex justify-content-center mt-5">
               <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
               <span class="sr-only">Loading...</span>  
             </div>
             :null      
              }   
            </div>
        </div>
    )
}