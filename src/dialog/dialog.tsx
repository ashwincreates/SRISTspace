import React from 'react';
import ReactDOM from 'react-dom';

interface State {
	open:boolean;
}

interface Props {
	open : boolean;
}

class Dialog extends React.Component<Props, State>{
	constructor(props : any) {
		super(props);
		this.state = {
			open : false,
		}
	}
	
	render() {
		const modal = <dialog  open={this.props.open}> {this.props.children} </dialog>
		return ReactDOM.createPortal(modal, document.getElementById("modal") as HTMLElement)	
	}	
}

export default Dialog;
