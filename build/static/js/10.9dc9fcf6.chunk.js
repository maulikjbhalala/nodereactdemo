(this["webpackJsonpnode-react-app"]=this["webpackJsonpnode-react-app"]||[]).push([[10],{125:function(e,t,n){"use strict";n.r(t);var r=n(61),a=n(62),o=n(64),c=n(63),l=n(0),u=n.n(l),i=n(14),s=n.n(i),f=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={emps:[],limit:5,currentPage:0,hasNext:"false"},a}return Object(a.a)(n,[{key:"componentWillMount",value:function(){this.fetchEmployees()}},{key:"fetchEmployees",value:function(){var e=this;s.a.get("http://localhost:5600/emp/page/"+this.props.match.params.limit+"/"+this.props.match.params.pageNo).then((function(t){e.setState({emps:t.data.employees,currentPage:e.props.match.params.pageNo,hasNext:t.data.hasNext})}))}},{key:"nextPage",value:function(){this.setState({currentPage:this.state.currentPage-1})}},{key:"previousPage",value:function(){this.setState({currentPage:this.state.currentPage+1})}},{key:"render",value:function(){var e=this.state.emps,t=this.state.hasNext;return u.a.createElement("div",null,"true"===t?u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"panel panel-default"},u.a.createElement("div",{className:"panel-heading"},u.a.createElement("h3",{className:"panel-title"},u.a.createElement("center",{style:{color:"Blue"}},"Show Employees"))),u.a.createElement("div",null),u.a.createElement("div",{className:"panel-body"},u.a.createElement("table",{padding:"2",class:"table table-stripe"},u.a.createElement("thead",null,u.a.createElement("tr",{style:{color:"DarkOrchid"}},u.a.createElement("th",null,"Emp Name"),u.a.createElement("th",null,"Emp Email")),u.a.createElement("p",null)),u.a.createElement("tbody",null,e.map((function(e){return u.a.createElement("tr",{style:{color:"brown"},key:e._id},u.a.createElement("td",null,e.empName),u.a.createElement("td",null,e.empEmail))})))))),u.a.createElement("div",null,u.a.createElement("button",{onClick:this.nextPage}," Previous Page "),u.a.createElement("br",null),u.a.createElement("button",{onClick:this.previousPage}," Next Page "))):u.a.createElement("center",{style:{color:"red"}},"No more data available"))}}]),n}(u.a.Component);t.default=f},60:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},61:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},62:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},63:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return u}));var c=n(60);function l(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?Object(c.a)(e):t}function u(e){return function(){var t,n=r(e);if(a()){var o=r(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return l(this,t)}}},64:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=10.9dc9fcf6.chunk.js.map