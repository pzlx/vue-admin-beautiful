/*!
 *  基于vue-admin-beautiful构建 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-7-1 15:45:29
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d542a976"],{"2e84":function(t,a,e){"use strict";var n=e("b416"),r=e.n(n);r.a},"577a":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"map-container"},[e("div",{staticClass:"container",attrs:{id:"map"}})])}],i=(e("513c"),e("e35a"),e("0d7a"),e("82ae")),s=e.n(i),o=e("00f9"),c={name:"Map",components:{},data:function(){return{}},created:function(){},mounted:function(){var t=this;this.$nextTick((function(){var a=t.$baseMap();s.a.get("https://cdn.jsdelivr.net/npm/mapv@2.0.12/examples/data/od-xierqi.txt").then((function(t){var e=[],n=[];t=t.data.split("\n");for(var r=0,i=0;i<t.length;i++){var s=t[i].split(","),c=[];s.length>r&&(r=s.length);for(var l=0;l<s.length;l+=2){var p=Number(s[l])/20037508.34*180,d=Number(s[l+1])/20037508.34*180;d=180/Math.PI*(2*Math.atan(Math.exp(d*Math.PI/180))-Math.PI/2),0!=p&&NaN!=d&&(c.push([p,d]),n.push({geometry:{type:"Point",coordinates:[p,d]},count:1,time:l}))}e.push({geometry:{type:"LineString",coordinates:c}})}var u=new o["DataSet"](e),h={strokeStyle:"rgba(53,57,255,0.5)",shadowColor:"rgba(53,57,255,0.2)",shadowBlur:3,lineWidth:3,draw:"simple"},m=(new o["MaptalksLayer"]("mapv1",u,h).addTo(a),new o["DataSet"](n)),v={fillStyle:"rgba(255, 250, 250, 0.2)",globalCompositeOperation:"lighter",size:1.5,animation:{stepsRange:{start:0,end:100},trails:3,duration:5},draw:"simple"};new o["MaptalksLayer"]("mapv2",m,v).addTo(a)}))}))},methods:{}},l=c,p=(e("2e84"),e("9ca4")),d=Object(p["a"])(l,n,r,!1,null,"5ecabe86",null);a["default"]=d.exports},b416:function(t,a,e){}}]);