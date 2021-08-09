import React, { Component } from 'react'
import './login.css'
import ReactDOM from 'react-dom';
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
}

render (){

return (
<Dialog open = {this.state.open}>
  <div>
     <text>
        hello
     </text>
  </div>
</Dialog>


);

}

}











