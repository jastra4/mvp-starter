import React from 'react';
import GoogleListItem from './GoogleListItem.jsx';

const GoogeList = (props) => (
  <div className="google-list">
    <h4> Google Results </h4>
    {props.results.map((result, i) => <GoogleListItem key={i} result={result}/>)}
  </div>
)

export default GoogeList;
//There are {props.results.length} results.