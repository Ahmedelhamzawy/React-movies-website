(this.webpackJsonpsession2=this.webpackJsonpsession2||[]).push([[0],{40:function(e,t,a){},41:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(32),c=a.n(r),i=(a(40),a(4)),o=a(5),l=a(7),j=a(6),d=(a(41),a(10)),m=a(0),b=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("nav",{className:"navbar mb-5 navbar-expand-lg navbar-dark",children:[Object(m.jsx)(d.b,{className:"navbar-brand",to:"#",children:"Movies & Chill"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(m.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsxs)(d.b,{className:"nav-link",to:"/home",children:["Home ",Object(m.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(d.b,{className:"nav-link",to:"/movies",children:"Movies"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(d.b,{className:"nav-link",to:"/Tv",children:"Tv"})})]})})]})})}}]),a}(s.Component),h=a(8),u=a.n(h),p=a(34),O=a(14),v=a(15),x=a.n(v),g=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={Movies:[],tv:[]},e.getTrending=function(){var t=Object(O.a)(u.a.mark((function t(a){var s,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://api.themoviedb.org/3/trending/".concat(a,"/day?api_key=52bbcddeda849047525b51d6f8a12361"));case 2:s=t.sent,n=s.data,console.log(n.results),e.setState(Object(p.a)({},a,n.results));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.componentDidMount=function(){e.getTrending("Movies"),e.getTrending("tv")},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-4",children:[Object(m.jsx)("div",{className:"brdr w-25"}),Object(m.jsxs)("h1",{className:"mb-3",children:["Trending ",Object(m.jsx)("br",{})," movies ",Object(m.jsx)("br",{})," to watch now"]}),Object(m.jsx)("p",{className:"secondFontColor",children:"Most Watched Movies By Day"}),Object(m.jsx)("div",{className:"brdr w-25"})]}),this.state.Movies.slice(0,10).map((function(e,t){return Object(m.jsx)("div",{className:"col-md-2 my-3",children:Object(m.jsxs)("div",{className:"item mx-2",children:[Object(m.jsx)("img",{className:"w-100",src:"https://image.tmdb.org/t/p/original"+e.poster_path,alt:""}),Object(m.jsx)("h3",{children:e.title}),Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("span",{className:"vote",children:e.vote_average})]})},t)}))]})}),Object(m.jsx)("div",{className:"container mt-5",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-4",children:[Object(m.jsx)("div",{className:"brdr w-25"}),Object(m.jsxs)("h1",{className:"mb-3",children:["Trending ",Object(m.jsx)("br",{})," tv ",Object(m.jsx)("br",{})," to watch now"]}),Object(m.jsx)("p",{className:"secondFontColor",children:"Most Watched tv By Day"}),Object(m.jsx)("div",{className:"brdr w-25"})]}),this.state.tv.slice(0,10).map((function(e,t){return Object(m.jsx)("div",{className:"col-md-2 my-3",children:Object(m.jsxs)("div",{className:"item mx-2",children:[Object(m.jsx)("img",{className:"w-100",src:"https://image.tmdb.org/t/p/original"+e.poster_path,alt:""}),Object(m.jsxs)("h3",{children:[e.name," "]}),Object(m.jsx)("span",{className:"vote",children:e.vote_average})]})},t)}))]})})]})}}]),a}(s.Component),f=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={tv:[]},e.getTrending=Object(O.a)(u.a.mark((function t(){var a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361");case 2:a=t.sent,s=a.data,console.log(s.results),e.setState({tv:s.results});case 6:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.getTrending()},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container mt-5",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-4",children:[Object(m.jsx)("div",{className:"brdr w-25"}),Object(m.jsxs)("h1",{className:"mb-3",children:["Trending ",Object(m.jsx)("br",{})," tv ",Object(m.jsx)("br",{})," to watch now"]}),Object(m.jsx)("p",{className:"secondFontColor",children:"Most Watched tv By Day"}),Object(m.jsx)("div",{className:"brdr w-25"})]}),this.state.tv.map((function(e,t){return Object(m.jsx)("div",{className:"col-md-2 my-3",children:Object(m.jsxs)("div",{className:"item mx-2",children:[Object(m.jsx)("img",{className:"w-100",src:"https://image.tmdb.org/t/p/original"+e.poster_path,alt:""}),Object(m.jsxs)("h3",{children:[e.name," "]}),Object(m.jsx)("span",{className:"vote",children:e.vote_average})]})},t)}))]})})})}}]),a}(s.Component),N=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={Movies:[]},e.getTrending=Object(O.a)(u.a.mark((function t(){var a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=52bbcddeda849047525b51d6f8a12361");case 2:a=t.sent,s=a.data,console.log(s.results),e.setState({Movies:s.results});case 6:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.getTrending()},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-4",children:[Object(m.jsx)("div",{className:"brdr w-25"}),Object(m.jsxs)("h1",{className:"mb-3",children:["Trending ",Object(m.jsx)("br",{})," movies ",Object(m.jsx)("br",{})," to watch now"]}),Object(m.jsx)("p",{className:"secondFontColor",children:"Most Watched Movies By Day"}),Object(m.jsx)("div",{className:"brdr w-25"})]}),this.state.Movies.map((function(e,t){return Object(m.jsx)("div",{className:"col-md-2 my-3",children:Object(m.jsxs)("div",{className:"item mx-2",children:[Object(m.jsx)("img",{className:"w-100",src:"https://image.tmdb.org/t/p/original"+e.poster_path,alt:""}),Object(m.jsx)("h3",{children:e.title}),Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("span",{className:"vote",children:e.vote_average})]})},t)}))]})})})}}]),a}(s.Component),y=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).user={first_name:"",last_name:"",email:"",password:""},e.state={errorMessage:"",inputsRequired:""},e.getFormData=function(t){e.user[t.target.name]=t.target.value,console.log(e.user)},e.sendData=function(){var t=Object(O.a)(u.a.mark((function t(a){var s,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,x.a.post("https://route-egypt-api.herokuapp.com/signup",e.user);case 3:s=t.sent,"success"===(n=s.data).message?e.props.history.replace("/Login"):""==e.user.email||""==e.user.first_name||""==e.user.password||""==e.user.last_name?e.setState({inputsRequired:"all inputs are required"}):"citizen validation failed: email: email already registered"==n.message&&e.setState({inputsRequired:"",errorMessage:"email already registered"}),console.log(n.message);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"w-75 mx-auto my-5",children:[Object(m.jsxs)("form",{className:"mb-5",onSubmit:this.sendData,children:[Object(m.jsx)("input",{onChange:this.getFormData,className:"form-control mt-3",type:"text",placeholder:"First name",name:"first_name",id:""}),Object(m.jsx)("input",{onChange:this.getFormData,className:"form-control mt-3",type:"text",placeholder:"Last name",name:"last_name",id:""}),Object(m.jsx)("input",{onChange:this.getFormData,className:"form-control mt-3",type:"email",placeholder:"email",name:"email",id:""}),Object(m.jsx)("input",{onChange:this.getFormData,className:"form-control mt-3",type:"password",placeholder:"password",name:"password",id:""}),Object(m.jsx)("div",{className:"text-danger text-center mt-3",children:this.state.errorMessage}),Object(m.jsx)("div",{className:"text-danger text-center mt-3",children:this.state.inputsRequired}),Object(m.jsx)("button",{className:"btn btn-info mt-3 float-right",children:"Register"})]}),Object(m.jsx)("p",{className:"d-inline mr-3",children:" have an account"}),Object(m.jsx)(d.b,{to:"/login",children:Object(m.jsx)("button",{className:"btn btn-primary",children:"login"})})]})})}}]),a}(s.Component),w=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).user={email:"",password:""},e.state={errorMessage:"",inputsRequired:""},e.getFormData=function(t){e.user[t.target.name]=t.target.value,console.log(e.user)},e.sendData=function(){var t=Object(O.a)(u.a.mark((function t(a){var s,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,x.a.post("https://route-egypt-api.herokuapp.com/signin",e.user);case 3:s=t.sent,n=s.data,""===e.user.email&&""===e.user.password?e.setState({inputsRequired:"email & password are required",errorMessage:""}):"success"===n.message?(e.props.history.replace("/home"),localStorage.setItem("token",n.token)):e.setState({errorMessage:n.message,inputsRequired:""}),console.log(n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"w-75 mx-auto my-5",children:[Object(m.jsxs)("form",{className:"mb-5",onSubmit:this.sendData,children:[Object(m.jsx)("input",{onChange:this.getFormData,className:"form-control mt-3",type:"email",placeholder:"email",name:"email",id:""}),Object(m.jsx)("input",{onChange:this.getFormData,className:"form-control mt-3",type:"password",placeholder:"password",name:"password",id:""}),Object(m.jsx)("div",{className:"text-danger text-center mt-3",children:this.state.errorMessage}),Object(m.jsx)("div",{className:"text-danger text-center mt-3",children:this.state.inputsRequired}),Object(m.jsx)("button",{className:"btn btn-info mt-3 float-right",children:"Login"})]}),Object(m.jsx)("p",{className:"d-inline mr-3",children:"don't have an account"}),Object(m.jsx)(d.b,{to:"/register",children:Object(m.jsx)("button",{className:"btn btn-primary",children:"register"})})]})})}}]),a}(s.Component),k=a(2),C=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"d-flex vh-100 justify-content-center align-items-center text-danger",children:Object(m.jsx)("h1",{children:"Page Not Found"})})})}}]),a}(s.Component),F=a(35),M=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){console.log(this.props);var e=localStorage.getItem("token");try{var t=Object(F.a)(e);console.log(t)}catch(a){return localStorage.clear(),Object(m.jsx)(k.a,{to:"/login"})}return e?"/home"==this.props.path||"/movies"==this.props.path||"/tv"==this.props.path?Object(m.jsx)(k.b,{path:this.props.path,component:this.props.component}):void 0:Object(m.jsx)(k.a,{to:"/login"})}}]),a}(s.Component),D=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b,{}),Object(m.jsxs)(k.d,{children:[Object(m.jsx)(M,{path:"/home",component:g}),Object(m.jsx)(M,{path:"/movies",component:N}),Object(m.jsx)(M,{path:"/tv",component:f}),Object(m.jsx)(k.b,{path:"/Register",component:y}),Object(m.jsx)(k.b,{path:"/Login",component:w}),Object(m.jsx)(k.a,{exact:!0,from:"/",to:"/Register"}),Object(m.jsx)(k.b,{path:"*",component:C})]})]})}}]),a}(s.Component),S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,73)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};a(66),a(67),a(68);c.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(d.a,{children:Object(m.jsx)(D,{})})}),document.getElementById("root")),S()}},[[71,1,2]]]);
//# sourceMappingURL=main.ff4684c8.chunk.js.map