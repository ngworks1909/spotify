import React from 'react'
import img1 from '../assets/sploginlogo.png'
import '../css/Login.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  window.scrollTo(0,0);
  const handleEmailUser=(event)=>{
    let newstate = event.target.value;
    setemailuser(newstate);
    let v=event.target.value;
    if(v.length===0){
     setemailusercolor('red');
     setemailuserborder('red');
     setloginopacity('0.4');
     document.getElementById('incorrect-email-error').innerHTML='<i class="bi-exclamation-circle-fill" style="color:#d31225"></i><h2>Please enter your Spotify username or email address.</h2>'

    
    }
    else{
     setemailusercolor('rgba(0, 0, 0, 0.589)');
     setemailuserborder('black');
     setlogincursor('context-menu');
     setloginopacity('1');
      document.getElementById('incorrect-email-error').innerHTML='';
    }
  }


  const handleLogPass=(event)=>{
    let newstate = event.target.value;
    setlogpassword(newstate);
    let v=event.target.value;
    if(v.length===0){
     setlogpasscolor('red');
     setlogpassout('red');
      document.getElementById('incorrect-login-password-error').innerHTML='<i class="bi-exclamation-circle-fill" style="color:#d31225"></i><h2>Enter a valid password.</h2>';
    }
    else{
     setlogpasscolor('rgba(0, 0, 0, 0.589)');
     setlogpassout('black');
      document.getElementById('incorrect-login-password-error').innerHTML='';
    }
  }

  const LoginHover=()=>{
    if(defloginopacity==='0.4'|| deflogpasscolor==='red'){
      setlogincursor('not-allowed');
    }
    else{
      setlogincursor('context-menu');
    }
  }

  const[defemailuser,setemailuser]=useState('');
  const[defemailusercolor,setemailusercolor]=useState('rgba(0, 0, 0, 0.589)');
  const[defemailuserborder,setemailuserborder]=useState('black');

  const[deflogpassword,setlogpassword]=useState('');
  const[deflogpasscolor,setlogpasscolor]=useState('rgba(0, 0, 0, 0.589)');
  const[deflogpassout,setlogpassout]=useState('black');

  const[deflogincursor,setlogincursor]=useState('not-allowed');
  const[defloginopacity,setloginopacity]=useState('0.4')
  return (
    <>
    <div id="splogin">
       <div className="sploginimg">
        <Link to={'/'}><input type="image" className='loginlogo' src={img1} alt="aria-login"/></Link>
       </div>
       <hr className="loginhr1" />
       <div className="login-icons">
           <Link to='/' className="btn facebook btn-primary ">CONTINUE WITH FACEBOOK</Link>
           <Link to='/' className="btn apple btn-dark">CONTINUE WITH APPLE</Link>
           <Link to='/' className="btn bt google btn-light">CONTINUE WITH GOOGLE</Link>
           <Link to='/' className="btn bt mobile btn-light">CONTINUE WITH MOBILE NUMBER</Link>
       </div>
       <div className="break">
        <p className="logpara">OR</p>
       </div>
       <form action="" method='post' className="loginform">
           <label htmlFor="emus" className="userid">Email address or username</label>
           <div className="emorus">
            <input style={{borderColor:defemailusercolor,outlineColor:defemailuserborder}}  type="text" name="emus" id="emus" className='input-field' placeholder='Email address or Username' value={defemailuser} onChange={handleEmailUser} required />
           </div>
           <div className="incorrect-email-error" id='incorrect-email-error'></div>
           <label htmlFor="login-password" className="logpassword">Password</label>
           <div className="logpass">
              <input style={{borderColor:deflogpasscolor,outlineColor:deflogpassout}} type="text" name="login-password" id="login-password" className='input-field' placeholder='Password' minLength="8" maxLength="12" value={deflogpassword}  onChange={handleLogPass} required />
           </div>
           <div className="incorrect-login-password-error" id='incorrect-login-password-error'></div>
           <Link to="/" className="forgot-password">Forgot your Password?</Link>
           
           <div className="remme">
           <label htmlFor="Remember Me" className="match">Remember Me</label>
            <input type="checkbox" name="Remember Me" id="rememberme"/>
            <button style={{opacity:defloginopacity,cursor:deflogincursor}} className="validate-details" type="submit" value="LOG IN" onMouseOver={LoginHover} >Login</button>
            </div>
       </form>
      <hr className="loginhr4"/>
    <h2 className="dnthvacc">Don't have an account?</h2>
    <div className="signupsp" id="signupsp"><Link to="/signup" className="sign btn btn-light" id="sign">SIGN UP FOR SPOTIFY</Link></div>
       
       
    </div>
      
    </>
  )
}
