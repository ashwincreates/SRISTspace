import {useState} from 'react';
import Dialog from '../dialog/dialog';

function Auth() {
	
let [open, setOpen] = useState(false);

function toggle(){
	setOpen(!open);
}

  return (
   <div>
	<Dialog open={open} Onpop={() => {}}><div className="card-md">hello</div></Dialog>
	<button onClick={toggle}>toggle</button>
</div> 
  );
}

export default Auth;
