import React from 'react';
import SearchListItem from './SearchListItem.jsx';

class SearchList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}



	render() {
		return (
			<div className="history">
				<h4> Search History </h4>
				<button onClick={this.props.clear}> Clear Search </button>
				{this.props.items.map((item, i) => <SearchListItem key={i} item={item} search={this.props.search}/>)}
			</div>
		)
	}
}

export default SearchList;