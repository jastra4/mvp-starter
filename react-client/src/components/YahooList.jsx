import React from 'react';
import YahooListItem from './YahooListItem.jsx';

const YahooList = (props) => (
  <div>
    <h4 className="yahoo"> Yahoo Results </h4>
    There are { props.items.length } results.
    { props.items.map(item => <YahooListItem key={item.id} item={item}/>)}
  </div>
)

export default YahooList;