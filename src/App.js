import React,{useState} from 'react';
import {BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import UserDash from './Components/UserDash';
import Home from './Components/Home';
import Activation from './Components/Activation';
import Profile from './Components/Profile';
import AcceptPass from './Components/AcceptPass';
import Tree from './Components/Tree';
import ResetPass from './Components/ResetPass';

export const Context = React.createContext();

const ProtectedRoute = ({component: Component, ...restProps})=>{
    return(
      <Route
         {...restProps}
         render = {
           (props)=>{
              if(localStorage.getItem('Authorisation')=== undefined || localStorage.getItem('Authorisation')=== null){
                return <Redirect to={`/login`}/>
              }                  
              else{
                return(
                <>
                    <Component {...props} />
                </>
                )
              }
           }
         }
      />
    )      
}

function App() {
  const [email,setMail] = useState();
  const [uName,setName] = useState();
  const [fullName,setFname] = useState();
  const [status,setStatus] = useState();

  return (
    <Context.Provider
    value={{
      email,
      uName,
      fullName,
      status,
      setMail,
      setName,
      setFname,
      setStatus
    }}>
    <Router >
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/pass-reset/:id" component={AcceptPass}/>
        <Route exact path="/reset-password" component={ResetPass}/>
        <Route exact path="/activation/:email" component={Activation}/>
        <ProtectedRoute exact path="/tree/:name" component={Tree}/>
        <ProtectedRoute exact path="/dashboard/:name" component={UserDash}/>        
        <ProtectedRoute exact path="/profile/:name" component={Profile}/>
      </Switch>   
    </Router>
    </Context.Provider>
  );
}

export default App;
