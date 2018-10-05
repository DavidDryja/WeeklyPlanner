import React from 'react';

// This is a stateful component because you can assign this.state a value in the contructor
// then later on whenever your data changes and you want to show something different
// you can change the state by using the built in function this.setState({ stateName: newStateValue })
class HelloWorld extends React.Component {
  constructor() {
    // call this super() in order to access 'this' later on
    super();

    this.state = {
      value: 'world'
    }
  }

  // defining a funtion that is called whenever the button is clicked
  // using promise notation () => {} in order to return a function
  clicked = () => {
    this.setState({ value: 'universe' })
  }

  // you could also define a function like this but then you would have
  // to take an additional step to bind 'this' to it so you can call it later on
  otherClicked() {

  }

  render() {
    return (
      <div>
        <p>Hello {this.state.value}</p>
        {/* You can reference a function by calling this.functionName */}
        <button onClick={this.clicked}>Change your world</button>
      </div>
    )
  }
};

// always have to export the class that you just defined so you can import it when you need
export default HelloWorld;
