import React from 'react';
import styles from 'styled-components';

const Wrapper = styles.div`
  margin-top: 5px;
  margin-bottom: 5px;
  word-break: break-all;
`;

const SearchListItem = (props) => (
  <Wrapper onClick={props.search}>
  	{props.result.term}
  </Wrapper>
)

export default SearchListItem;