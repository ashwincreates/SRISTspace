import React from 'react';
import ReactDOM from 'react-dom';
import './dialog.css';

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
	
	componentDidUpdate(prevProps : any){

		if(prevProps.open != this.props.open){
			this.toggle();
		
		}
	}

	toggle(){
		this.setState({open :!this.state.open})
	}

	render() {
		const root = document.getElementById("root")?.style;
		/*if(this.state.open && root){
			if(root)
				root.overflow = "hidden";
		}
		else{
			if(root)
				root.overflow = "scroll";
		}*/
		const modal = <dialog  open={this.state.open} onClick={() => this.toggle()}> {this.props.children} </dialog>
		return ReactDOM.createPortal(modal, document.getElementById("modal") as HTMLElement)	
	}	
}

export default Dialog;
