(this["webpackJsonpreact-sandra-module-2"]=this["webpackJsonpreact-sandra-module-2"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(7),l=n.n(o),d=(n(14),n(9)),s=n(2),a=n(3),i=n(5),u=n(4),j=(n(15),n(8)),h=n(19),b=n(0),p=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={title:"",desc:"",product:null,agreed:!1,size:"",id:null},e.prodId=Object(h.a)(),e.prodIdTitle=Object(h.a)(),e.prodIdDesc=Object(h.a)(),e.prodIdAgreed=Object(h.a)(),e.prodIdSize=Object(h.a)(),e.handleChangeAllInputs=function(t){var n=t.target,c=n.name,r=n.type,o=n.checked,l=n.value;e.setState(Object(j.a)({},c,"checkbox"===r?o:l))},e.handleSubmit=function(t){var n=e.state,c=n.title,r=n.desc,o=n.size,l={prodId:n.id,title:c,description:r,size:o};e.setState({product:l}),e.props.addNewProduct(l),e.resetForm()},e.resetForm=function(){e.setState({title:"",desc:"",size:"",agreed:!1})},e.handleBtnCheck=function(t){t.preventDefault();var n=e.state,c=n.title,r=n.desc,o=n.size;""!==c&&""!==r&&""!==o&&e.handleSubmit()},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.handleChangeAllInputs,t=this.handleSubmit,n=this.handleBtnCheck,c=this.prodIdTitle,r=this.prodIdDesc,o=this.prodIdAgreed,l=this.prodIdSize,d=this.state,s=d.title,a=d.desc,i=d.agreed,u=d.size;return Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsx)("label",{htmlFor:c,children:"Title"}),Object(b.jsx)("input",{id:c,type:"text",name:"title",value:s,onChange:e}),Object(b.jsx)("label",{htmlFor:r,children:"Description"}),Object(b.jsx)("input",{id:r,type:"text",name:"desc",value:a,onChange:e}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:l,children:"Choose your size"}),Object(b.jsxs)("select",{id:l,name:"size",value:u,onChange:e,children:[Object(b.jsx)("option",{value:"",disabled:!0,children:"..."}),Object(b.jsx)("option",{value:"s",children:"S"}),Object(b.jsx)("option",{value:"m",children:"M"}),Object(b.jsx)("option",{value:"l",children:"L"}),Object(b.jsx)("option",{value:"xl",children:"XL"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:o,children:"do you agree?"}),Object(b.jsx)("input",{id:o,type:"checkbox",name:"agreed",checked:i,onChange:e}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:n,type:"submit",disabled:!i,children:"add"})]})}}]),n}(c.Component);function O(e){var t=e.products,n=e.onDeleteProduct;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Product List"}),Object(b.jsx)("ul",{children:t.map((function(e){return console.log(e),Object(b.jsxs)("li",{children:[Object(b.jsx)("h3",{children:e.title}),Object(b.jsx)("p",{children:e.description}),Object(b.jsx)("p",{children:e.size}),Object(b.jsx)("button",{type:"button",onClick:n,id:e.id,children:"Delete"})]},e.id)}))})]})}var x=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={allProducts:[]},e.addNewProduct=function(t){e.setState((function(e){return{allProducts:[].concat(Object(d.a)(e.allProducts),[t])}}))},e.deleteProduct=function(t){e.setState((function(e){return{allProducts:e.allProducts.filter((function(e){return e.id!==t}))}}))},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){console.log("Mount");var e=localStorage.getItem("products"),t=JSON.parse(e);this.setState({allProducts:t})}},{key:"componentDidUpdate",value:function(e,t){console.log("update"),t.allProducts!==this.state.allProducts&&localStorage.setItem("products",JSON.stringify(this.state.allProducts))}},{key:"componentWillUnmount",value:function(){console.log("unmount")}},{key:"render",value:function(){return console.log("Render method"),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"FE 35 Module 2, 3"}),Object(b.jsx)(p,{addNewProduct:this.addNewProduct}),Object(b.jsx)(O,{products:this.state.allProducts,onDeleteProduct:this.deleteProduct})]})})}}]),n}(c.Component),m=x;l.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5b74983c.chunk.js.map