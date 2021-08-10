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
				icon[this.state.name]
		)
	}
}

export default Icons;

const icon = {
	search : <path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill="white"/>,
	close : <path fill-rule="evenodd" clip-rule="evenodd" d="M10.674 12L3.83701 18.837L5.16301 20.163L12 13.326L18.837 20.163L20.163 18.837L13.326 12L20.163 5.16301L18.837 3.83701L12 10.674L5.16301 3.83701L3.83701 5.16301L10.674 12Z" fill="white"/>,
	forward : <path d="M9.99999 19C9.76634 19.0005 9.5399 18.9191 9.35999 18.77C9.25873 18.6861 9.17503 18.583 9.11368 18.4666C9.05233 18.3503 9.01453 18.223 9.00245 18.092C8.99038 17.961 9.00426 17.8289 9.0433 17.7033C9.08235 17.5777 9.14579 17.4611 9.22999 17.36L13.71 12L9.38999 6.63C9.30692 6.52771 9.24489 6.41002 9.20746 6.28368C9.17003 6.15734 9.15794 6.02485 9.17187 5.89382C9.18581 5.76279 9.22551 5.63581 9.28868 5.52017C9.35186 5.40454 9.43726 5.30252 9.53999 5.22C9.64346 5.12897 9.76462 5.0603 9.89588 5.01831C10.0271 4.97632 10.1657 4.96192 10.3028 4.976C10.4399 4.99009 10.5726 5.03236 10.6925 5.10016C10.8125 5.16796 10.9172 5.25983 11 5.37L15.83 11.37C15.9771 11.5489 16.0575 11.7734 16.0575 12.005C16.0575 12.2366 15.9771 12.4611 15.83 12.64L10.83 18.64C10.7297 18.761 10.6022 18.8567 10.458 18.9192C10.3138 18.9818 10.1569 19.0095 9.99999 19Z" fill="white"/>,
	publish : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6332 10.726C17.0607 11.0758 17.1237 11.7058 16.774 12.1332L12.274 17.6332C12.105 17.8397 11.8606 17.9701 11.595 17.9955C11.3295 18.0208 11.0648 17.939 10.8598 17.7682L7.85982 15.2682C7.43554 14.9147 7.37821 14.2841 7.73178 13.8598C8.08534 13.4355 8.71591 13.3782 9.14018 13.7318L11.365 15.5858L15.226 10.8668C15.5758 10.4393 16.2058 10.3763 16.6332 10.726Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.58579 1.58579C3.96086 1.21071 4.46957 1 5 1H15.5C15.7835 1 16.0537 1.12032 16.2433 1.33104L20.7407 6.32817C20.9018 6.5057 21 6.74138 21 7V21C21 21.5304 20.7893 22.0391 20.4142 22.4142C20.0391 22.7893 19.5304 23 19 23H5C4.46957 23 3.96086 22.7893 3.58579 22.4142C3.21071 22.0391 3 21.5304 3 21V3C3 2.46957 3.21071 1.96086 3.58579 1.58579ZM17.7546 6L16 4.0504V6H17.7546ZM14 3V7C14 7.55228 14.4477 8 15 8H19V21H5L5 3H14Z" fill="white"/>
</svg>,
}
