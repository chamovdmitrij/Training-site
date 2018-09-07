import DB from './List'

const api = {
	data: DB.data,

	all: function() {return this.data},

	get: function(id) {
		return this.data[id];
	} 
}

export default api