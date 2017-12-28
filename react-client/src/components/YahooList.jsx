import React from 'react';
import styled from 'styled-components';
import YahooListItem from './YahooListItem.jsx';

const Wrapper = styled.div`
  border:2px solid black;
  display: inline-block;
  float: left;
  width: 39%;
  margin-right:1%;
`;

const YahooList = (props) => (
  <Wrapper>
  	<h4> Yahoo Results </h4>
  	{props.results.map((result, i) => <YahooListItem className="yahoo" key={i} result={result}/>)}
  </Wrapper>
)

export default YahooList;

// import React from 'react';
// import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

// // Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

// // Use Title and Wrapper like any other React component – except they're styled!

// const YahooList = (props) => (
//   <Wrapper>
//     <Title>
//       Hello World, this is my first styled component!
//     </Title>
//   </Wrapper>
// )

// export default YahooList