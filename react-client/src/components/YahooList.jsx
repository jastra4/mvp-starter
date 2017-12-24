import React from 'react';
import YahooListItem from './YahooListItem.jsx';

const YahooList = (props) => (
  <div>
    <h4 className="yahoo"> Yahoo Results </h4>
    There are {props.results.length} results.
    {props.results.map(result => <YahooListItem key={result.id} result={result}/>)}
  </div>
)

export default YahooList;