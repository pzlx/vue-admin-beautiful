/*!
 *  基于vue-admin-beautiful构建 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-7-1 15:45:29
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2108d185"],{4463:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"roleManagement-container"},[n("el-divider",{attrs:{"content-position":"left"}},[e._v(" 演示环境仅做基础功能展示，若想实现不同角色的真实菜单配置，需将settings.js路由加载模式改为all模式，由后端全面接管路由渲染与权限控制 ")]),n("vab-query-form",[n("vab-query-form-left-panel",{attrs:{span:12}},[n("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.handleEdit}},[e._v("添加")]),n("el-button",{attrs:{icon:"el-icon-delete",type:"danger"},on:{click:e.handleDelete}},[e._v("批量删除 ")])],1),n("vab-query-form-right-panel",{attrs:{span:12}},[n("el-form",{attrs:{inline:!0,model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"请输入查询条件",clearable:""},model:{value:e.queryForm.permission,callback:function(t){e.$set(e.queryForm,"permission","string"===typeof t?t.trim():t)},expression:"queryForm.permission"}})],1),n("el-form-item",[n("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.queryData}},[e._v("查询 ")])],1)],1)],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText},on:{"selection-change":e.setSelectRows}},[n("el-table-column",{attrs:{type:"selection"}}),n("el-table-column",{attrs:{prop:"id",label:"id"}}),n("el-table-column",{attrs:{prop:"permission",label:"权限码"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.handleEdit(t.row)}}},[e._v("编辑 ")]),n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("删除 ")])]}}])})],1),n("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageNo,"page-size":e.queryForm.pageSize,layout:e.layout,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),n("edit",{ref:"edit",on:{fetchData:e.fetchData}})],1)},a=[],i=(n("9302"),n("2eeb"),n("b449"),n("85ff")),o=n("e157"),s=n("e3d4"),l={name:"RoleManagement",components:{Edit:s["default"]},data:function(){return{list:null,listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,selectRows:"",elementLoadingText:"正在加载...",queryForm:{pageNo:1,pageSize:10,permission:""}}},created:function(){this.fetchData()},methods:{setSelectRows:function(e){this.selectRows=e},handleEdit:function(e){e.id?this.$refs["edit"].showEdit(e):this.$refs["edit"].showEdit()},handleDelete:function(e){var t=this;if(e.id)this.$baseConfirm("你确定要删除当前项吗",null,Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(o["doDelete"])({ids:e.id});case 2:r=n.sent,a=r.msg,t.$baseMessage(a,"success"),t.fetchData();case 6:case"end":return n.stop()}}),n)}))));else{if(!(this.selectRows.length>0))return this.$baseMessage("未选中任何行","error"),!1;this.selectRows.map((function(e){return e.id})).join();this.$baseConfirm("你确定要删除选中项吗",null,Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(o["doDelete"])({ids:e.id});case 2:r=n.sent,a=r.msg,t.$baseMessage(a,"success"),t.fetchData();case 6:case"end":return n.stop()}}),n)}))))}},handleSizeChange:function(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange:function(e){this.queryForm.pageNo=e,this.fetchData()},queryData:function(){this.queryForm.pageNo=1,this.fetchData()},fetchData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.listLoading=!0,t.next=3,Object(o["getList"])(e.queryForm);case 3:n=t.sent,r=n.data,a=n.totalCount,e.list=r,e.total=a,setTimeout((function(){e.listLoading=!1}),300);case 9:case"end":return t.stop()}}),t)})))()}}},c=l,u=n("9ca4"),d=Object(u["a"])(c,r,a,!1,null,null,null);t["default"]=d.exports},e157:function(e,t,n){"use strict";n.r(t),n.d(t,"getList",(function(){return a})),n.d(t,"doEdit",(function(){return i})),n.d(t,"doDelete",(function(){return o}));var r=n("b775");function a(e){return Object(r["default"])({url:"/roleManagement/getList",method:"post",data:e})}function i(e){return Object(r["default"])({url:"/roleManagement/doEdit",method:"post",data:e})}function o(e){return Object(r["default"])({url:"/roleManagement/doDelete",method:"post",data:e})}},e3d4:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"权限码",prop:"permission"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.permission,callback:function(t){e.$set(e.form,"permission",t)},expression:"form.permission"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.close}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)},a=[],i=(n("b449"),n("85ff")),o=n("e157"),s={name:"RoleManagementEdit",data:function(){return{form:{id:""},rules:{permission:[{required:!0,trigger:"blur",message:"请输入权限码"}]},title:"",dialogFormVisible:!1}},created:function(){},methods:{showEdit:function(e){e?(this.title="编辑",this.form=Object.assign({},e)):this.title="添加",this.dialogFormVisible=!0},close:function(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,this.dialogFormVisible=!1},save:function(){var e=this;this.$refs["form"].validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=10;break}return t.next=3,Object(o["doEdit"])(e.form);case 3:r=t.sent,a=r.msg,e.$baseMessage(a,"success"),e.$emit("fetchData"),e.close(),t.next=11;break;case 10:return t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},l=s,c=n("9ca4"),u=Object(c["a"])(l,r,a,!1,null,null,null);t["default"]=u.exports}}]);