(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),s=n.n(c),r=n(7),u=n.n(r),o=(n(13),n(2)),i=n(3),l=n(5),b=n(4),h=function(t){var e=t.addOne;return Object(a.jsx)("div",{className:"btns",children:Object(a.jsx)("button",{className:"btn1",onClick:e,children:"Count Up"})})},j=function(t){var e=t.takeAwayOne;return Object(a.jsx)("div",{className:"btns",children:Object(a.jsx)("button",{className:"btn2",onClick:e,children:"Count Down"})})},d=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={count:""},t.handleChange=function(e){t.setState({count:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.userInput(t.state.count),t.setState({count:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"form-container",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{className:"input",onChange:this.handleChange,value:this.state.count,type:"text",placeholder:"Add a number here"}),Object(a.jsx)("button",{className:"btn3",children:"ADD"})]})})}}]),n}(c.Component),O=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={count:0},t.addOne=function(){t.setState({count:t.state.count+1})},t.takeAwayOne=function(){t.setState({count:t.state.count-1})},t.userInput=function(e){var n=parseInt(e);t.setState({count:t.state.count+n})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{children:this.state.count}),Object(a.jsx)(h,{addOne:this.addOne}),Object(a.jsx)(j,{takeAwayOne:this.takeAwayOne}),Object(a.jsx)(d,{userInput:this.userInput})]})}}]),n}(c.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),s(t),r(t)}))};u.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.208be272.chunk.js.map