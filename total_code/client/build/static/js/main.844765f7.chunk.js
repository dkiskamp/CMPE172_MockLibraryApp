(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},58:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(30),c=n.n(r),o=(n(36),n(37),n(4)),i=n(5),l=n(7),h=n(6),d=(n(38),n(14)),u=n(12),j=n.n(u),b=n(0),m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){console.log("abc"),e.preventDefault();var t=a.state,n={username:t.username,password:t.password};console.log(n),j.a.post("/login",n).then((function(e){window.location.replace("/library")})).catch((function(e){console.error(e)}))},a.state={username:"",password:""},a}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"base-container",children:[Object(b.jsx)("div",{className:"header",children:"Login"}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)("div",{className:"form",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"username",children:"Username"}),Object(b.jsx)("input",{type:"text",name:"username",placeholder:"username",onChange:this.handleInputChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",placeholder:"password",onChange:this.handleInputChange})]})]})}),Object(b.jsx)("div",{className:"footer",children:Object(b.jsx)("button",{type:"submit",className:"btn",children:"Login"})})]})]})}}]),n}(s.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){console.log("register"),e.preventDefault();var t=a.state,n={firstname:t.firstname,lastname:t.lastname,username:t.username,email:t.email,password:t.password};console.log(n),j.a.post("/register",n).then((function(){return console.log("User Created")})).catch((function(e){console.error(e)}))},a.state={firstname:"",lastname:"",username:"",email:"",password:""},a}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"base-container",ref:this.props.containerRef,children:[Object(b.jsx)("div",{className:"header",children:"Register"}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("form",{onSubmit:this.handleSubmit,children:Object(b.jsxs)("div",{className:"form",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"firstname",children:"FirstName"}),Object(b.jsx)("input",{type:"text",name:"firstname",placeholder:"firstname",onChange:this.handleInputChange}),Object(b.jsx)("label",{htmlFor:"lastanme",children:"LastName"}),Object(b.jsx)("input",{type:"text",name:"lastname",placeholder:"lastname",onChange:this.handleInputChange}),Object(b.jsx)("label",{htmlFor:"username",children:"Username"}),Object(b.jsx)("input",{type:"text",name:"username",placeholder:"username",onChange:this.handleInputChange}),Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{type:"text",name:"email",placeholder:"email",onChange:this.handleInputChange}),Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",placeholder:"password",onChange:this.handleInputChange})]}),Object(b.jsx)("button",{type:"submit",className:"btn",children:"Register"})]})})})]})}}]),n}(s.a.Component),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={isLogginActive:!0},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.rightSide.classList.add("right")}},{key:"changeState",value:function(){this.state.isLogginActive?(this.rightSide.classList.remove("right"),this.rightSide.classList.add("left")):(this.rightSide.classList.remove("left"),this.rightSide.classList.add("right")),this.setState((function(e){return{isLogginActive:!e.isLogginActive}}))}},{key:"render",value:function(){var e=this,t=this.state.isLogginActive,n=t?"Register":"Login",a=t?"login":"register";return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"login",children:[Object(b.jsxs)("div",{className:"container",ref:function(t){return e.container=t},children:[t&&Object(b.jsx)(m,{containerRef:function(t){return e.current=t}}),!t&&Object(b.jsx)(p,{containerRef:function(t){return e.current=t}})]}),Object(b.jsx)(O,{current:n,currentActive:a,containerRef:function(t){return e.rightSide=t},onClick:this.changeState.bind(this)})]})})}}]),n}(s.a.Component),O=function(e){return Object(b.jsx)("div",{className:"right-side",ref:e.containerRef,onClick:e.onClick,children:Object(b.jsx)("div",{className:"inner-container",children:Object(b.jsx)("div",{className:"text",children:e.current})})})},g=f,x=(n(58),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){console.log("send"),a.setState({bookISBN:e}),j.a.post("/borrow",{bookISBN:e}).then((function(){return console.log("sent data")})).catch((function(e){console.error(e)}))},a.state={firstname:"",username:"",amountowed:"0",bookISBN:"",books:[]},a.getUser(),a.getBook(),a}return Object(i.a)(n,[{key:"getUser",value:function(){var e=this;j.a.get("/user").then((function(t){e.setState({firstname:t.data.firstname,username:t.data.username,amountowed:t.data.amountowed})})).catch((function(e){console.log(e)}))}},{key:"getBook",value:function(){var e=this;console.log("fetching now"),j.a.get("/library").then((function(t){e.setState({books:t.data.books,bookName:t.data.books[0].bookName,bookISBN:t.data.books[0].bookISBN,bookAuthor:t.data.books[0].bookAuthor}),console.log(e.state.books)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t=this;return Object(b.jsxs)("div",{className:"base",children:[Object(b.jsxs)("div",{className:"top-container",children:[Object(b.jsxs)("div",{className:"left-info",children:[Object(b.jsx)("div",{className:"form",children:Object(b.jsx)("p",{children:this.state.firstname})}),Object(b.jsx)("div",{className:"form",children:Object(b.jsx)("p",{children:this.state.username})})]}),Object(b.jsxs)("div",{className:"right-info",children:[Object(b.jsx)("button",{name:"books",id:"books",className:"btn",children:"All Borrowed Books"}),Object(b.jsx)("div",{className:"form",children:Object(b.jsxs)("p",{children:["Amount Owed: ",this.state.amountowed]})})]})]}),Object(b.jsxs)("div",{className:"bottom-container",children:[Object(b.jsx)("div",{className:"bottom-nav",children:Object(b.jsx)("h2",{children:"List of Books"})}),null===(e=this.state.books)||void 0===e?void 0:e.map((function(e,n){return Object(b.jsxs)("div",{className:"book-data",children:[Object(b.jsxs)("div",{className:"bookName",children:["Name: \u2002 ",e.bookName]}),Object(b.jsxs)("div",{name:"bookisbn",className:"bookisbn",children:["ISBN: \u2002 ",e.bookISBN]}),Object(b.jsxs)("div",{className:"author",children:["Author: \u2002 ",e.bookAuthor]}),Object(b.jsx)("button",{onClick:function(){return t.handleSubmit(e.bookISBN)},className:"btn",name:"borrow",children:" Borrow "})]})}))]})]})}}]),n}(s.a.Component)),v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsx)("h1",{children:"book"})}}]),n}(s.a.Component),N=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){console.log("abc"),e.preventDefault();var t=a.state,n={firstname:t.firstname,lastname:t.lastname,username:t.username,email:t.email,password:t.password};console.log(n),j.a.post("http://localhost:3001/register",n).then((function(){return console.log("User Created")})).catch((function(e){console.error(e)}))},a.state={firstname:"",lastname:"",username:"",email:"",password:""},a}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"base-container",ref:this.props.containerRef,children:[Object(b.jsx)("div",{className:"header",children:"Register"}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("form",{onSubmit:this.handleSubmit,children:Object(b.jsxs)("div",{className:"form",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"firstname",children:"FirstName"}),Object(b.jsx)("input",{type:"text",name:"firstname",placeholder:"firstname",onChange:this.handleInputChange}),Object(b.jsx)("label",{htmlFor:"lastanme",children:"LastName"}),Object(b.jsx)("input",{type:"text",name:"lastname",placeholder:"lastname",onChange:this.handleInputChange}),Object(b.jsx)("label",{htmlFor:"username",children:"Username"}),Object(b.jsx)("input",{type:"text",name:"username",placeholder:"username",onChange:this.handleInputChange}),Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{type:"text",name:"email",placeholder:"email",onChange:this.handleInputChange}),Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",placeholder:"password",onChange:this.handleInputChange})]}),Object(b.jsx)("button",{type:"submit",className:"btn",children:"Register"})]})})})]})}}]),n}(a.Component),k=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={flower:{}},a.getFlower(),a}return Object(i.a)(n,[{key:"getFlower",value:function(){var e=this;console.log("fetching flower"),fetch("http:localhost:4001/Flower").then((function(e){return e.json()})).then((function(t){e.setState({flower:t})}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"flower",children:[Object(b.jsx)("h1",{children:this.state.flower.name}),Object(b.jsx)("p",{children:this.state.flower.colour})]})}}]),n}(a.Component),w=n(2);var C=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(w.a,{exact:!0,path:"/",component:g}),Object(b.jsx)(w.a,{exact:!0,path:"/Library",component:x}),Object(b.jsx)(w.a,{exact:!0,path:"/Book",component:v}),Object(b.jsx)(w.a,{exact:!0,path:"/Create",component:N}),Object(b.jsx)(w.a,{exact:!0,path:"/Flower",component:k})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))},y=n(18);c.a.render(Object(b.jsx)(y.a,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),S()}},[[64,1,2]]]);
//# sourceMappingURL=main.844765f7.chunk.js.map