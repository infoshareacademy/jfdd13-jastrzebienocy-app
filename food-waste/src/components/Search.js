import React from 'react';

// import RecipesToRender from '../RecipesToRender';
import ProductList from './ProductsList';

// Search input by products
class Search extends React.Component {
	state = {
		products: ''
	};

	handleInputChange = () => {
		this.setState({
			products: this.search.value
		});
	};

	constructor() {
		super();

		this.state = {
			filteredProducts: 'this.Recipies.products'
		};
	}

	render() {
		return (
			<form>
				<input
					type="search"
					placeholder="Search for product..."
					ref={(input) => (this.search = input)}
					onChange={this.handleInputChange}
				/>
			</form>
		);
	}
}

export default Search;
