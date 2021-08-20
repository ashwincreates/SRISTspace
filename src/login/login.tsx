import React, { Component } from 'react'
import './login.css';
import Dialog from '../dialog/dialog';
import {GoogleLogin} from "react-google-login"

interface states{
   open:boolean;
   rendered:string;
email:string;
password:string;
pass1:string;
response:string;
}

interface props{
  
}

let open:boolean = true;

export default class Login extends Component<props,states>{
constructor(props:any){
   super(props);
   this.state = {
      open:true,
      rendered:"0",
      password:"",
      email:"",
      pass1:"" 
      ,response:""
   }
   this.closeDialog = this.closeDialog.bind(this);
}

closeDialog(){
   this.setState({open:false});
}

responseGoogleSuccess = (response) =>{
   
   this.closeDialog();
}

responseGoogleFailure = (response) =>{
   alert("unable to sign in with google.")
  
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
<h1 className = "udTxt" onClick = {this.closeDialog}>
      SKIP
   </h1>
      </div>
   </div>
   <LoginWindows/>
  
  <div className = "or">
   <h1 style = {{
      textAlign:"center",
      color:"white"
      ,marginTop:"15%"
   }}>
      or
   </h1>
   
      {/* <img 
      className = "googlesign"
      src ={process.env.PUBLIC_URL + "/googlesign.png"}
      alt = ""
      /> */}

      <GoogleLogin
      clientId = "561872423103-p700sl1jeu9rhrmq2tr5n6mlodekr467.apps.googleusercontent.com"
      className = "googlesign"
      onSuccess = {this.responseGoogleSuccess}
      onFailure = {this.responseGoogleFailure}
      />
</div>
   </div>  
</Dialog>


);

}

}


class LoginWindows extends Component<props,states> {

constructor(props:props){
   super(props);
   this.state = {
      open:true,
      rendered:"0",
      password:"",
      email:"",
      pass1:"" 
      ,response:""
   }

   this.changeToLogin = this.changeToLogin.bind(this);
   this.changeToSignUp = this.changeToSignUp.bind(this);
}

forceClose(){
   this.setState({open:false});
}

changeToSignUp(){
   this.setState({rendered:"1"});
}

changeToLogin(){
   this.setState({rendered:"2"});
}

signUPToserver(event){
   event.preventDefault();
  var url:string =  "https://sristspace.herokuapp.com/adduser/"+this.state.email +"/" + this.state.password +
  "/sem/stream/branch";

  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  var isValid:boolean = false;
  if (!pattern.test(this.state.email)){
     alert("Enter valid email address.")
     isValid = false;
  }

  if (this.state.pass1 != this.state.password){
     alert("Password does not match.")
     isValid = false;
  }else {
     isValid = true;
  }

  if (isValid){
     var output:string = "";
     fetch(url).then((response)=>{
        response.text().then(result =>{
           output = result;
        }).then(()=>{
         if (output === "submit"){

            this.setState({rendered:"2"});
         
            alert("user added , login to continue.");
           }else {
         
             alert("user already exists");
           }
        })
     })
   
     

     isValid = false;
  }

  
  
}

LoginToServer(event){
   event.preventDefault();

   var url:string = "https://sristspace.herokuapp.com/getuser/" + this.state.email + "/" + this.state.password;
   var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

   var isValid:boolean = false;
   if (!pattern.test(this.state.email)){
      alert("Enter valid email address.")
      isValid = false;
   }else {
      isValid = true;
   }


   if (isValid){

      fetch(url).then(response=>{
         response.json().then(result=>{
            if (result === "user does not exists"){
               alert("wrong password or email.")
            }else {
               // this.setState({rendered:"0"})
               
            }
         })
      })

      isValid = false;

   }
   
   
}

setEmail(email:string){
   this.setState({email:email});
}

setPassword(pass:string){
   this.setState({password:pass});
}

setPass1(pass:string){
   this.setState({pass1:pass});
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
<form>
           <input className = "commonInputs" onChange = {evt => {this.setEmail(evt.target.value)}} placeholder = {"Type Email Address"} type="email"></input>
           <input className = "commonInputs" onChange = {evt=>{this.setPassword(evt.target.value)}}  placeholder = {"Type password"} type = "password" name = "password"></input>
           <input className = "commonInputs" onChange = {evt=>{this.setPass1(evt.target.value)}} placeholder = {"Retype password"} type = "password" name = "password"></input>
           <button className = "common2" onClick = {(Event) =>{this.signUPToserver(Event)}} >
              Sign Up 
           </button>
           </form>
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
               <h1 style = {{
                  textAlign:"center",
                   color:"black"
               }}>
                  Login
               </h1>
               <div className = "borderScrap" style = {{
                  marginTop:"50px"
               }}>
                  <form>
                  <input
                  placeholder = "Enter registered email address"
                  className = "commonInputs1"
                  onChange = {evt=>{this.setEmail(evt.target.value)}}
                  />
                  <input placeholder = "Enter password" 
                  onChange = {evt=>{this.setPassword(evt.target.value)}}
                  type = "password" name = "password" className = "commonInputs1"/>
                  <button className = "common2" onClick = {(Event) => {this.LoginToServer(Event)}} >
                     Login
                  </button>
                  
                  </form>
                  <div style = {{
                     display:"flex",
                     flexDirection:"row"
                  }}>
                  <h1 style = {{
              color:"black"
              ,marginLeft:"10px"
           }}>
              Create a new account.
           </h1>
           <text style={{
              color:"blue"
              ,marginLeft:"10px"
           }}  onClick = {this.changeToSignUp} >
              sign up
           </text>
           </div>
               </div>
            </div>
         );
  


  }

}


}













