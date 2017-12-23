import React from 'react';
import ListItem from './ListItem.jsx';

const YahooList = (props) => (
  <div>
    <h4 className="google"> Google Results </h4>
    There are { props.items.length } items.
    { props.items.map(item => <ListItem key={item.id} item={item}/>)}
  </div>
)

export default YahooList;