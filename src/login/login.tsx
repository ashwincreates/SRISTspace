import React, { Component } from 'react'
import './login.css'
import ReactDOM, { render } from 'react-dom';
import Dialog from '../dialog/dialog';
import {useState } from 'react';

interface states{
   open:boolean;
}

interface props{
  
}

export default class Login extends Component<props,states>{
constructor(props:any){
   super(props);
   this.state = {
      open:true
   }
   this.closeDialog = this.closeDialog.bind(this);
}

closeDialog(){
   this.setState({open:false});
}

render (){

return (
<Dialog open = {this.state.open}>
   <div className = "Views">
   <div>
      <div className = "flexrow">
<img
className = "logoat"
alt = ""
src = "https://storage.googleapis.com/ezap-prod/colleges/7918/shri-ram-institute-of-science-and-technology-jabalpur-logo.jpg"
/>
<div style = {{
   verticalAlign:"center",
   margin:"5px"
}}>
<text>
   SRIST space
   </text>
   <h1>
      v 1.0
   </h1>
</div>
      </div>
   </div>
   <LoginWindows/>
   <h1 className = "udTxt" onClick = {this.closeDialog}>
      SKIP
   </h1>
   </div>

 
</Dialog>


);

}

}

interface loginprops{
  
}

interface loginstates{
rendered:string;
}

class LoginWindows extends Component<loginprops,loginstates>{

constructor(props:loginprops){
   super(props);
   this.state = {
      rendered:"0"
   }

   this.changeToLogin = this.changeToLogin.bind(this);
   this.changeToSignUp = this.changeToSignUp.bind(this);
}

changeToSignUp(){
   this.setState({rendered:"1"});
}

changeToLogin(){
   this.setState({rendered:"2"});
}

render (){

  switch(this.state.rendered){


case "0":
   return (
      <div>
      <h1 style = {{
         textAlign:"center"
       ,color:"black"
      }}>
         Sign in to continue
      </h1>
<button className = "commonButton" onClick = {this.changeToSignUp} >
   Sign up
</button>
<button className = "commonButton" onClick = {this.changeToLogin}>
   Login
</button>
   </div>
   );

   case "1":
      return(
         <div>
            <h1
            style = {{
               textAlign:"center"
               ,color:"black"
            }}
            >Sign Up</h1>
<div className = "borderScrap"> 
           <input className = "commonInputs" placeholder = {"Type Email Address"}></input>
           <input className = "commonInputs" placeholder = {"Type password"} type = "password" name = "password"></input>
           <input className = "commonInputs" placeholder = {"Retype password"} type = "password" name = "password"></input>
           <button className = "common2">
              Sign Up 
           </button>
           <div style = {{
              display:"flex",
              flexDirection:"row"
           }}>
           <h1 style = {{
              color:"black"
              ,marginLeft:"10px"
           }}>
              Already have an account ?
           </h1>
           <text style={{
              color:"blue"
              ,marginLeft:"10px"
           }}  onClick = {this.changeToLogin} >
              Login
           </text>
           </div>
           
</div>
             
         </div>

      );


      case "2":
         return(
            <div>
               <text>
                  login
               </text>
            </div>
         );
  


  }

}


}













