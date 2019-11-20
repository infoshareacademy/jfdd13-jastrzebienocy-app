import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
// import Footer from './components/Footer';
import Privacy from './components/Privacy';
const Root = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/privacy" component={Privacy} />
					{/* <Route exact path="/dashboard" component={Dashboard} /> */}
					{/* <Route exact path="/przepisy" component={Przepisy} /> */}
					{/* <Route exact path="/profil" component={Profil} /> */}
				</Switch>
			</div>
		</Router>
	);
};
export default Root;
