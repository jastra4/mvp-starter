import React from 'react';
import styles from 'styled-components';
import SearchListItem from './SearchListItem.jsx';

const Wrapper = styles.div`
  border:2px solid black;
  display: inline-block;
  float: left;
  width: 15%;
  margin-right:1%;
`;

const SearchList = (props) => (
	<Wrapper>
		<h4> Search History </h4>
		<button onClick={props.clear}> Clear Search </button>
		{props.results.map((result, i) => <SearchListItem key={i} result={result} />)}
	</Wrapper>
)

export default SearchList;