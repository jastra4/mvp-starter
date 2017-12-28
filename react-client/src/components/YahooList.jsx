import React from 'react';
import styled from 'styled-components';
import YahooListItem from './YahooListItem.jsx';

const YahooList = (props) => (
  <div className="yahoo-list">
    <h4> Yahoo Results </h4>
    {props.results.map((result, i) => <YahooListItem className="yahoo" key={i} result={result}/>)}
  </div>
)

export default YahooList;

// import React from 'react';
// import styled from 'styled-components';

// // Create a Title component that'll render an <h1> tag with some styles
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