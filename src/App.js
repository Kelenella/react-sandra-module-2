import "./App.css";

import { Component } from "react";
import { Form } from "./components/Forms/Form";
import { ProductList } from "./components/Products/ProductList";

// import Counter from "./components/Counter/Counter";

class App extends Component {
  state = {
    allProducts: [],
  };

  componentDidMount() {
    console.log("Mount");
    const localProducts = localStorage.getItem("products");
    const parsedProducts = JSON.parse(localProducts);
    this.setState({ allProducts: parsedProducts });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("update");
    //если изменилось значение поля стейта prevState.prop,
    // то будем переписывать локалсторедж
    if (prevState.allProducts !== this.state.allProducts) {
      localStorage.setItem("products", JSON.stringify(this.state.allProducts));
    }
  }
  componentWillUnmount() {
    console.log("unmount");
  }

  addNewProduct = (product) => {
    this.setState((prevState) => {
      return { allProducts: [...prevState.allProducts, product] };
    });
  };

  deleteProduct = (productId) => {
    this.setState((prev) => ({
      allProducts: prev.allProducts.filter(
        (product) => product.id !== productId
      ),
    }));
  };

  render() {
    console.log("Render method");
    return (
      <>
        <div className="App">
          <h1>FE 35 Module 2, 3</h1>
          <Form addNewProduct={this.addNewProduct} />
          <ProductList
            products={this.state.allProducts}
            onDeleteProduct={this.deleteProduct}
          />
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
