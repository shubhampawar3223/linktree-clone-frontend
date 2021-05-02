import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import Navbar1 from './Navbar1';
import './Home.css';


export default function Home(){
    const history = useHistory();
    return(
        <div>
           <Navbar1/>
           <div className="container">
                <p className="headH text-center mt-5">The Only Link You'll Ever Need</p> 
                <p className="text-center" id="p2">Connect audiences to all of your content with just one link.</p>
                <div className="d-flex justify-content-center">
                
                <button className="btn text-white btn-lg d-block" style={{backgroundColor:"#686bd4"}}>GET STARTED FOR FREE</button>
                                
                </div>
                <p className="mt-2 text-center">Already on Linktree?<a href="/login">Log in</a></p>
                <div className="col-4 bg-primary " id="cover">
                     <div className="bg-light" id="pic">

                     </div>   
                     <div className="list-group text-center mt-3 ">
                          <div className="p-4 mt-3 bg-white border rounded"></div>
                          <div className="p-4 mt-3 bg-white border rounded"></div>
                          <div className="p-4 mt-3 bg-white border rounded"></div>
                          <div className="p-4 mt-3 bg-white border rounded"></div>                         
                     </div>
                     <div className="mt-4 d-flex justify-content-around">
                        <div>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                        <div>
                        <i class="fa fa-spotify" aria-hidden="true"></i>
                        </div> 
                        <div>
                        <i class="fa fa-twitch" aria-hidden="true"></i>
                        </div>  
                     </div>                     
                    
                </div>
                <div className="col-6 " id="blank">
                </div>

                <div className="d-flex justify-content-center ">
                    <div className="col-4">
                        <div className="row rounded-pill" style={{border: '1px solid  #686bd4'}}>
                    <div className="col-10">
                    <input type="text" className="form-control" id="input-n" placeholder="Yourusername" />  
                    </div>        
                    <div className="col-2" >
                    <button className="btn  btn-sm text-white" style={{marginTop:"5px",borderRadius:"50%",backgroundColor:"#686bd4"}} onClick={()=>history.push('/login')}>Go</button>    
                    {/* <button className="btn" style={{borderStyle:"none" ,marginTop:"5px" ,}}>Submit</button>  */}
                    </div>
                    </div>
                    </div>
                                        
                </div> 

                <div className=" row mt-5">
                <div className="col-6">      
                <video width="500vw"  playsInline autoPlay muted loop>
                <source src="https://videos.ctfassets.net/lbsm39fugycf/1i6LctbRMzKsEmWCdbZWe8/3aecc0e1dd43fa2e291e9d6778c822ee/link_to_anywhere.mp4" type="video/mp4"/>
                </video>
               </div>
               <div className="col-6" style={{marginTop:"auto", marginBottom:"auto"}}>
               <div className="col-8">
                  <h3 className="heads">Use it anywhere</h3>
                  <p className="pheads">Take your Linktree wherever your audience is, to help them to discover all your important content.</p>
                  </div>
               </div>
                </div>

                <div className=" row mt-5">
                <div className="col-6" style={{marginTop:"auto", marginBottom:"auto"}}>
                <div className="col-8">
                  <h3 className="heads">Link to everywhere</h3>
                  <p className="pheads">Linktree is the launchpad to your latest video, article, recipe, tour, store, website, social post - everywhere you are online.</p>
                  </div>
                </div> 
                <div className="col-6">      
                <video width="500vw"  playsInline autoPlay muted loop>
                <source src="https://videos.ctfassets.net/lbsm39fugycf/7oDgvpqZimd2N3qRJ3FOmx/be9603d765dc8bedd0d57ae02dc50579/linktree-for-tiktok-hero-2.mp4" type="video/mp4"/>
                </video>
                </div>                           
                </div>


                <div className=" row mt-5">
                <div className="col-6">      
                <video width="500vw"  playsInline autoPlay muted loop>
                <source src="https://videos.ctfassets.net/lbsm39fugycf/4jcMGgBbI0ZkJxn9Wqy3DK/61f26c5d0e317799c58e48cd484ce1e6/linktree-causes-landing-page-hero-1.mp4" type="video/mp4"/>
                </video>
               </div>
               <div className="col-6" style={{marginTop:"auto", marginBottom:"auto"}}>
               <div className="col-8">
                  <h3 className="heads">Easily managed</h3>
                  <p className="pheads">Creating a Linktree takes seconds. Use our simple drag-and-drop editor to effortlessly manage your content.</p>
                  </div>
               </div>
                </div> 

                <div className=" row mt-5">
                <div className="col-6" style={{marginTop:"auto", marginBottom:"auto"}}>
                <div className="col-8">
                  <h3 className="heads">Safe, trusted, private</h3>
                  <p className="pheads">Privacy is non-negotiable. Linktree doesn’t track any personal data on your visitors, so your Linktree remains your place on the internet.</p>
                  </div>
                </div> 
                <div className="col-6">      
                <video width="500vw"  playsInline autoPlay muted loop>
                <source src="https://videos.ctfassets.net/lbsm39fugycf/5Z88UNk5vAFjxKxSePOS1g/b086910440ca7417d35674734b6ff360/website_security_8s.mp4" type="video/mp4"/>
                </video>
                </div>                           
                </div>

           </div>
           
        </div>
    )
}