import React, { Component } from 'react';
import UsersList from './UserList';
import RecipiesToRender from '../RecipesToRender';

class Search extends Component {
	constructor() {
		super();

		this.state = {
			filteredUsers: RecipiesToRender
		};
	}
	render() {
		return (
			<div>
				<input type="search" />
				<ul>
					<li>Michał</li>
					<li>Ania</li>
					<li>Kasia</li>
					<li>Tomek</li>
				</ul>
				<input onInput={this.filterUsers.bind(this)} />
				<UsersList users={this.state.filteredUsers} />
			</div>
		);
	}

	filterUsers(e) {
		const text = e.currentTarget.value;
		const filteredUsers = this.getFilteredUsersForText(text);
		this.setState({
			filteredUsers
		});
	}

	getFilteredUsersForText(text) {
		return new Promise((resolve) => {
			const time = (Math.random() + 1) * 250;
			setTimeout(() => {
				const filteredUsers = RecipiesToRender.filter((user) =>
					user.toLowerCase().includes(text.toLowerCase())
				);
				resolve(filteredUsers);
			}, time);
		});
	}
}

export default Search;
