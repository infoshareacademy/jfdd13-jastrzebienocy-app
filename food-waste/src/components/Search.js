import React from 'react';
import styles from './Search.module.css';
import Recipes from '../Recipes';

// const
// Search input by products
class Search extends React.Component {
	state = {
		// recipes: Recipes,
		filteringProducts: [ products ]
	};

	filterResults = () => {};

	// Rendering of input
	render() {
		const { filterResults } = this.state;
		return (
			<div>
				<input className={styles.searchElement} type="text" />
			</div>
		);
	}
}

export default Search;
