import React from 'react';
import GoogleListItem from './GoogleListItem.jsx';

const GoogleList = (props) => {
	<div>
		<h4 className="google"> Google Results </h4>
		There are {props.items.length} results.
		{ props.items.map(item => <GoogleListItem key={item.id} item={item}/>)};
	</div>
};

export default GoogleList;