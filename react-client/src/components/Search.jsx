import React from 'react';
import App from '../index.jsx'
import $ from 'jquery';

class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			term: ''
		}
	}

	onChange(e) {
		this.setState({
			term: e.target.value // Why e.target.value? What is the e object like?
		})
	}

	render() {
		return (
			<div className="search">
			  Enter search here: <input value={this.state.term} onChange={this.onChange.bind(this)} />	



			  <button onClick={this.props.search}>Search</button>
			</div>		
		)
	}
}


export default Search;