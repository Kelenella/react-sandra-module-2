import "./App.css";

import { Component } from "react";
import { Form } from "./components/Forms/Form";
import { ProductList } from "./components/Products/ProductList";
import { DeleteButton } from "./components/Widgets/RemoveItem";

// import Counter from "./components/Counter/Counter";

class App extends Component {
  state = {
    allProducts: [],
  };

  componentDidMount() {
    const localProducts = localStorage.getItem("products");
    const parsedProducts = JSON.parse(localProducts);
    this.setState({ allProducts: parsedProducts });
    console.log(this.state.allProducts);
  }
  componentDidUpdate(prevProps, prevState) {
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
    this.setState((prev) => {
      return { allProducts: [...prev.allProducts, product] };
    });
  };

  deleteProduct = (productId) => {
    console.log(productId);
    this.setState((prevState) => ({
      allProducts: prevState.allProducts.filter(
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
          {/* <ProductList
            products={this.state.allProducts}
            onDeleteProduct={this.deleteProduct}
          /> */}
          <DeleteButton />
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
