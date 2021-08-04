import React from 'react'
import { setConstantValue } from 'typescript';
import './login.css'


export default class Login extends React.Component{


constructor(props :any){

super(props);

this.state = {

login : false,
SignUp:false

}

// this.signUp = Signup.bind(this);

}



render(){

return(


<>
<div className = "Views">
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

   textAlign:"center"

}}
>
   Get started by signing in .
</h1>
<button style = {
   {
      
      
      

   }
} onClick = {Signup}
>
   Sign up
</button>
<button  onClick = {loginAt} style = {{



}}>
   Login
</button>

</div>
<div className = "layout"   />

</>



);


}




}

function Signup(){


   // this.setState({Signup:true});
    
 
 
 }

function loginAt (){




}





