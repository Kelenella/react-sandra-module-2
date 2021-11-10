import "./App.css";
import { Component } from "react";
import { Form } from "./components/Forms/Form";

// import Counter from "./components/Counter/Counter";

class App extends Component {
  state = {
    allProducts: [],
  };

  addNewProduct = (product) => {
    this.setState((prevState) => {
      return { allProducts: [...prevState.allProducts, product] };
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>FE 35 Module 2</h1>
          <Form addNewProduct={this.addNewProduct} />
        </div>
      </>
    );
  }
}

export default App;

// counter: 0,
// const { counter } = this.state;
// const { handleDecrement, handleIncrement } = this;
// handleDecrement = () => {
// this.setState((prevState) => {
//   return {
//     counter: prevState.counter - 1,
//   };
// });
// shorter
//   this.setState((prevState) => ({
//     counter: prevState.counter - 1,
//   }));
// };

// handleIncrement = () => {
//   this.setState((prevState) => ({
//     counter: prevState.counter + 1,
//   }));
// };

// {
//   /* <Counter
//           handleDecrement={handleDecrement}
//           handleIncrement={handleIncrement}
//           value={counter} */
// }
