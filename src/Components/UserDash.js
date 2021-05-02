import React, { useState, useRef, useEffect, useContext } from "react";
import Switch from "react-switch";
import axios from 'axios';
import Navbar1 from './Navbar1';
import {Context} from '../App';
import "./dashFile.css";


export default function UserDash(props) {
  const [links, setLinks] = useState([]);
  const [name, setName] = useState("");
  const context = useContext(Context);

  useEffect(async() =>{

    let url="https://linktree-backend.herokuapp.com/tree?userName="+props.match.params.name;
    let config={
      headers:{
        "Authorisation":localStorage.getItem("Authorisation")
      }
    } 
    let resp = await axios.get(url, config);
    setLinks(()=>[...resp.data.data.links])

  },[])

  const createLinks = e => {
    e.preventDefault();
    let currentLinks = [...links];
    let newLink = {
      title: "",
      url: "",
      visibility: true
    };
    currentLinks.push(newLink);
    setLinks(currentLinks);
    updateTree();
  };

  const handleChange = (i, e) => {
    
    let temp = [...links];
    temp[i].visibility = e;
    setLinks(temp);
    updateTree();
  };

  const changeStates = async(i, name, value) => {

    let test = [...links];
    if (name === "title") test[i].title = value;
    else test[i].url = value;
    setLinks(test);
    updateTree();
  };
  
  async function updateTree(){
    let url="https://linktree-backend.herokuapp.com/update-tree?userName="+props.match.params.name;
    let config={
      headers:{
        "Authorisation":localStorage.getItem("Authorisation")
      }
    };
    let postData={
      links:links
    }
    await axios.put(url,postData,config);
  }

  const deleteLink = i => {
    if (window.confirm("Do you want to remove the link")) {
      let test = [...links];
      test.splice(i, 1);
      setLinks(test);
      updateTree();
    }
  };

  const changeName = e => {
    setName(e.target.value);
  };

  return (
    <div className="app d-flex flex-column ">
      <Navbar1/>
      {
      (localStorage.getItem("status") === "true" ) ?
      <div className=" flex-grow-1 d-flex ">
        <div className="row align-items-stretch flex-grow-1">
          <div className="col-12 col-md-8 col-lg-8 " style={{borderRight:"1px solid black"}}>
           
          <div className="">  
            <button
              className="btn btn-primary mt-3 add-btn col-4  form-control"
              onClick={createLinks}
            >
              Add New Link
            </button>
            <div className=" " style={{height:"85vh",overflow:"auto"}}>
              {links.length === 0 ? (
                <div className="noContent  mt-3">
                  <p>You don't have any links to display.</p>
                  <p>Click the button above to add one.</p>
                </div>
              ) : (
                <div className="offset-4 col-5 ">
                  <ul className="cards ">
                    {links.map((e, i) => {
                      return (
                        <li className="card  mt-3 p-3" key={i}>
                          <div className="switch-wrap">
                            {e.title.length !== 0 &&
                            e.url.length !== 0 ? null : (
                              <span className="badge badge-warning warn">
                                !
                              </span>
                            )}

                            <Switch
                              onChange={e => handleChange(i, e)}
                              checked={links[i].visibility}
                              className="react-switch "
                              height={20}
                              width={40}
                            />
                          </div>
                          <div className="col-10">
                          <input
                                  type="text"
                                  placeholder="Title"                                  
                                  name="title"
                                  value={e.title}
                                  className="inpElements form-control"
                                  onChange={e =>
                                    changeStates(
                                      i,
                                      "title",
                                      e.target.value
                                    )
                                  }
                                />

                          <input
                                  type="text"
                                  placeholder="Url"                                  
                                  name="url"
                                  value={e.url}
                                  className="inpElements form-control"
                                  onChange={e =>
                                    changeStates(
                                      i,
                                      "url",
                                      e.target.value
                                    )
                                  }
                                />
  

                          </div>
                          <div className="delete">
                            <button
                              className="btn del btn-danger btn-sm"
                              onClick={() => deleteLink(i)}
                            >
                              &times;
                            </button>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 mt-2 mb-2 p-1 ">
           <div className="p-2" style={{borderBottom:"1px solid black"}}>My Linktree(Share this url):<a href={"http://localhost:3000/tree/"+props.match.params.name}>{" http://localhost:3000/tree/" +props.match.params.name}</a></div>
            <div className="Preview flex-grow-1 offset-3 col-6 ">
              <img
                src="https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png"
                className="img-thumbnail "
                alt="profile Pic"
                width="100"
              />

              <h5 className="text-center">@{props.match.params.name}</h5>

              <div  style={{height:"70vh", overflow:"auto"}}>
              {links.length > 0 ? (
                links.map((e, i) => {
                  if (
                    e.title.length !== 0 &&
                    e.url.length !== 0 &&
                    e.visibility == true
                  ) {

                    return (
                      <div className="list-group text-center pt-3">
                        <a
                          className="list-group-item list-group-item-action bg-success text-white"
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
              ) : (
                <div className="list-group justify-content-center   p-4 text-center">
                  <p className="list-group-item list-group-item-danger">
                    No Links!!
                  </p>
                </div>
              )}
            </div> 

            </div>
          </div>
        </div>
      </div>
           :
           <div className="text-center text-danger mt-5">
                Please activate your account using the link send to your email.             
           </div>
    }
    </div>
  );
}
