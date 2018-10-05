import React from 'react';

// import your other components like this and reference them in your html
import HelloWorld from './HelloWorld';

// First type of component that you can make: stateless
// define the component 'Home' as a const variable
// then use promise notation () => () to have it return html
// this is called stateless because unlike the other type of component (HelloWorld), this one doesn't have a state
const Home = () => (
  <div>
    <HelloWorld />
  </div>
);

export default Home;
