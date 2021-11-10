import { Component } from "react";
import { v4 as uuid } from "uuid";

export class Form extends Component {
  state = {
    title: "",
    desc: "",
    product: null,
    agreed: false,
    size: "",
  };

  prodIdTitle = uuid();
  prodIdDesc = uuid();
  prodIdAgreed = uuid();
  porIdSize = uuid();

  //   handleChange = (e) => {
  //     // console.log(e.target.value);
  //     // console.log(e.target.name);
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  //   handleCheck = (e) => {
  //     const { agreed } = this.state;
  //     this.setState({ agreed: !agreed });
  //   };

  handleChangeAllInputs = (e) => {
    const { name, type, checked, value } = e.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = (e) => {
    const { title, desc, size } = this.state;
    const product = {
      title,
      description: desc,
      size,
    };
    this.setState({ product });
    this.props.addNewProduct(product); //Метод из App
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ title: "", desc: "", size: "", agreed: false }); //можно и просто ...this.state, но у меня проверка кнопки
  };

  handleBtnCheck = (e) => {
    e.preventDefault();
    const { title, desc, size } = this.state;
    if (title === "" || desc === "" || size === "") {
      return;
    }
    this.handleSubmit();
  };
  render() {
    const {
      // handleChange,
      // handleCheck,
      handleChangeAllInputs,
      handleSubmit,
      handleBtnCheck,
      prodIdTitle,
      prodIdDesc,
      prodIdAgreed,
      porIdSize,
    } = this;
    const { title, desc, agreed, size } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={prodIdTitle}>Title</label>
        <input
          id={prodIdTitle}
          type="text"
          name="title"
          value={title}
          onChange={handleChangeAllInputs}
        />
        <label htmlFor={prodIdDesc}>Description</label>
        <input
          id={prodIdDesc}
          type="text"
          name="desc"
          value={desc}
          onChange={handleChangeAllInputs}
        />
        <br />
        <label htmlFor={porIdSize}>Choose your size</label>
        <select
          id={porIdSize}
          name="size"
          value={size}
          onChange={handleChangeAllInputs}
        >
          <option value="" disabled>
            ...
          </option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
        </select>
        <br />
        <label htmlFor={prodIdAgreed}>do you agree?</label>
        <input
          id={prodIdAgreed}
          type="checkbox"
          name="agreed"
          checked={agreed}
          onChange={handleChangeAllInputs}
        />
        <br />
        <button onClick={handleBtnCheck} type="submit" disabled={!agreed}>
          add
        </button>
      </form>
    );
  }
}
