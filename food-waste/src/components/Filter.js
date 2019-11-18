import React, { Component } from 'react';
// import { Select } from 'semantic-ui-react';

class Search extends Component {
	state = {
		query: ''
	};

	handleInputChange = () => {
		this.setState({
			query: this.search.value
		});
	};

	render() {
		return (
			<form>
				<input
					placeholder="Search for..."
					ref={(input) => (this.search = input)}
					onChange={this.handleInputChange}
				/>
				<p>{this.state.query}</p>
			</form>
		);
	}
}

export default Search;
