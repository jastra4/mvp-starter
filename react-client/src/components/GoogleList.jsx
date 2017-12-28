import React from 'react';
import styles from 'styled-components';
import GoogleListItem from './GoogleListItem.jsx';

const Wrapper = styles.div`
  border:2px solid black;
  display: inline-block;
  float: left;
  width: 39%;
  margin-right:1%;
`;

const GoogeList = (props) => (
  <Wrapper>
    <h4> Google Results </h4>
    {props.results.map((result, i) => <GoogleListItem key={i} result={result}/>)}
  </Wrapper>
)

export default GoogeList;
//There are {props.results.length} results.