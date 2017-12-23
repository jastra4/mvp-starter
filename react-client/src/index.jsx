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

  componentDidMount() {
    $.ajax({
      url: '/items', 
      type: 'GET',
      success: (data) => {
        // [{googleData}, {yahooData}]
        var googleData = data[0];
        var yahooData = data[1];
        console.log(googleData);
        this.setState({
          googleItems: googleData,
          yahooItems: yahooData
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Search</h1>
      <Search query={this.state.query}/>
      <YahooList items={this.state.yahooItems}/>
      <GoogleList items={this.state.googleItems}/>
      <SearchList items={this.state.searchItems}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));