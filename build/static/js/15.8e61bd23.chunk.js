(this["webpackJsonpnode-react-app"]=this["webpackJsonpnode-react-app"]||[]).push([[15],{127:function(e,t,a){"use strict";a.r(t);var l=a(61),n=a(62),c=a(60),r=a(64),i=a(63),m=a(0),s=a.n(m),o=a(14),d=a.n(o),E=a(15),u=function(){return s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-spinner fa-spin"})," Loading...")},p=a(108),h=(a(29),a(84)),b=a.n(h),f=a(83),y=a.n(f),v=a(81),g=a.n(v),k=function(e){var t=e.buttonClick,a=e.emps,l=e.loading;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"panel-body"},s.a.createElement("div",{className:"panel-body"},s.a.createElement(p.a,{variant:"outline-success",onClick:t},"Fetch Data"))),l?s.a.createElement(u,null):s.a.createElement("div",{className:"panel panel-default"},s.a.createElement("div",{className:"panel-heading"},s.a.createElement("h3",{className:"panel-title"},s.a.createElement("center",{style:{color:"Blue"}},"Show Employees"))),s.a.createElement("div",null),s.a.createElement("div",{className:"panel-body"},s.a.createElement("h4",null,s.a.createElement(E.b,{to:"/add"},s.a.createElement("span",{class:"glyphicon glyphicon-plus-sign","aria-hidden":"true"})," Add Employee")),s.a.createElement("table",{padding:"2",class:"table table-stripe"},s.a.createElement("thead",null,s.a.createElement("tr",{style:{color:"DarkOrchid"}},s.a.createElement("th",null,"Emp Name"),s.a.createElement("th",null,"Emp Email"),s.a.createElement("th",null,s.a.createElement(g.a,{style:{fontSize:22}})," "),s.a.createElement("th",null,s.a.createElement(y.a,{style:{fontSize:22}})," "),s.a.createElement("th",null,s.a.createElement(b.a,{style:{fontSize:22}}))),s.a.createElement("p",null)),s.a.createElement("tbody",null,a.map((function(e){return s.a.createElement("tr",{style:{color:"brown"},key:e._id},s.a.createElement("td",null,e.empName),s.a.createElement("td",null,e.empEmail),s.a.createElement("td",null,s.a.createElement(E.b,{to:"/viewById/"+e._id},"View More")),s.a.createElement("td",null,s.a.createElement(E.b,{to:"/edit/"+e._id},"Edit")),s.a.createElement("td",null,s.a.createElement(E.b,{to:"/delete/"+e._id},"Delete")))})))))))},N=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onClick=function(){e.setState({loading:!0}),d.a.get("http://localhost:5600/emp").then((function(t){e.setState({emps:t.data,loading:!1})}))},e.state={emps:[],loading:!1},e.onClick=e.onClick.bind(Object(c.a)(e)),e}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(k,{emps:this.state.emps,buttonClick:this.onClick,loading:this.state.loading})}}]),a}(s.a.Component);t.default=N}}]);
//# sourceMappingURL=15.8e61bd23.chunk.js.map