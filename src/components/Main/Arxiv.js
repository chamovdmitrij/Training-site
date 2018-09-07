import React from 'react'
import axios from 'axios'

function getPapers(url) {
    return axios.get(url + '.json');
}

class Arxiv extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			papers: []
		};
	}

	componentDidMount() {
		getPapers(this.props.url)
			.then(res => {
				const papers = res.data.entries;
				this.setState({ papers });		
			})
			.catch(function(error) {
				console.log(error);
			});	
	}

	render() {
		var namesList = this.state.papers.map((paper, i) => {
			const oddLiStyle ="p-3 mt-3 text-start rounded "; //(i % 2 === 0) ? "p-3 mt-3 text-start rounded  transparent" :

            return <li className = {oddLiStyle}>
            		{i + 1 + '. '}{paper.authors}
            		<a href={paper.id}>
            			{' "' + paper.title + '"'}
            		</a> 
            		[<a href={paper.formats.pdf}>pdf</a>   ]</li>;
        });

        
        return (
        	<ul  className="list-group p-3">{namesList}</ul>
            
        );
	}
}

export default Arxiv