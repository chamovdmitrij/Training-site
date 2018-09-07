import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page from './components/Main/Page'
import Home from './Home'

const Router = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/page/:number" component={Page}/>
		</Switch>
	</main>
)

export default Router