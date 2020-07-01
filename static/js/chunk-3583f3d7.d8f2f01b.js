/*!
 *  基于vue-admin-beautiful构建 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-7-1 15:45:29
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3583f3d7"],{"36be":function(e,t,r){"use strict";var s=r("6dae"),o=r.n(s);o.a},"6dae":function(e,t,r){},"9ed6":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},["development"!==e.nodeEnv?r("el-alert",{attrs:{title:"beautiful boys and girls欢迎加入vue-admin-beautifulQQ群：972435319",type:"success",closable:!1}}):e._e(),r("el-row",[r("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:8}},[r("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"off","label-position":"left"}},[r("div",{staticClass:"title"},[e._v(" hello ! ")]),r("div",{staticClass:"title-tips"},[e._v("欢迎来到"+e._s(e.title)+"！")]),r("el-form-item",{staticStyle:{"margin-top":"40px"},attrs:{prop:"userName"}},[r("span",{staticClass:"svg-container svg-container-admin"},[r("vab-icon",{attrs:{icon:["fas","user"]}})],1),r("el-input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{"auto-complete":"off",placeholder:"请输入用户名",tabindex:"1",type:"text"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName","string"===typeof t?t.trim():t)},expression:"loginForm.userName"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("span",{staticClass:"svg-container svg-container-pass"},[r("vab-icon",{attrs:{icon:["fas","lock"]}})],1),r("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,"auto-complete":"off",placeholder:"请输入密码",tabindex:"2"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password","string"===typeof t?t.trim():t)},expression:"loginForm.password"}}),"password"===e.passwordType?r("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[r("vab-icon",{attrs:{icon:["fas","eye-slash"]}})],1):r("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[r("vab-icon",{attrs:{icon:["fas","eye"]}})],1)],1),r("el-button",{staticClass:"login-btn",attrs:{loading:e.loading,type:"primary"},on:{click:e.handleLogin}},[e._v("登录 ")]),r("router-link",{attrs:{to:"/register"}},[r("div",{staticStyle:{"margin-top":"20px"}},[e._v("注册")])])],1)],1)],1)],1)},o=[],n=(r("b449"),r("85ff")),a=r("61f7"),i={name:"Login",directives:{focus:{inserted:function(e){e.querySelector("input").focus()}}},data:function(){var e=function(e,t,r){""==t?r(new Error("用户名不能为空")):r()},t=function(e,t,r){Object(a["isPassword"])(t)?r():r(new Error("密码不能少于6位"))};return{nodeEnv:"production",title:this.$baseTitle,loginForm:{userName:"",password:""},loginRules:{userName:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect||"/"},immediate:!0}},mounted:function(){this.loginForm.userName="admin",this.loginForm.password="123456"},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=10;break}return e.loading=!0,t.next=4,e.$store.dispatch("user/login",e.loginForm);case 4:return s="/404"===e.redirect||"/401"===e.redirect?"/":e.redirect,t.next=7,e.$router.push(s).catch((function(){}));case 7:e.loading=!1,t.next=11;break;case 10:return t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},l=i,c=(r("36be"),r("9ca4")),u=Object(c["a"])(l,s,o,!1,null,"945e7b8e",null);t["default"]=u.exports}}]);