import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
	//   Link
} from 'react-router-dom';

import App from './App';
// import Footer from "./components/Footer";
import Privacy from './components/Privacy';

const Root = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact strict sensitive path="/" component={App} />
					<Route exact path="/privacy" component={Privacy} />
				</Switch>
			</div>
		</Router>
	);
};

export default Root;
