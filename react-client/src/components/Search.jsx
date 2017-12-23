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

	search() {
    console.log(this.state.term)
    $.ajax({
    	url: '/items',
    	type: 'POST',
    	data: {term: this.state.term}
    })
    .done(() => {
      console.log('ajax post sucess');
    })
    .fail(() => {
    	console.log('ajax post failed');
    });
	}

	render() {
		return (
			<div>
			  Enter search here: <input value={this.state.term} onChange={this.onChange.bind(this)} />	



			  <button onClick={this.search.bind(this)}>Search</button>
			</div>		
		)
	}
}


export default Search;