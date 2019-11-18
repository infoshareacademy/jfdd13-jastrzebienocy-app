import React from 'react';
import './App.css';
import NaviBar from './components/NaviBar';
// import uuid from 'uuid';
// import faker from 'faker';
// import { Select } from 'semantic-ui-react'
import Search from './components/Filter';
// import SearchExampleStandard from './components/Filter';
import SelectExample from './components/searchDropdown';

function App() {
	return (
		<div className="App">
			<NaviBar />
			<Search />
			<SelectExample />
			<header className="App-header" />
		</div>
	);
}

export default App;
