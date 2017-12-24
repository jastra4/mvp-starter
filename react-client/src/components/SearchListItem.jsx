import React from 'react';

const SearchListItem = (props) => (
  <div className="history" onClick={props.search}>
  	{props.result.term}
  </div>
)

export default SearchListItem;