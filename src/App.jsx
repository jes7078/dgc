import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/1" component={Page} />
				<Route exact path="/2" component={Page2} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Router>
	)
}

export default App
