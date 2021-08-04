import React from 'react';
import './dialog.css';

interface State {
	open: boolean;
}

interface Props {
	open : boolean;
	Onpop: Function;
}

class Dialog extends React.Component<Props, State>{
	constructor(props : any) {
		super(props);
		this.state = {
			open : false,
		}
	}

	render() {

		this.setState({open : this.props.open})	

		return <dialog open={this.state.open}> {this.props.children} </dialog>
	}	
}

export default Dialog;
