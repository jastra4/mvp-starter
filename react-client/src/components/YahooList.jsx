import React from 'react';
import styled from 'styled-components';
import YahooListItem from './YahooListItem.jsx';

const Wrapper = styled.div`
  border:1px solid black;
  display: inline-block;
  float: left;
  width: 41%;
  margin-right:1%;
  padding: 0px 5px;
`;

const YahooList = (props) => (
  <Wrapper>
  	<h4> Yahoo Results </h4>
  	{props.results.map((result, i) => <YahooListItem className="yahoo" key={i} result={result}/>)}
  </Wrapper>
)

export default YahooList;