import React,{useEffect,useState} from 'react';
import { auth, getAuthFromServer, signInWithEmailAndPassword} from "../server/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';

import './Login.css'

import ImageQ from '../static/policelogo.png'
import CarLogo from '../static/Group_1.png';
import LockLogo from '../static/Group_2.png';

export default function Login(props){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [user,loading,error] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(()=>{
    console.log(user,loading,error)
  },[user,loading,error])

  return(
    <>
      <div className='container'>
        <div className='login_container'>

          <img src={ImageQ} alt="Rendering Image"/>

          <div className='login_container_item'>
            <img src={CarLogo} alt={CarLogo} className="input_logo"/>
            <input  type="text" className='login_textbox' 
            value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email Address"/>
          </div>

          <div className='login_container_item'>
            <img src={LockLogo} alt={LockLogo} className="input_logo"/>
            <input  type="password" className='login_textbox' 
            value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
          </div>

          <button
            className="login__btn"
            onClick={() => {
              const authenticaton = getAuthFromServer()
              signInWithEmailAndPassword(authenticaton,email,password)
              .then((response) =>{
                navigate('/dashboard')
              })
            }}>Sign In
          </button>

        </div>
      </div>
    </>
  );
}