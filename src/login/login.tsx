import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import React from 'react';
import "./login.css"




function Login(){
    const [open, setOpen] = React.useState(false);
return(
<div>
<Dialog open = {open} style = {{
    "margin":10
}}>
    <DialogTitle style = {{
        "fontWeight":"bold"
    }}>
        SRIST space
    </DialogTitle>
    <img
    className = "imageProps"
    src = "https://storage.googleapis.com/ezap-prod/colleges/7918/shri-ram-institute-of-science-and-technology-jabalpur-logo.jpg"
    />
</Dialog>

</div>

);


}

export default Login;