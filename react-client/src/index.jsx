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
    // need to clear db instead of just state
    $.ajax({
      url: '/clear', 
      type: 'GET',
      success: (data) => {
        // var googleData = data[0];
        // var yahooData = data[1];
        //var searchData = data;
        this.setState({
          // googleItems: googleData,
          // yahooItems: yahooData,
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
      url: '/items', 
      type: 'GET',
      success: (data) => {
        var googleData = data[0];
        var yahooData = data[1];
        var searchData = data[2];
        this.setState({
          googleItems: googleData,
          yahooItems: yahooData,
          searchItems: searchData
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render () {
    return (<div>
      <h1>Search</h1>
      <Search query={this.state.query} refresh={this.refresh.bind(this)}/>
      <YahooList items={this.state.yahooItems}/>
      <GoogleList items={this.state.googleItems}/>
      <SearchList items={this.state.searchItems} clear={this.clearHistory.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));