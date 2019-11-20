import React from 'react';

import Recipes from '../Recipes';
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
					onInput={this.filteredProducts.bind(this)}
				/>
				<ProductList product={this.state.filteredProducts} />
				<p>{this.state.products}</p>
			</form>
		);
	}
}

// filteredProducts(e) {
// 	const text = e.currentTarget.value;
// 	const filteredProducts = this.getFilteredProductsForText(text);
// 	this.setState({
// 		filteredProducts
// 	});
// };

getFilteredProductsForText = (text) => {
	return new Promise((resolve) => {
		const time = (Math.random() + 1) * 250;
		setTimeout(() => {
			const filteredProducts = RecipiesToRender.filter((products) =>
				products.toLowerCase().includes(text.toLowerCase())
			);
			resolve(filteredProducts);
		}, time);
	});
};

export default Search;
