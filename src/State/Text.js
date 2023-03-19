import React from "react";

class Text extends React.Component {
  state = {
    counter: 0,
    intervall: null,
  };
  componentDidMount() {
    // increment the counter every second
    this.setState({
      // set the intervall to a variable so we can clear it later
      intervall: setInterval(() => {
        // change the counter value every second
        this.setState({ counter: this.state.counter + 1 });
      }, 1000),
    });
  }
  componentWillUnmount() {
    // clear the intervall when the component is unmounted
    clearInterval(this.state.intervall);
  }
  render() {
    return (
      <>
        <h1>Counter: {this.state.counter}</h1>
      </>
    );
  }
}

export default Text;
