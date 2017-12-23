import React from 'react';
import SearchListItem from './SearchListItem.jsx';

class SearchList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h4> Search History </h4>
				<button onClick={this.props.clear}> Clear Search </button>
				{this.props.items.map((item, i) => <SearchListItem key={i} item={item}/>)}
			</div>
		)
	}
}

export default SearchList;