import React from 'react';
import GoogleListItem from './GoogleListItem.jsx';

const GoogeList = (props) => (
  <div>
    <h4 className="google"> Google Results </h4>
    There are {props.results.length} results.
    {props.results.map(result => <GoogleListItem key={result.id} result={result}/>)}
  </div>
)

export default GoogeList;