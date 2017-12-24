import React from 'react';
import SearchListItem from './SearchListItem.jsx';

const SearchList = (props) => (
	<div className="history">
		<h4> Search History </h4>
		<button onClick={props.clear}> Clear Search </button>
		{props.results.map((result, i) => <SearchListItem key={i} result={result} />)}
	</div>
)

export default SearchList;