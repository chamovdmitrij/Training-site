import React from 'react'
import Arxiv from './Arxiv'
import DataAPI from './api.js'

var photo = {};

function importAll(r) {
	r.keys().forEach(key => photo[key] = r(key));
}

importAll( require.context('../PeoplePhoto/', true, /\.jpg$/) );
console.log(photo);

const baseURL = 'https://arxiv.org/a/';

const Img = (props) => {
	console.log(props.src);
	return(
		<img className = " m-1 img-fluid img-thumbnail rounded shadow" src={props.src} alt=""></img>
	);
};

const Page = (props) => {
	
	const human = DataAPI.get(props.match.params.number);
	
	const userURLorSRC = (user, urlOrSrc) => {
		var arr = user.split(' ');

		var urlOrSrcName = "";
		(arr.length === 3) ? ( urlOrSrcName = arr[2] + '_' + arr[0].charAt(0) ) : ( urlOrSrcName = arr[1] + '_' + arr[0].charAt(0) ) 

		return (urlOrSrc === 'url') ? ( urlOrSrcName.toLowerCase() + "_1" ) : ( urlOrSrcName.toLowerCase() + ".jpg" );
	};

	return (
		<div className="container">
			{/*<h1>{human.name}</h1>*/}
			<div className="row">
				<div className="col-12 m-2 p-2  shadow rounded">
					<div className="row ">
						<div className="col-4 mt-1 p-4"><Img src={photo['./' + userURLorSRC(human.name, "src")]}></Img></div>
						<div className="col-8 mt-1 p-3">
							<h4>{human.name}</h4>
							<h6>{human.rank}</h6>
							<h6>{human.country}</h6>
						</div>

						<div className="w=100 mt-2 p-3 ">
							<Arxiv url={baseURL + userURLorSRC(human.name, "url")}/>
						</div>
					</div>
				</div>
			</div>
		</div>	
	);
}

export default Page