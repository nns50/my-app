import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import RandomData from '../Components/random_data';
import Hello from '../Components/hello';
import App from '../App';

export default () => (
	<Router>
		<Switch>
			<Route path = "/" exact component={App}/>
			<Route path = "/carnames" exact component={RandomData}/>
			<Route path = "/hello" exact component={Hello}/>
		</Switch>
	</Router>
	)

