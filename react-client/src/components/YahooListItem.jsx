import React from 'react';

const YahooListItem = (props) => (
  <div className="yahoo-list-item"> 
		<div>{props.result.title}</div>
		<div>{props.result.snippet}</div>
		<a href={props.result.link}>{props.result.link}</a>
  </div>
)

export default YahooListItem;

//<div>{props.result.id}</div>