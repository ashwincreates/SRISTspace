import React from 'react'
import './login.css'
import {useState }from 'react';



export default class Login extends React.Component{


constructor(props :any){

super(props);

this.state = {

login : false,
open:false

}

this.SignUp = this.SignUp.bind(this);
this.closeLogin = this.closeLogin.bind(this);
this.loginAt = this.loginAt.bind(this);

}

closeLogin(){

   this.setState({open:false});

}

SignUp(){


   // this.setState({SignUp:true});
    
 
 }

 loginAt (){

this.setState({login:true})

}



render(){

// const {login , signUp , open} = this.state;

return(
   
<>
<div  className = "Views">
 <div className = "inlines">
   <img
className = "logoat"
src = "https://storage.googleapis.com/ezap-prod/colleges/7918/shri-ram-institute-of-science-and-technology-jabalpur-logo.jpg"
alt = ""
/>
<h1 style = {{

color:"black",


}}>
    SRIST space
</h1>
</div>

<h1
style = {{

   textAlign:"center",
   margin:"10px"

}}
>
   Get started by signing in .
</h1>
<button className = "buttons" onClick = {this.SignUp}>
  Sign up
</button>
<button  onClick = {this.loginAt} className = "buttons">
   Login
</button>

<text
className = "skip" onClick = {this.closeLogin}
>
   Skip
</text>


</div>
<div className = "layout"   />

</>
);


}

}











