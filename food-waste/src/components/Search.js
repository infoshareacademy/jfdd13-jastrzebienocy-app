import React from 'react';
import { Grid } from 'semantic-ui-react';
// import RecipesToRender from '../RecipesToRender';
// import ProductList from './ProductsList';
import styles from './Search.module.css';

// Search input by products
class Search extends React.Component {
	state = {
		// products: '',
		recipes: [],
		filter: {
			products: ''
		}
	};

	componentDidMount() {
		fetch('https://foodwaste-ecb78.firebaseio.com/recipes.json')
			.then((respond) => respond.json())
			.then((object) =>
				Object.keys(object).map((key) => {
					object[key].id = key;
					return object[key];
				})
			)
			.then((data) => console.log(data));
		// .then((results) => this.setState({ recipes: results }));

		console.log('Wyświetlam');
	}
	handleOnSearch = (values) => {
		this.setState({
			filter: values
		});
	};

	render() {
		// const { filter } = this.state;
		return (
			<div>
				<input
					className={styles.searchElement}
					type="search"
					onSearch={this.handleOnSearch}
					placeholder="Search for product..."
					// ref={(input) => (this.search = input)}
					// onChange={this.handleOnSearch}
				/>
			</div>
		);
	}
}

export default Search;
// (<Grid>
//     {this.state.recipes.map((item) => (
//         <Grid.Column width={8}>
//             <RecipeView recipe={item} />
//         </Grid.Column>
//     ))}
// </Grid>)
