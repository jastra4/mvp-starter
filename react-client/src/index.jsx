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
      yahooItems: [],
      googleItems: [],
      searchItems: [],
      query: ''
    }
  }

  clearHistory() {
    $.ajax({
      url: '/clear', 
      type: 'GET',
      success: (data) => {
        this.setState({
          searchItems: []
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  refresh() {
    $.ajax({
      type: 'GET',
      url: '/items'
    })
    .done((data) => { 
      var googleData = data[0];
      var yahooData = data[1];
      var searchData = data[2];
      this.setState({
        googleItems: googleData,
        yahooItems: yahooData,
        searchItems: searchData
      })      
    })
    .fail(function() {
      console.log( "error" );
    });
  }

  search() {
    $.ajax({
      url: '/items',
      type: 'POST',
      data: {term: this.state.term}
    })
    .done(() => {
      console.log('ajax post sucess');
      this.refresh();
    })
    .fail(() => {
      console.log('ajax post failed');
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render () {
    return (<div>
      <h1>Search</h1>
      <Search query={this.state.query} refresh={this.refresh.bind(this)} search={this.search.bind(this)}/>
      <YahooList items={this.state.yahooItems}/>
      <GoogleList items={this.state.googleItems}/>
      <SearchList items={this.state.searchItems} clear={this.clearHistory.bind(this)} search={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


    // $.ajax({
    //   url: '/items', 
    //   type: 'GET',
    //   success: (data) => {
    //     var googleData = data[0];
    //     var yahooData = data[1];
    //     var searchData = data[2];
    //     this.setState({
    //       googleItems: googleData,
    //       yahooItems: yahooData,
    //       searchItems: searchData
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });