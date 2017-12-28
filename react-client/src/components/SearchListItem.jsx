import React from 'react';

const SearchListItem = (props) => (
  <div className="search-list-item" onClick={props.search}>
  	{props.result.term}
  </div>
)

export default SearchListItem;