import React from "react";
import Text from "./Text";

class Main extends React.Component {
  // render() will be called when the state of the component changes
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      input: 0,
      show: false,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  handleChange = (e) => {
    console.log(typeof e.target.value);
    this.setState({ ...this.state, input: parseInt(e.target.value) });
  };

  submit = () => {
    this.setState({ count: this.state.input });
  };

  componentDidMount() {
    //alert("Component Mounted");
  }

  componentDidUpdate() {
    //alert("Component Updated");
  }

  handleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    console.log("this.props", this.props);
    console.log("this.state", this.state);
    return (
      <>
        <h1>{this.props.title}</h1>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          Increment
        </button>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.decrement();
          }}
        >
          Decrement
        </button>

        <input type='number' onChange={this.handleChange} />
        <button onClick={this.submit}>Submit</button>
        <button onClick={this.handleShow}>
          {this.state.show ? "Hide" : "Show"}
        </button>
        {this.state.show && <Text />}
      </>
    );
  }
}
export default Main;
