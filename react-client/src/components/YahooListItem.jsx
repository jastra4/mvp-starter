import React from 'react';

const YahooListItem = (props) => (
  <div> 
		<div> { props.item.id }</div>
		<div> { props.item.title }</div>
		<a href={ props.item.link }> { props.item.link } </a>
		<div> { props.item.snippet }</div>
  </div>
)

export default YahooListItem;