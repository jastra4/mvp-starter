import React from 'react';
import YahooListItem from './YahooListItem.jsx';

const YahooList = (props) => (
  <div className="yahoo-list">
    <h4> Yahoo Results </h4>
    There are {props.results.length} results.
    {props.results.map((result, i) => <YahooListItem className="yahoo" key={i} result={result}/>)}
  </div>
)

export default YahooList;