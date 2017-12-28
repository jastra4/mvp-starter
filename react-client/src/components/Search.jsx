import React from 'react';
import styles from 'styled-components';
import $ from 'jquery';
import App from '../index.jsx'

const Wrapper = styles.div`
  text-align: center;
  border:2px solid black;
  margin: 15px 0;
`;

const Search = (props) => (
	<Wrapper>
	  Enter search here: <input onChange={props.onChange} />	
	  <button onClick={props.search}>Search</button>
	</Wrapper>	
)

export default Search;