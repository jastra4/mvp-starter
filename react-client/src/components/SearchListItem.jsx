import React from 'react';

const SearchListItem = (props) => (
  <div className="history" onClick={props.search}>
  	{props.item.term}
  </div>
)

export default SearchListItem;