(this["webpackJsonpreact-sandra-module-2"]=this["webpackJsonpreact-sandra-module-2"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),i=n.n(r),l=(n(15),n(10)),o=n(2),s=n(3),d=n(5),u=n(4),j=(n(16),n(9)),b=n(24),h=n(0),p=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={title:"",desc:"",product:null,agreed:!1,size:""},e.prodIdTitle=Object(b.a)(),e.prodIdDesc=Object(b.a)(),e.prodIdAgreed=Object(b.a)(),e.prodIdSize=Object(b.a)(),e.handleChangeAllInputs=function(t){var n=t.target,c=n.name,a=n.type,r=n.checked,i=n.value;e.setState(Object(j.a)({},c,"checkbox"===a?r:i))},e.handleSubmit=function(t){var n=e.state,c=n.title,a=n.desc,r=n.size,i={id:Object(b.a)(),title:c,description:a,size:r};e.setState({product:i}),e.props.addNewProduct(i),e.resetForm()},e.resetForm=function(){e.setState({title:"",desc:"",size:"",agreed:!1})},e.handleBtnCheck=function(t){t.preventDefault();var n=e.state,c=n.title,a=n.desc,r=n.size;""!==c&&""!==a&&""!==r&&e.handleSubmit()},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.handleChangeAllInputs,t=this.handleSubmit,n=this.handleBtnCheck,c=this.prodIdTitle,a=this.prodIdDesc,r=this.prodIdAgreed,i=this.prodIdSize,l=this.state,o=l.title,s=l.desc,d=l.agreed,u=l.size;return Object(h.jsxs)("form",{onSubmit:t,children:[Object(h.jsx)("label",{htmlFor:c,children:"Title"}),Object(h.jsx)("input",{id:c,type:"text",name:"title",value:o,onChange:e}),Object(h.jsx)("label",{htmlFor:a,children:"Description"}),Object(h.jsx)("input",{id:a,type:"text",name:"desc",value:s,onChange:e}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:i,children:"Choose your size"}),Object(h.jsxs)("select",{id:i,name:"size",value:u,onChange:e,children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"..."}),Object(h.jsx)("option",{value:"s",children:"S"}),Object(h.jsx)("option",{value:"m",children:"M"}),Object(h.jsx)("option",{value:"l",children:"L"}),Object(h.jsx)("option",{value:"xl",children:"XL"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:r,children:"do you agree?"}),Object(h.jsx)("input",{id:r,type:"checkbox",name:"agreed",checked:d,onChange:e}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:n,type:"submit",disabled:!d,children:"add"})]})}}]),n}(c.Component);var O=n(6);n(21);function f(e){var t=e.unitRef,n=e.isOpen,c=e.toggleState,a=e.keydownHandler,r=e.handleClick,i=e.textObj,l=i.title,o=i.content,s=i.backBtn,d=i.deleteBtn;return Object(h.jsx)(O.a,{flipId:"wrapper",children:Object(h.jsxs)("div",{ref:t,tabIndex:n?void 0:0,role:"dialog",className:"dialog animated-in",onClick:c,onKeyDown:a,children:[Object(h.jsx)("p",{className:"title content",children:l}),Object(h.jsx)("p",{className:"content",children:o}),Object(h.jsx)("button",{className:"button secondary content",onClick:r,children:s}),Object(h.jsx)("button",{className:"button primary content",onClick:r,children:d})]})})}f.defaultProps={textObj:{title:"Delete this item?",content:"This operation will permenantly delete this item and all its dependencies. This actioncannot be undone",backBtn:"Oh no, bring me back",deleteBtn:"I understand, delete it"}};var m=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isOpen:e.props.isOpen},e.ref=Object(c.createRef)(),e.toggleState=function(){e.state.isOpen||(e.setState((function(e){return{isOpen:!e.isOpen}})),e.ref.current.focus())},e.keydownHandler=function(t){"Enter"!==t.key&&"Escape"!==t.key||e.toggleState()},e.handleClick=function(){return e.setState({isOpen:!1})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.isOpen,t=this.ref,n=this.keydownHandler,c=this.toggleState,a=this.handleClick;return Object(h.jsx)(O.b,{flipKey:e,spring:"stiff",stagger:!0,children:e?Object(h.jsx)(f,{unitRef:t,isOpen:e,toggleState:c,keydownHandler:n,handleClick:a,textObj:this.props.text}):Object(h.jsx)(O.a,{flipId:"wrapper",children:Object(h.jsx)("div",{ref:t,tabIndex:0,role:"button",className:"button primary",onClick:c,onKeyDown:n,children:Object(h.jsx)(O.a,{flipId:"action",children:Object(h.jsx)("span",{className:"action",children:"Delete"})})})})})}}]),n}(c.Component),x=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={allProducts:[]},e.addNewProduct=function(t){e.setState((function(e){return{allProducts:[].concat(Object(l.a)(e.allProducts),[t])}}))},e.deleteProduct=function(t){console.log(t),e.setState((function(e){return{allProducts:e.allProducts.filter((function(e){return e.id!==t}))}}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("products"),t=JSON.parse(e);this.setState({allProducts:t}),console.log(this.state.allProducts)}},{key:"componentDidUpdate",value:function(e,t){t.allProducts!==this.state.allProducts&&localStorage.setItem("products",JSON.stringify(this.state.allProducts))}},{key:"componentWillUnmount",value:function(){console.log("unmount")}},{key:"render",value:function(){return console.log("Render method"),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"FE 35 Module 2, 3"}),Object(h.jsx)(p,{addNewProduct:this.addNewProduct}),Object(h.jsx)(m,{})]})})}}]),n}(c.Component),g=x;i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8f93ceab.chunk.js.map