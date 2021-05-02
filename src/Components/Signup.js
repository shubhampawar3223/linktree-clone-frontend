import React,{useState,useRef} from 'react';
import Navbar1 from './Navbar1';
import { Alert } from "reactstrap";
import './Signup.css';

export default function Home(){
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [loading,setLoading] = useState(false);

    const onDismiss = () => setVisible(false);
    const onDismiss1 = () => setVisible1(false);
    const onDismiss2 = () => setVisible2(false);
    const onDismiss3 = () => setVisible3(false);
    const emailRef = useRef();
    const nameRef = useRef();
    const passRef = useRef();
    
   const signup = async(e) => {
    e.preventDefault();
    
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let pass = passRef.current.value;
    
    if(name==='' || email==='' || pass===''){
       setVisible(true);            
    }
    else{
        setLoading(true);
        let url = "https://linktree-backend.herokuapp.com/signup";
        let postData={
           fullName:"",  
           userName:name,
           email:email,
           password:pass,
           status:false
        }
        let resp = await fetch(url,{
            method:"POST",
            mode:'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(postData)
        })
        if(resp.status === 200){
            setVisible1(true);
        }     
        else if(resp.status === 422){
            setVisible3(true);
        }
        else if(resp.status === 400){
            setVisible2(true);   
        }
        setLoading(false)
    }
   }

    return(
        <div className="col-12 " style={{overflow: 'hidden'}}>
           <div className="row "> 
           <div className="col-9 ">
               <Navbar1/>

        <Alert color="danger" isOpen={visible} toggle={onDismiss} fade={false}>
        Please Enter All The Fields.
        </Alert>

        <Alert color="success" isOpen={visible1} toggle={onDismiss1} fade={false}>
        User Created Successfully.<span className="text-danger">Check your email inbox to activate your account.</span>
        </Alert>

        <Alert color="danger" isOpen={visible2} toggle={onDismiss2} fade={false}>
        User is present already.Login<a href="/login"> here.</a>
        </Alert>

        <Alert color="danger" isOpen={visible3} toggle={onDismiss3} fade={false}>
        Username is present already.Try with other username.
        </Alert>

               <div className="offset-3 col-6" style={{marginTop:"10%"}}>
               <h3 className="font1">Create an account for free</h3>
               <p id="head2">Free forever. No payment needed.</p>
               <div className="mt-5 ">
                   <div className="mt-3">
                   <input type="email" ref={emailRef} className="form-control p-3" style={{backgroundColor: "#e8ebed"}} placeholder="Email"/>
                   </div>
                   
                   <div className="mt-3">
                   <input type="text" ref={nameRef} className="form-control p-3" style={{backgroundColor: "#e8ebed"}} placeholder="Username"/>
                   </div>

                   <div className="mt-3">
                   <input type="password" ref={passRef} className="form-control p-3" style={{backgroundColor: "#e8ebed"}} placeholder="password"/>
                   </div>
                   <div className="pb-3" style={{borderBottom: "3px solid #e8ebed"}}>
                   <button className="btn btn-primary form-control mt-5 " onClick={signup}>Sign up with email</button>
                   </div>
                   <p className="mt-3 text-center" id="bottom1"><a href="/login" style={{color:"black"}}>Already have an account?</a></p>
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

           <div className="col-3 ">
               <img height="980px" src="https://res.cloudinary.com/shubh8991/image/upload/v1619679897/linktree_p6gy3k.jpg" /> 
           </div>
           </div> 
        </div>
    )
}