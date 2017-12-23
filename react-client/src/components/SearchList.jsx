import React from 'react';
import SearchListItem from './SearchListItem.jsx';

const SearchList = (props) => (
  <div>
  	<h4> Search History </h4>
  	{props.items.map(item => <SearchListItem item={item}/>)}
  </div>
)

export default SearchList;