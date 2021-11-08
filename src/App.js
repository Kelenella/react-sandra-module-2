import "./App.css";
import { Component } from "react";
import Counter from "./components/Counter/Counter";

// function App() {
//   return <div className="App"></div>;
// }
class App extends Component {
  state = {
    counter: 0,
  };
  handleDecrement = () => {
    // this.setState((prevState) => {
    //   return {
    //     counter: prevState.counter - 1,
    //   };
    // });
    // shorter
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  render() {
    console.log(this.props);
    const { counter } = this.state;
    const { handleDecrement, handleIncrement } = this;
    return (
      <>
        <div className="App">
          <h1>FE 35 Module 2</h1>
        </div>
        <Counter
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          value={counter}
        />
      </>
    );
  }
}

export default App;
