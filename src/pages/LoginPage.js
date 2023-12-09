import { useState } from "react";
import Group3img from "../assets/Group 3.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const fixedLoginDetails = {email:"xyz@gmail.com",password:"xyz@123"}
    const[loginDetails, setLoginDetails] = useState({email:"",password:""});
    
    function detailsValidate(){
        if(loginDetails.email === fixedLoginDetails.email && loginDetails.password === fixedLoginDetails.password){
            navigate("/dashboard");
        }
        else{
            alert("Wrong Credentials");
        }
    }
    
  return (
    <>
      <div className="main">
        <div className="home-image">
          <img src={Group3img}></img>
        </div>
        <div style={{textAlign:"center"}} className="slogan-text">
          <p style={{color:"#36A546CC"}}>We are Electric</p>
        </div>
        <div className="input-fields">
            <input type="email" placeholder="E-mail" onChange={(e)=>{setLoginDetails({...loginDetails,email:e.target.value})}}></input><br></br>
            <input type="password" placeholder="password" onChange={(e)=>{setLoginDetails({...loginDetails,password:e.target.value})}}></input>
            <div className="home-bottom">
                <button onClick={()=>{detailsValidate()}}>Login</button>
                <p>Forgot Password</p>
            </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
