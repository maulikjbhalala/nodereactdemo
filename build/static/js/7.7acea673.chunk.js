(this["webpackJsonpnode-react-app"]=this["webpackJsonpnode-react-app"]||[]).push([[7],{511:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a(4),m=a(11),r=a(6),o=a(5),p=a(0),s=a.n(p),c=a(84),i=a.n(c),u=a(85),d=function(e){var t=e.dataChange,a=e.msgOnFill,n=e.onSubmit;return s.a.createElement("div",{class:"container"},s.a.createElement("div",{class:"panel panel-default"},s.a.createElement("div",{class:"panel-heading"},s.a.createElement("h3",{class:"panel-title"},"Add New Employee")),s.a.createElement("div",{class:"panel-body"},s.a.createElement("h4",null,s.a.createElement(u.b,{to:"/show"},s.a.createElement("span",{class:"glyphicon glyphicon-th-list","aria-hidden":"true"})," Display Employees")),s.a.createElement("form",{onSubmit:n},s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"empName"},"Employee Name:"),s.a.createElement("input",{type:"text",class:"form-control",name:"empName",required:!0,onChange:t,placeholder:"Enter Employee Name"})),s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"empEmail"},"Employee Email:"),s.a.createElement("input",{type:"email",class:"form-control",name:"empEmail",required:!0,onChange:t,placeholder:"Enter Employee Email Address"})),s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"empDesg"},"Designation:"),s.a.createElement("input",{type:"text",class:"form-control",name:"empDesg",required:!0,onChange:t,placeholder:"Enter Designation"})),s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"empDept"},"Department:"),s.a.createElement("input",{type:"text",class:"form-control",name:"empDept",required:!0,onChange:t,placeholder:"Enter Employee Deprtment"})),s.a.createElement("button",{type:"submit",onClick:a,class:"btn btn-default"},"Submit")))))},h=(a(469),a(484),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).dataChange=function(t){var a=e.state.employee;a[t.target.name]=t.target.value,e.setState(a)},e.onSubmit=function(t){t.preventDefault();var a=e.state.employee,n=a.empName,l=a.empDesg,m=a.empEmail,r=a.empDept;i.a.post("http://localhost:5600/emp",{empName:n,empEmail:m,empDept:r,empDesg:l}).then((function(t){console.log(t),e.setState({employee:{},deptArray:[]})})),e.props.history.push("/show")},e.state={deptArr:[],employee:{}},e.onSubmit=e.onSubmit.bind(Object(m.a)(e)),e.dataChange=e.dataChange.bind(Object(m.a)(e)),e.msgOnFill=e.msgOnFill.bind(Object(m.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;i.a.get("http://localhost:5600/d/").then((function(t){e.setState({deptArr:t.data.depts})}))}},{key:"msgOnFill",value:function(){}},{key:"render",value:function(){return s.a.createElement(d,{msgOnFill:this.msgOnFill,dataChange:this.dataChange,onSubmit:this.onSubmit,emp:this.state.employee})}}]),a}(p.Component));t.default=h}}]);
//# sourceMappingURL=7.7acea673.chunk.js.map