import React from 'react';
import './search.css';

class Search extends React.Component<{text : string}, {}> {
	constructor(props : any) {
		super(props);
	}

	render() {
		return(
			<>
				Search result for {this.props.text}
			</>
		);
	}
}

export default Search;
