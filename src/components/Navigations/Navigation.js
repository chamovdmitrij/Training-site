import React from 'react'
import NavItem from './NavItem'
import { Link } from 'react-router-dom'
import NavDropdown from './NavDropdown'

class Navigation extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light shadow">
			  <a className="navbar-brand" href="/">Main menu</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">

				    <NavItem path="/" name="Home" />
		            <NavItem path="/" name="Education" />
		            <NavItem path="/" name="News about conferences"/>
		            <NavItem path="/" name="Science"/>
		            <NavItem path="/" name="Links"/>
		            <NavItem path="/" name="About us"/>

  			    <NavDropdown name="Staff">
  					<Link className="dropdown-item" to="/">PhD students</Link>
  					<Link className="dropdown-item" to="/">Master students</Link>
  					<div className="dropdown-divider"></div>
  					<Link className="dropdown-item" to="/">Undergrads</Link>
  				</NavDropdown>
			    </ul>

			    {/*<form className="form-inline my-2 my-lg-0">
			      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
			      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			    </form>*/}
			  </div>
			</nav>
		)
	}
}

export default Navigation;