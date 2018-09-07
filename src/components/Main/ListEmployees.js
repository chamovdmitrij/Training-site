import React from 'react'

import EmployeeItem from './EmployeeItem'

function EmployeeList(props){
	const data = props.data;
	const listItem = data.map((item, index) =>
		<EmployeeItem id={index} name={item.name} rank={item.rank} country={item.country}/>
	);

	return (
		<ul className="list-group">
			{listItem}
		</ul>

	);
}

export default EmployeeList