import React from 'react';
import $ from 'jquery';
import App from '../index.jsx'

const Search = (props) => (
	<div className="search">
	  Enter search here: <input onChange={props.onChange} />	
	  <button onClick={props.search}>Search</button>
	</div>	
)

export default Search;