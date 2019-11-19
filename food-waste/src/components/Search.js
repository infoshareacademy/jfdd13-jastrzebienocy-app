import React from 'react';
import styles from './Se';

class Search extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<input className="{styles.searchElement}" type="text" />
			</div>
		);
	}
}

export default Search;
