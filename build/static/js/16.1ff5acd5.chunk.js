(this["webpackJsonpnode-react-app"]=this["webpackJsonpnode-react-app"]||[]).push([[16],{126:function(e,t,a){"use strict";a.r(t);var l=a(3),n=a(4),m=a(6),r=a(5),c=a(0),p=a.n(c),s=a(19),o=a.n(s),i=a(20),E=function(e){var t=e.emp;return p.a.createElement("div",{className:"container"},p.a.createElement("div",{className:"panel panel-default"},p.a.createElement("div",{className:"panel-heading"},p.a.createElement("h3",{className:"panel-title"},p.a.createElement("center",{style:{color:"Blue"}},p.a.createElement("p",{style:{color:"brown"}},"Employee Name")," ",t.empName))),p.a.createElement("div",null),p.a.createElement("div",{className:"panel-body"},p.a.createElement("h4",null,p.a.createElement(i.b,{to:"/show"},p.a.createElement("span",{class:"glyphicon glyphicon-th-list","aria-hidden":"true"})," Display Employees")),p.a.createElement("table",{padding:"2",class:"table table-stripe"},p.a.createElement("thead",null,p.a.createElement("tr",{style:{color:"DarkOrchid"}},p.a.createElement("th",null,"Emp Id"),p.a.createElement("th",null,"Emp Name"),p.a.createElement("th",null,"Emp Email"),p.a.createElement("th",null,"Emp Desg"),p.a.createElement("th",null,"Emp Dept ")),p.a.createElement("p",null)),p.a.createElement("tbody",null,p.a.createElement("tr",{style:{color:"brown"},key:t._id},p.a.createElement("td",null,t.empId),p.a.createElement("td",null,t.empName),p.a.createElement("td",null,t.empEmail),p.a.createElement("td",null,t.empDesg),p.a.createElement("td",null,t.empDept),p.a.createElement("td",null,p.a.createElement(i.b,{to:"/view?name="+t.empName},"View More"))))))))},u=function(e){Object(m.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={emp:{}},n}return Object(n.a)(a,[{key:"componentWillMount",value:function(){var e=this;o.a.get("http://localhost:5600/emp/"+this.props.match.params.id).then((function(t){e.setState({emp:t.data})}))}},{key:"render",value:function(){return p.a.createElement(E,{emp:this.state.emp})}}]),a}(p.a.Component);t.default=u}}]);
//# sourceMappingURL=16.1ff5acd5.chunk.js.map