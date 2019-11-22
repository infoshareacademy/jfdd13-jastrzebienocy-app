// handleInputChange = () => {
// 	this.setState({
// 		products: this.search.value
// 	});
// };

// constructor() {
// 	super();

// 	this.state = {
// 		filteredProducts: 'this.Recipies.products'
// 	};
// }import React from 'react';
import { Input } from 'semantic-ui-react';
import styles from './AddToForm.module.css';

class AddForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			category: '',
			description: '',
			products: '',
			cookingTime: '',
			weight: '',
			portions: ''
		};
	}

	changeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		this.setState({
			...this.state,
			[name]: value
		});
	};

	create() {
		fetch(`https://myfirstproject-b5855.firebaseio.com/recipe.json`, {
			method: 'POST',
			body: JSON.stringify({
				recipe: this.state
			})
		})
			.then((res) => res.json())
			.then((res) => console.log(res));
	}

	//   get(recipe) {
	//     fetch(`https://myfirstproject-b5855.firebaseio.com/${recipe}.json`, {
	//       method: 'GET'
	//     })
	//     .then(res => res.json())
	//     .then(res => console.log(res));
	//   }

	render() {
		return (
			<form
				onSubmit={(e) => {
					e.preventDefault();
					this.create();
				}}
				className={styles.myForm}
			>
				<Input
					onChange={this.changeHandler}
					value={this.state.name}
					type="text"
					name="name"
					placeholder="Nazwa potrawy"
				/>
				<Input
					onChange={this.changeHandler}
					value={this.state.category}
					type="text"
					name="category"
					placeholder="Rodzaj kuchni"
				/>
				<Input
					onChange={this.changeHandler}
					value={this.state.description}
					type="text"
					name="description"
					placeholder="Krótki opis przepisu"
				/>
				<Input
					onChange={this.changeHandler}
					value={this.state.products}
					type="text"
					name="products"
					placeholder="Składniki"
				/>

				<Input
					onChange={this.changeHandler}
					value={this.state.cookingTime}
					type="text"
					name="cookingTime"
					placeholder="Czas przygotowania..."
				/>
				<Input
					onChange={this.changeHandler}
					label={{ basic: true, content: 'kg' }}
					labelPosition="right"
					placeholder="wpisz wagę..."
					name="weight"
					value={this.state.weight}
				/>
				<Input
					onChange={this.changeHandler}
					value={this.state.portions}
					type="number"
					name="portions"
					placeholder="Ilość porcji ..."
				/>
				<button type="submit">Add Receipe</button>
			</form>
		);
	}
}

export default AddForm;
