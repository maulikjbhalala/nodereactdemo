(this["webpackJsonpnode-react-app"]=this["webpackJsonpnode-react-app"]||[]).push([[6],{102:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var r=n(61),a=n(62),c=n(60),o=n(64),u=n(63),l=n(0),i=n.n(l),s=(n(102),n(14)),f=n.n(s),p=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={isError:!1,errMsg:""},a}return Object(a.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e.toString(),t.componentStack)}},{key:"render",value:function(){return this.state.errMsg?i.a.createElement("div",null,i.a.createElement("h1",null,"something wrong")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{errMsg:e.toString()}}}]),n}(i.a.Component),m=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(a.a)(n,[{key:"render",value:function(){if("myData"===this.props.data)throw new Error("data is invalid");return i.a.createElement("div",null,"data value is ",this.props.data)}}]),n}(l.Component),d=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={emps:[],currentPage:1,dataPerPage:5},e.handleClick=e.handleClick.bind(Object(c.a)(e)),e}return Object(a.a)(n,[{key:"handleClick",value:function(e){this.setState({currentPage:Number(e.target.id)})}},{key:"componentWillMount",value:function(){var e=this;f.a.get("http://localhost:5600/emp/").then((function(t){e.setState({emps:t.data})}))}},{key:"render",value:function(){for(var e=this,t=this.state,n=t.emps,r=t.currentPage,a=t.dataPerPage,c=r*a,o=c-a,u=n.slice(o,c).map((function(e,t){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"panel panel-default"},i.a.createElement("div",null),i.a.createElement("div",{className:"panel-body"},i.a.createElement("table",{padding:"2",class:"table table-stripe"},i.a.createElement("thead",null,i.a.createElement("tr",{style:{color:"DarkOrchid"}},i.a.createElement("th",null,"Emp Name"),i.a.createElement("th",null,"Emp Email")),i.a.createElement("p",null)),i.a.createElement("tbody",null,i.a.createElement("tr",{style:{color:"brown"},key:e._id},i.a.createElement("td",null,e.empName),i.a.createElement("td",null,e.empEmail)))))))})),l=[],s=1;s<=Math.ceil(n.length/a);s++)l.push(s);var f=l.map((function(t){return i.a.createElement("button",{key:t,id:t,onClick:e.handleClick},t,i.a.createElement("br",null))}));return i.a.createElement("div",null,i.a.createElement("ul",null,u),i.a.createElement("ul",{id:"page-numbers"},f),i.a.createElement(p,null,i.a.createElement(m,{data:"mydatas"})),i.a.createElement(p,null,i.a.createElement(m,{data:"myData"})))}}]),n}(i.a.Component);t.default=d},60:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},61:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},62:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},63:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return l}));var o=n(60);function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?Object(o.a)(e):t}function l(e){return function(){var t,n=r(e);if(a()){var c=r(this).constructor;t=Reflect.construct(n,arguments,c)}else t=n.apply(this,arguments);return u(this,t)}}},64:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=6.cba83b20.chunk.js.map