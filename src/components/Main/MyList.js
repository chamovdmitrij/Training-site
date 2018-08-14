import React from 'react'

import MyItem from './MyItem'

function MyList(props){
	const data = props.data;
	const listItem = data.map((item, index) =>
		<MyItem id={index} name={item.name} rank={item.rank} country={item.country}/>
	);

	return (
		<ul className="list-group">
			{listItem}
		</ul>

	);
}

export default MyList;