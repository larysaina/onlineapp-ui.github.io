webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("yviF"),i=n.n(s),r={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){i.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=i.a.auth().currentUser.email)},methods:{logout:function(){var t=this;i.a.auth().signOut().then(function(){t.$router.go({path:t.$router.path})})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"nav-wrapper green"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[t._v("Student Manager")]),t._v(" "),n("ul",{staticClass:"right"},[t.isLoggedIn?n("li",[n("span",{staticClass:"email black-text"},[t._v(t._s(t.currentUser))])]):t._e(),t._v(" "),t.isLoggedIn?n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Dashboard")])],1):t._e(),t._v(" "),t.isLoggedIn?t._e():n("li",[n("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),t.isLoggedIn?n("li",[n("button",{staticClass:"btn red accent-3",on:{click:t.logout}},[t._v("Logout")])]):t._e()])],1)])])},staticRenderFns:[]};var l={name:"App",components:{Navbar:n("VU/8")(r,o,!1,function(t){n("qUMv")},"data-v-2b4e2642",null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]},d=n("VU/8")(l,u,!1,null,null,null).exports,c=n("/ocq"),m=(n("881v"),n("dih4"),i.a.initializeApp({apiKey:"AIzaSyB_n8CXJaveWM416MlZqJ6zU1iDe1jXJ9I",authDomain:"bishop-tanguli-online-sy-b8edc.firebaseapp.com",databaseURL:"https://bishop-tanguli-online-sy-b8edc.firebaseio.com",projectId:"bishop-tanguli-online-sy-b8edc",storageBucket:"bishop-tanguli-online-sy-b8edc.appspot.com",messagingSenderId:"141287863103",appId:"1:141287863103:web:8a2c3812027c0cc05b598a",measurementId:"G-T7DZMNDTDV"}).firestore()),v={name:"dashboard",data:function(){return{students:[]}},created:function(){var t=this;m.collection("students").orderBy("student_id").get().then(function(e){e.forEach(function(e){var n={id:e.id,student_id:e.data().student_id,name:e.data().name,form:e.data().form,role:e.data().role};t.students.push(n)})})}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"dashboard"}},[n("ul",{staticClass:"collection with-header"},[t._m(0),t._v(" "),t._l(t.students,function(e){return n("li",{key:e.id,staticClass:"collection-item"},[n("div",{staticClass:"chip"},[t._v(t._s(e.student_id))]),n("div",{staticClass:"chip cyan"},[t._v(t._s(e.form))]),t._v(" : "+t._s(e.name)+"\n\n           "),n("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-student",params:{student_id:e.student_id}}}},[n("i",{staticClass:"fa fa-eye"})])],1)})],2),t._v(" "),n("div",{staticClass:"fixed-action-btn"},[n("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[n("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"collection-header"},[e("h4",[this._v("Students")])])}]},f=n("VU/8")(v,p,!1,null,null,null).exports,_={name:"new-student",data:function(){return{student_id:null,name:null,form:null,role:null}},methods:{saveStudent:function(){var t=this;m.collection("students").add({student_id:this.student_id,name:this.name,form:this.form,role:this.role}).then(function(e){return t.$router.push("/")}).catch(function(t){return console.log(err)})}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"new-student"}},[n("h3",[t._v("New Student")]),t._v(" "),n("div",{staticClass:"row"},[n("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.saveStudent(e)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.student_id,expression:"student_id"}],attrs:{type:"text",required:""},domProps:{value:t.student_id},on:{input:function(e){e.target.composing||(t.student_id=e.target.value)}}}),t._v(" "),n("label",[t._v("Student Admission No#")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("label",[t._v("Name")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form,expression:"form"}],attrs:{type:"text",required:""},domProps:{value:t.form},on:{input:function(e){e.target.composing||(t.form=e.target.value)}}}),t._v(" "),n("label",[t._v("Form")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.role,expression:"role"}],attrs:{type:"text",required:""},domProps:{value:t.role},on:{input:function(e){e.target.composing||(t.role=e.target.value)}}}),t._v(" "),n("label",[t._v("Role")])])]),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),n("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},g=n("VU/8")(_,h,!1,null,null,null).exports,C={name:"view-student",data:function(){return{student_id:null,name:null,form:null,role:null}},beforeRouteEnter:function(t,e,n){m.collection("students").where("student_id","==",t.params.student_id).get().then(function(t){t.forEach(function(t){n(function(e){e.student_id=t.data().student_id,e.name=t.data().name,e.form=t.data().form,e.role=t.data().role})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;m.collection("students").where("student_id","==",this.$route.params.student_id).get().then(function(e){e.forEach(function(e){t.student_id=e.data().student_id,t.name=e.data().name,t.form=e.data().form,t.role=e.data().role})})},deleteStudent:function(){var t=this;confirm("Are you sure you want to delete?")&&m.collection("students").where("student_id","==",this.$route.params.student_id).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/")})})}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"view-student"}},[n("ul",{staticClass:"collection with-header"},[n("li",{staticClass:"collection-header"},[n("h4",[t._v(t._s(t.name))])]),t._v(" "),n("li",{staticClass:"collection-item"},[t._v("Student Admission Number#: "+t._s(t.student_id))]),t._v(" "),n("li",{staticClass:"collection-item"},[t._v("Form : "+t._s(t.form))]),t._v(" "),n("li",{staticClass:"collection-item"},[t._v("Role : "+t._s(t.role))])]),t._v(" "),n("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Back")]),t._v(" "),n("button",{staticClass:"btn red",on:{click:t.deleteStudent}},[t._v("Delete")]),t._v(" "),n("div",{staticClass:"fixed-action-btn"},[n("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-student",params:{student_id:t.student_id}}}},[n("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},w=n("VU/8")(C,b,!1,null,null,null).exports,x={name:"edit-student",data:function(){return{student_id:null,name:null,form:null,role:null}},beforeRouteEnter:function(t,e,n){m.collection("students").where("student_id","==",t.params.student_id).get().then(function(t){t.forEach(function(t){n(function(e){e.student_id=t.data().student_id,e.name=t.data().name,e.form=t.data().form,e.role=t.data().role})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;m.collection("students").where("student_id","==",this.$route.params.student_id).get().then(function(e){e.forEach(function(e){t.student_id=e.data().student_id,t.name=e.data().name,t.form=e.data().form,t.role=e.data().role})})},updateStudent:function(){var t=this;m.collection("students").where("student_id","==",this.$route.params.student_id).get().then(function(e){e.forEach(function(e){e.ref.update({student_id:t.student_id,name:t.name,form:t.form,role:t.role}).then(function(){t.$router.push({name:"view-student",params:{student_id:t.student_id}})})})})}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"edit-student"}},[n("h3",[t._v("Edit Student")]),t._v(" "),n("div",{staticClass:"row"},[n("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.updateStudent(e)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.student_id,expression:"student_id"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:t.student_id},on:{input:function(e){e.target.composing||(t.student_id=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form,expression:"form"}],attrs:{type:"text",required:""},domProps:{value:t.form},on:{input:function(e){e.target.composing||(t.form=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.role,expression:"role"}],attrs:{type:"text",required:""},domProps:{value:t.role},on:{input:function(e){e.target.composing||(t.role=e.target.value)}}})])]),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),n("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},q=n("VU/8")(x,y,!1,null,null,null).exports,E={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(t){var e=this;i.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){e.$router.go({path:e.$router.path})},function(t){alert(t.message)}),t.preventDefault()}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col s12 m8 offset-m2"},[n("div",{staticClass:"login card-panel green white-text center"},[n("h3",[t._v("Login")]),t._v(" "),n("form",[n("div",{staticClass:"input-field"},[n("i",{staticClass:"material-icons prefix"},[t._v("email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("label",{staticClass:"white-text",attrs:{for:"email"}},[t._v("Email")])]),t._v(" "),n("div",{staticClass:"input-field"},[n("i",{staticClass:"material-icons prefix"},[t._v("lock")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),n("label",{staticClass:"white-text",attrs:{for:"password"}},[t._v("Password")])]),t._v(" "),n("button",{staticClass:"btn btn-large grey lighten-4 black-text",on:{click:t.login}},[t._v("Login")])])])])])])])},staticRenderFns:[]},k=n("VU/8")(E,$,!1,null,null,null).exports;a.a.use(c.a);var N=new c.a({routes:[{path:"/",name:"dashboard",component:f,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:k,meta:{requiresGuest:!0}},{path:"/new",name:"new-student",component:g,meta:{requiresAuth:!0}},{path:"/edit/:student_id",name:"edit-student",component:q,meta:{requiresAuth:!0}},{path:"/:student_id",name:"view-student",component:w,meta:{requiresAuth:!0}}]});N.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?i.a.auth().currentUser?n():n({path:"/login",query:{redirect:t.fullPath}}):t.matched.some(function(t){return t.meta.requiresGuest})&&i.a.auth().currentUser?n({path:"/",query:{redirect:t.fullPath}}):n()});var U=N;a.a.config.productionTip=!1;var S=void 0;i.a.auth().onAuthStateChanged(function(t){S||(S=new a.a({el:"#app",router:U,components:{App:d},template:"<App/>"}))})},qUMv:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.baab4750f0c716326dab.js.map