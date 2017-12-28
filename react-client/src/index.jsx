import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import GoogleList from './components/GoogleList.jsx';
import YahooList from './components/YahooList.jsx';
import SearchList from './components/SearchList.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      yahooResults: [],
      googleResults: [],
      searchHistory: [],
      searchBar: ''
    }

    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
  }

  clearHistory() {
    $.ajax({
      url: '/clear', 
      type: 'GET'
    })
    .done((result) => {
      this.setState({
        searchHistory: []
      });
    })
    .catch((err) => {
      console.log('clearHistory error: ', err);
    })
  }

  refreshPage() {
    $.ajax({
      type: 'GET',
      url: '/update'
    })
    .done((data) => { 
      console.log('get request complete');
      var googleData = data[0];
      var yahooData = data[1];
      var searchData = data[2];
      this.setState({
        googleResults: googleData,
        yahooResults: yahooData,
        searchHistory: searchData
      })      
    })
    .fail(function(err) {
      console.log('refreshPage error: ', err);
    });
  }

  search() {
    $.ajax({
      url: '/query',
      type: 'POST',
      data: {term: this.state.searchBar}
    })
    .done((result) => {
      this.refreshPage();
      console.log('post request complete');
    })
    .fail((err) => {
      console.log('search error: ', err);
    });
  }

  onChange(e) {
    this.setState({
      searchBar: e.target.value
    })
  }

  componentDidMount() {
    this.refreshPage();
  }

  

  render () {
    return (<div className="main">
      <h1>Searchify</h1>
        <Search onChange={this.onChange} refresh={this.refreshPage} search={this.search}/>
        <YahooList results={this.state.yahooResults}/>
        <GoogleList results={this.state.googleResults}/>
        <SearchList results={this.state.searchHistory} clear={this.clearHistory} search={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


