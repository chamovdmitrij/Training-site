import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeItem = props => {
	const oddLiStyle = (+props.id % 2 === 0) ? "transparent p-1 m-1 text-center rounded shadow" : "p-1 m-1 text-center rounded shadow";  
	return (
		<li className={oddLiStyle} >
		    <h6 className = "text-danger">
		    	<Link to={`/page/${props.id}`}>
		       		{props.name}
		    	</Link></h6>
		    <h6 className = "text-body">{props.rank}</h6>
		    <h6 className = "text-dark">{props.country}</h6>
		</li>
	);
}

export default EmployeeItem