import React from 'react'
import MyList from './MyList'
import DB from './List'

class ContentList extends React.Component {
	render() {
		return (
			<section>
				<div className="row p-3">
				  <div className="col-md-8 offset-md-2 mt-5 myImg bg-danger full-bg-img shadow rounded">
				    <footer className="blockquote-footer font-italic text-info font-weight-bold text-center">Список сотрудников кафедры</footer>
				    <MyList data={DB.data}/>
				  </div>
				</div>
			</section>
		)
	}
}

export default ContentList;