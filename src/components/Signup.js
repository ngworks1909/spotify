import React from 'react'
import img1 from '../assets/sploginlogo.png'
import '../css/Signup.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  window.scrollTo(0,0);
    const handleEmail=(event)=>{
        let newstate = event.target.value;
        setEmailId(newstate);
        let v=event.target.value;
        if(v.length===0){
         setColorEmail('red');
         setOutlineEmail('red');
         document.getElementById('text1error').innerHTML='<i class="bi-exclamation-circle-fill" style="color:#d31225"></i><h2>You need to enter your email.</h2>';
        }
        else{
         setColorEmail('rgba(0, 0, 0, 0.589)');
         setOutlineEmail('black');
         document.getElementById('text1error').innerHTML='';
        }
       }
     
       const handleconfEmail=(event)=>{
         let newstate = event.target.value;
         setConfEmailId(newstate);
         let v=event.target.value;
         if(v.length===0){
          setColorConfEmail('red');
          setOutlineConfEmail('red');
          document.getElementById('text2error').innerHTML='<i class="bi-exclamation-circle-fill" style="color:#d31225"></i><h2>You need to confirm your email.</h2>';
         }
         else{
          setColorConfEmail('rgba(0, 0, 0, 0.589)');
          setOutlineConfEmail('black');
          document.getElementById('text2error').innerHTML='';
         }
        }
     
        const handlePassword=(event)=>{
         let newstate = event.target.value;
         setPassword(newstate);
         let v=event.target.value;
         if(v.length===0){
          setColorPassword('red');
          setOutlinePassword('red');
          document.getElementById('text3error').innerHTML='<i class="bi-exclamation-circle-fill" style="color:#d31225"></i><h2>You need to enter a password.</h2>';
         }
         else{
          setColorPassword('rgba(0, 0, 0, 0.589)');
          setOutlinePassword('black');
          document.getElementById('text3error').innerHTML='';
         }
        }
     
        const handleProfile=(event)=>{
         let newstate = event.target.value;
         setProfile(newstate);
         let v=event.target.value;
         if(v.length===0){
          setColorProfile('red');
          setOutlineProfile('red');
          document.getElementById('text4error').innerHTML='<i class="bi-exclamation-circle-fill" style="color:#d31225"></i><h2>Enter a name for your profile.</h2>';
         }
         else{
          setColorProfile('rgba(0, 0, 0, 0.589)');
          setOutlineProfile('black');
          document.getElementById('text4error').innerHTML='';
         }
        }
     
        const handleYear=(event)=>{
         let newstate = event.target.value;
         setYear(newstate);
         let v=event.target.value;
         if(v.length===0){
          setColorYear('red');
          setOutlineYear('red');
          document.getElementById('text5error').innerHTML='<i class="bi-exclamation-circle-fill" style="color:#d31225"></i><h2>Enter a valid year.</h2>';
         }
         else{
          setColorYear('rgba(0, 0, 0, 0.589)');
          setOutlineYear('black');
          document.getElementById('text5error').innerHTML='';
         }
        }
     
        const handleDay=(event)=>{
         let newstate = event.target.value;
         setDay(newstate);
         let v=event.target.value;
         if(v.length===0){
          setColorDay('red');
          setOutlineDay('red');
          document.getElementById('text6error').innerHTML='<i class="bi-exclamation-circle-fill" style="color:#d31225"></i><h2>Enter a valid day.</h2>';
         }
         else{
          setColorDay('rgba(0, 0, 0, 0.589)');
          setOutlineDay('black');
          document.getElementById('text6error').innerHTML='';
         }
        }
     
        const handleGender=(event)=>{
         document.getElementById('genderror').innerHTML=''
        }
     
     
     
       const [defaultcoloremail,setColorEmail]=useState('rgba(0, 0, 0, 0.589)');
       const [defaultcolorconfemail,setColorConfEmail]=useState('rgba(0, 0, 0, 0.589)');
       const [defaultcolorpassword,setColorPassword]=useState('rgba(0, 0, 0, 0.589)');
       const [defaultcolorprofile,setColorProfile]=useState('rgba(0, 0, 0, 0.589)');
       const [defaultcoloryear,setColorYear]=useState('rgba(0, 0, 0, 0.589)');
       const [defaultcolorday,setColorDay]=useState('rgba(0, 0, 0, 0.589)');
       //break bordercolours,outlines 
     
       const [defoutlineemail,setOutlineEmail]=useState('black');
       const [defaultoutlineconfemail,setOutlineConfEmail]=useState('black');
       const [defaultoutlinepassword,setOutlinePassword]=useState('black');
       const [defaultoutlineprofile,setOutlineProfile]=useState('black');
       const [defaultoutlineyear,setOutlineYear]=useState('black');
       const [defaultoutlineday,setOutlineDay]=useState('black');
     
       //break input values
       const [emailid,setEmailId]=useState('');
       const [confemailid,setConfEmailId]=useState('');
       const [defpassword,setPassword]=useState('');
       const [defprofile,setProfile]=useState('');
       const [defyear,setYear]=useState('');
       const [defday,setDay]=useState('');

  return (
    <div id='signup'>
      <div className="spicon"><Link to={'/'}><img src={img1} className='signup-logo' alt="aria-label"/></Link></div>
      <p className="t1 signup-text1">Sign up for free to start</p>
      <p className="t1 signup-text2">listening.</p>
      <div className="Facebook"><Link to="/" className="fb btn btn-primary" >Sign up with Facebook</Link></div>
      <div className="Google"><Link to="/" className="goog btn btn-light" >Sign up with Google</Link></div>
      <div className="break1">
        <p className="signpara1">or</p>
      </div>
      <form action="/" method="post" className='signup-form'>
      <label htmlFor="Email" className="mail input-field-label">What's your email?</label>
      <div className="textbox1"><input style={{borderColor:defaultcoloremail,outlineColor:defoutlineemail}} type="text" name="Email" id="email" className="email input-field" placeholder="Enter your email."  value={emailid} onChange={handleEmail} required /></div>
      <div id="text1error" className='texterror'></div>
      <div className="with-mobile"><Link to="/signup/phonesignup" className='login-with-mobile'>Use phone number instead</Link></div>
      <label htmlFor="Confirm" className="confirm input-field-label">Confirm your email</label>
      <div className="textbox2"><input  style={{borderColor:defaultcolorconfemail,outlineColor:defaultoutlineconfemail}}  type="text" name="Confirm" id="conf-email" className="conf-email input-field" placeholder="Enter your email again."  value={confemailid} onChange={handleconfEmail} required /></div>
      <div id="text2error" className='texterror'></div>
      <label htmlFor="Password" className="createpass input-field-label">Create a password</label>
      <div className="textbox3"><input  style={{borderColor:defaultcolorpassword,outlineColor:defaultoutlinepassword}}  type="text" name="Password" id="create-pass" className="create-pass input-field" placeholder="Create a password." value={defpassword} onChange={handlePassword} required/></div>
      <div id="text3error" className='texterror'></div>
      <label htmlFor="Name" className="username input-field-label">What should we call you?</label>
      <div className="textbox4"><input style={{borderColor:defaultcolorprofile,outlineColor:defaultoutlineprofile}} type="text" name="Name" id="prof-name" className="prof-name input-field" placeholder="Enter a profile name." value={defprofile} onChange={handleProfile} required /></div>
      <div id="text4error" className='texterror'></div>
      <h2 className="linetext">This appears on your profile.</h2>
      <div className="linetext2"><label htmlFor="birthday" className='input-field-label'>What's your birth date?</label></div>

      <div className="yourbd">
        <div className="birth"><label htmlFor="year" className='year-label input-field-label'>Year</label>
        <label htmlFor="month" className='month-label input-field-label'>Month</label>
        <label htmlFor="day" className='day-label input-field-label'>Day</label></div>
        {/* <div className="bmonth"><label htmlFor="month">Month</label></div>
        <div className="bday"><label htmlFor="day">Day</label></div> */}
        <div className="birth-inputs">
        <div className="biryear"><input style={{borderColor:defaultcoloryear,outlineColor:defaultoutlineyear}} type="text" id="year" name="year" className="birthyear" inputMode="numeric" maxLength="4"  pattern="(19[0-9]{2})|(200)[0-9]" placeholder="YYYY" required="" value={defyear} onChange={handleYear} /></div>
        <div className="birmonth"><select id="month" name="month" required="" aria-invalid="true" className="birthmonth" style={{color:'black'}}><option defaultValue="01"  value="01" className='defaultbirthmonth' >January</option>
            {/* <option value="01">January</option> */}
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
        </select>
        <svg role="img" focusable="false" height="16" width="16" viewBox="0 0 24 24" aria-hidden="true" className="svgicon"><polyline points="20 8 12 17 4 8" fill="none" stroke="#181818"></polyline></svg>
        </div>
        <div className="birday"><input style={{borderColor:defaultcolorday,outlineColor:defaultoutlineday}} type="text" id="day" inputMode="numeric" maxLength="2" name="day" pattern="((0?[1-9])|([12][0-9])|(3[01]))" placeholder="DD" required=""  className="birthday" value={defday} onChange={handleDay} /></div> 
      </div>
      <div className="birthdayerrors">
      <div id="text5error" className='texterror'></div>
      <div id="text6error" className='texterror'></div>
      </div>
      </div>
      <div className="gend"><label htmlFor="gender">What's your gender?</label></div>
    <div className="gvalues">
        <input type="radio" name="gender" id="male" className="male" value="Male" onSelect={handleGender} /><label htmlFor="male" name="men" className="men">Male</label>
        <input type="radio" name="gender" id="female" className="female" value="Female" onSelect={handleGender} /><label htmlFor="female" name="women" className="women">Female</label>
        <input type="radio" name="gender" id="non-binary" className="non-binary" value="Non-binary" onSelect={handleGender} /><label htmlFor="non-binary" name="non-bin" className="non-bin">Non-binary</label>
        <input type="radio" name="gender" id="other" className="other" value="Other" onSelect={handleGender} /><label htmlFor="other" name="oth" className="oth">Other</label>
        <br/>
        <input type="radio" name="gender" id="not-to-say" className="not-to-say" value="Prefer not to say" onSelect={handleGender} /><label htmlFor="not-to-say" name="pnts" className="pnts">Prefer not to say</label>
     </div>
     <div className="signup-submit"><button type="submit" className='signupsub btn-success' id='signupsub' >Sign up</button></div>
       
     
      </form>
    <div className="existing-user">Having an account?<Link to="/login" className="prev-user">Login</Link></div>
    </div>
  )
}
