import React from 'react';
import styles from 'styled-components';

const Wrapper = styles.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Link = styles.a`
  word-break: break-all;
`;

const Title = styles.div`
`;

const YahooListItem = (props) => (
  <Wrapper> 
		<Title>{props.result.title}</Title>
		<Link href={props.result.link}>{props.result.link}</Link>
  </Wrapper>
)

export default YahooListItem;