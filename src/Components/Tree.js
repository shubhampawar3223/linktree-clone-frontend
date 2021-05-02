import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Tree.css'

export default function Tree(props){
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState();
    useEffect(async()=>{
       setLoading(true);
       let url="https://linktree-backend.herokuapp.com/tree?userName="+ props.match.params.name ;
       let config = {
           headers:{
            Authorisation:localStorage.getItem("Authorisation")
           }
       }
       let resp = await axios.get(url,config);
       setData(()=>[resp.data.data]);
       setLoading(false);
    },[])

    return(
        <div className="container" style={{overflow:"sroll"}}>
             {
             loading=== false ? 
             <>     
             <div className="d-flex justify-content-center">
                <div style={{marginTop:"3%"}}>
                <img  src="https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png" id="img1"/>
                </div>
            </div>
            <p className="text-center mt-3">@{props.match.params.name}</p>

                <div className=" offset-lg-2 col-lg-8">        
                  {data.length > 0 ? 
                      (
                     data[0].links.map((e, i) => {
                       if (
                         e.title.length !== 0 &&
                         e.url.length !== 0 &&
                         e.visibility === true
                       ) {
    
                         return (
                           <div className="list-group text-center pt-3 ">
                             <a
                               className="list-group-item list-group-item-action bg-success text-white"
                               style={{fontSize:"1rem"}}
                               href={e.url}
                               target="_blank"
                               rel="noopener noreferrer"
                             >
                               {e.title}
                             </a>
                           </div>
                         );
                       }
                     })
                  ) 
                  : (
                    <div className="list-group justify-content-center   p-4 text-center">
                      <p className="list-group-item list-group-item-danger">
                        No Links!!
                      </p>
                    </div>
                  )
                }            
              </div>
             </>
              :
             <div className="d-flex justify-content-center mt-3">
               <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
               <span class="sr-only">Loading...</span>  
             </div>
             
              }
        </div>
    )
}