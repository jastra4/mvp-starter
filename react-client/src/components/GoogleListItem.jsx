import React from 'react';

const GoogleListItem = (props) => (
  <div> 
		<div className="google"> { props.item.id }</div>
		<div> { props.item.title }</div>
		<a href={ props.item.link }> { props.item.link } </a>
		<div> { props.item.snippet }</div>
  </div>
)

export default GoogleListItem;