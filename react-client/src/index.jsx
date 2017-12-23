import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      yahooItems: [],
      googleItems: [],
      query: ''
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/yahoo', 
      type: 'GET',
      success: (data) => {
        //get all items and parse here
        this.setState({
          yahooItems: data
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
      <List items={this.state.yahooItems}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));