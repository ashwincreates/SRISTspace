import React from 'react';
import './dialog.css';

interface State {
}

interface Props {
	open : boolean;
	Onpop: Function;
}

class Dialog extends React.Component<Props, State>{
	constructor(props : any) {
		super(props);
	}

	render() {

		console.log(this.props.open)
		return <dialog open={this.props.open}> {this.props.children} </dialog>
	}	
}

export default Dialog;
