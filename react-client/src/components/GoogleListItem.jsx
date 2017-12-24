import React from 'react';

const GoogleListItem = (props) => (
  <div> 
		<div className="google">{props.result.id}</div>
		<div>{props.result.title}</div>
		<a href={props.result.link }>{props.result.link}</a>
		<div>{props.result.snippet}</div>
  </div>
)

export default GoogleListItem;