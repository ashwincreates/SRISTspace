import React from "react";

interface State {
	/*color : string;*/
	//size : string;
	name : string;	
}

interface Props {
	//color : string;
	//size : string;
	name : string;
}

class Icons extends React.Component<Props, State>{
	constructor(props : any){
		super(props);
		this.state = {
		//	color : "green",
		//	size : props.size,
			name : props.name,
		}
	}

	render() {
		return (
			<svg /*style={{fill: this.state.color}}*/ width="24" height="24" viewBox="0 0 24 24" fill="none">
				{icon[this.state.name]}
			</svg>
		)
	}
}

export default Icons;

const icon = {
	search : <path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill="white"/>,
	close : <path fill-rule="evenodd" clip-rule="evenodd" d="M10.674 12L3.83701 18.837L5.16301 20.163L12 13.326L18.837 20.163L20.163 18.837L13.326 12L20.163 5.16301L18.837 3.83701L12 10.674L5.16301 3.83701L3.83701 5.16301L10.674 12Z" fill="white"/>,
	forward : <path d="M9.99999 19C9.76634 19.0005 9.5399 18.9191 9.35999 18.77C9.25873 18.6861 9.17503 18.583 9.11368 18.4666C9.05233 18.3503 9.01453 18.223 9.00245 18.092C8.99038 17.961 9.00426 17.8289 9.0433 17.7033C9.08235 17.5777 9.14579 17.4611 9.22999 17.36L13.71 12L9.38999 6.63C9.30692 6.52771 9.24489 6.41002 9.20746 6.28368C9.17003 6.15734 9.15794 6.02485 9.17187 5.89382C9.18581 5.76279 9.22551 5.63581 9.28868 5.52017C9.35186 5.40454 9.43726 5.30252 9.53999 5.22C9.64346 5.12897 9.76462 5.0603 9.89588 5.01831C10.0271 4.97632 10.1657 4.96192 10.3028 4.976C10.4399 4.99009 10.5726 5.03236 10.6925 5.10016C10.8125 5.16796 10.9172 5.25983 11 5.37L15.83 11.37C15.9771 11.5489 16.0575 11.7734 16.0575 12.005C16.0575 12.2366 15.9771 12.4611 15.83 12.64L10.83 18.64C10.7297 18.761 10.6022 18.8567 10.458 18.9192C10.3138 18.9818 10.1569 19.0095 9.99999 19Z" fill="white"/>,
}