webpackJsonp([2],{491:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(519),o=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);var a=n(537);var r=function(e){n(535)},s=n(196)(o.a,a.a,!1,r,null,null);t.default=s.exports},503:function(e,t,n){"use strict";t.__esModule=!0;var i,o=n(505),l=(i=o)&&i.__esModule?i:{default:i};t.default=l.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}},504:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(503)),o=n(131),l=a(n(512));function a(e){return e&&e.__esModule?e:{default:e}}t.default={props:{hastable:{type:Boolean,default:!1}},data:function(){return{menuIcon:["el-icon-document","el-icon-menu","el-icon-view","el-icon-setting"]}},computed:(0,i.default)({},(0,o.mapGetters)({menuStruct:"getMenus",loginUser:"getUserInfo",rightMenus:"getRightMenuList"})),filters:{formatUserName:function(e){return"1"==e||"2"==e?this.loginUser.nickName:this.loginUser.name}},asyncData:function(e){console.log("asyncData...")},methods:(0,i.default)({},(0,o.mapActions)(["fetchMenus","fetchUserInfo","fetchRightMenuList"]),{goto:function(e){this.$router.push(e)},handleCommand:function(e){"exit"==e&&this.exit()},exit:function(){l.default.delCookie("token"),setTimeout(function(){window.location.replace("/login")},100)}}),mounted:function(){var e=document.documentElement.clientHeight,t=parseFloat(window.getComputedStyle(document.getElementsByClassName("el-header")[0]).height),n=parseFloat(window.getComputedStyle(document.getElementsByClassName("el-footer")[0]).height),i=document.getElementsByClassName("el-main")[0];-1==window.location.href.indexOf("article/save")&&(i.style.height=e-t-n+"px"),this.fetchMenus(-1);var o=this,a=l.default.getCookie("token");this.fetchUserInfo({uuid:a,fn:function(e){o.fetchRightMenuList({roleId:e.roleId})}})}}},505:function(e,t,n){e.exports={default:n(506),__esModule:!0}},506:function(e,t,n){n(507),e.exports=n(19).Object.assign},507:function(e,t,n){var i=n(44);i(i.S+i.F,"Object",{assign:n(508)})},508:function(e,t,n){"use strict";var i=n(71),o=n(133),l=n(93),a=n(132),r=n(197),s=Object.assign;e.exports=!s||n(65)(function(){var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach(function(e){t[e]=e}),7!=s({},e)[n]||Object.keys(s({},t)).join("")!=i})?function(e,t){for(var n=a(e),s=arguments.length,c=1,u=o.f,d=l.f;s>c;)for(var f,p=r(arguments[c++]),m=u?i(p).concat(u(p)):i(p),h=m.length,g=0;h>g;)d.call(p,f=m[g++])&&(n[f]=p[f]);return n}:s},509:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(504),o=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);var a=n(513);var r=function(e){n(510)},s=n(196)(o.a,a.a,!1,r,null,null);t.default=s.exports},510:function(e,t,n){var i=n(511);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(484)("e871a2f8",i,!0,{})},511:function(e,t,n){(e.exports=n(483)(!1)).push([e.i,".el-footer,.el-header{color:#333;text-align:center}.el-header{height:80px!important;background-color:#409eff;line-height:80px!important}.el-header img{height:66px;width:66px;position:relative;top:5px;border-radius:4px}.el-header h3{color:#fff;font-size:20px;position:relative;left:10px;display:inline-block}.el-header .user-photo{height:50px;width:50px;border-radius:50%;margin-top:10px}.el-header .user{position:relative;top:-15px;left:5px;font-size:14px;color:#fff}.el-aside{background-color:#f7f7f7;color:#333;text-align:center;height:100%}.el-menu--collapse{width:auto}.el-menu{border-right-width:0}.el-menu-vertical-demo{background-color:#fff}.el-main{min-height:590px;background-color:#f7f7f7}.el-dropdown-menu{top:70px!important}.el-dropdown-menu__item span{display:inline-block;margin-left:10px}.el-container{margin-bottom:40px;width:100%;background-color:#fff!important}#app{height:100%!important;background:#fff}",""])},512:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={getCookie:function(e){if(document.cookie.length>0){var t=document.cookie.indexOf(e+"=");if(-1!=t){t=t+e.length+1;var n=document.cookie.indexOf(";",t);return-1==n&&(n=document.cookie.length),unescape(document.cookie.substring(t,n))}}return""},setCookie:function(e,t,n){var i=new Date;i.setDate(i.getDate()+n),document.cookie=e+"="+escape(t)+(null==n?"":";expires="+i.toGMTString())},checkCookie:function(e){var t=getCookie(e);null!=t&&""!=t?alert("Welcome again "+t+"!"):null!=(t=prompt("Please enter your name:",""))&&""!=t&&setCookie("username",t,365)},delCookie:function(e){var t=new Date;t.setTime(t.getTime()-1);var n=this.getCookie(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString())},clearCookies:function(){for(var e=document.cookie.split(";"),t=0;t<e.length;t++){var n=new Date;n.setTime(n.getTime()-1);var i=e[t],o=i.indexOf("="),l=o>-1?i.substr(0,o):i;location.host.substr(location.host.indexOf("."));document.cookie=l+"=;expires="+n.toGMTString()}}};t.default=i},513:function(e,t,n){"use strict";var i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-container",[n("el-header",[n("el-row",[n("el-col",{attrs:{span:4}},[n("h3",[e._v("MyBlog")])]),n("el-col",{staticStyle:{"white-space":"nowrap"},attrs:{span:17}},[e._v(" ")]),n("el-col",{staticStyle:{"white-space":"nowrap"},attrs:{span:3}},[n("el-dropdown",{on:{command:e.handleCommand}},[n("img",{staticClass:"user-photo",attrs:{src:e.loginUser.pic}}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("el-badge",{staticClass:"item",attrs:{"is-dot":""}},[n("i",{staticClass:"el-icon-edit"}),n("span",[e._v("我的资料")])])],1),n("el-dropdown-item",[n("i",{staticClass:"el-icon-share"}),n("span",[e._v("我的关注")])]),n("el-dropdown-item",{attrs:{command:"exit"}},[n("i",{staticClass:"el-icon-delete"}),n("span",[e._v("退出")])])],1)],1),n("span",{staticClass:"user"},[e._v(e._s(1==e.loginUser.loginType||2==e.loginUser.loginType?e.loginUser.nickName:e.loginUser.name))])],1)],1)],1),n("el-container",[n("el-aside",{attrs:{width:e.hastable?"120px":"68px",height:"100%"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{collapse:!0}},e._l(e.menuStruct,function(t,i){return e.rightMenus.indexOf(t.uuid)>-1?n("el-submenu",{key:"fMenu"+i,attrs:{index:i+1+""}},[n("template",{slot:"title"},[n("i",{class:e.menuIcon[i]}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])]),e._l(t.children,function(t,o){return e.rightMenus.indexOf(t.uuid)>-1?n("el-submenu",{key:"sMenu"+o,attrs:{index:i+1+"-"+(o+1)}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))]),e._l(t.children,function(t,l){return e.rightMenus.indexOf(t.uuid)>-1?n("el-menu-item",{key:"tMenu"+l,attrs:{index:i+1+"-"+(o+1)+"-"+(l+1)},on:{click:function(n){e.goto(t.url)}}},[e._v(e._s(t.name))]):e._e()})],2):e._e()})],2):e._e()}))],1),n("el-main",{},[e._t("default")],2)],1),n("el-footer",{attrs:{height:"40"}},[e._v("\n            博客之家版权所有\n        ")])],1)],1)},staticRenderFns:[]};t.a=i},519:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(503)),o=a(n(509)),l=n(131);function a(e){return e&&e.__esModule?e:{default:e}}var r=null;t.default={data:function(){return{load:!1,fileList:[],imageUrl:"",dialogVisible:!1,rules:{title:[{required:!0,message:"请输入文章标题",trigger:"blur"}],content:[{required:!0,message:"请输入内容",trigger:"blur"}]}}},watch:{info:{handler:function(e,t){var n=this.load;e.article.content&&0==n&&(r.$txt.html(e.article.content),this.load=!0,console.log("执行加载动作...."))},deep:!0}},computed:(0,i.default)({},(0,l.mapGetters)({state:"getArticleSaveState",info:"getArticleSingle",editorCfg:"getEditor"})),mounted:function(){var e=this.$route.query.uuid;e=null==e?0:e,this.fetchArticle(e),this.fetchEditorCfg(),this.initEditor()},methods:(0,i.default)({},(0,l.mapActions)(["articleSave","fetchArticle","resetForm","fetchEditorCfg"]),{onBack:function(){this.$router.push("/article")},initUpload:function(e){e.config.uploadImgUrl="/upload/uploadFileByEditor",e.config.hideLinkImg=!0,e.config.uploadImgFileName="upload"},initEditor:function(){for(var e=this,t=this,n=[],i=0;i<50;i++){var o={icon:"http://www.jq22.com/demo/qqFace/arclist/"+(i+1)+".gif",value:"[em_"+(i+1)+"]"};n.push(o)}setTimeout(function(){r=new wangEditor("content"),e.initUpload(r),r.config.menus=["source","|","bold","underline","italic","strikethrough","eraser","forecolor","bgcolor","|","quote","fontfamily","fontsize","head","unorderlist","orderlist","alignleft","aligncenter","alignright","|","link","unlink","table","emotion","|","img","insertcode","undo","redo"],r.config.emotions={default:{title:"表情",data:n}},r.create(),r.onchange=function(){t.info.article.content=r.$txt.html(),t.info.article.contentTxt=r.$txt.text()}},200)},handleAvatarSuccess:function(e,t){e.flag&&(this.imageUrl=e.data.url+"?w=300&q=100",this.info.article.pic=this.imageUrl)},handlePictureCardPreview:function(){this.dialogVisible=!0},handleRemove:function(e,t){console.log(e,t)},onSave:function(){var e=this,t=this.state.message,n=this.info.article;console.log("contentTxt:::::"+n.contentTxt),this.$refs.form.validate(function(i){i&&e.articleSave({article:n,fn:function(){var n="保存成功",i=t.flag,o=t.err;1!=i?n=o:setTimeout(function(){e.onBack()},500),e.$message({message:n,type:1!=i?"error":"success"})}})})}}),components:{layout:o.default}}},535:function(e,t,n){var i=n(536);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(484)("56ff8038",i,!0,{})},536:function(e,t,n){(e.exports=n(483)(!1)).push([e.i,".avatar{float:left;height:100px;width:100px}main{width:auto!important}",""])},537:function(e,t,n){"use strict";var i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout",[n("el-row",{staticStyle:{background:"#FFF",padding:"35px 15px",height:"100%"}},[n("el-col",[n("el-form",{ref:"form",attrs:{rules:e.rules,model:e.info.article,"label-width":"80px"}},[n("el-form-item",{attrs:{prop:"title",label:"文章标题"}},[n("el-input",{model:{value:e.info.article.title,callback:function(t){e.$set(e.info.article,"title",t)},expression:"info.article.title"}})],1),n("el-form-item",{attrs:{prop:"content",label:"内容"}},[n("el-input",{attrs:{prop:"content",id:"content",autosize:{minRows:10,maxRows:30},type:"textarea"},model:{value:e.info.article.content,callback:function(t){e.$set(e.info.article,"content",t)},expression:"info.article.content"}})],1),n("el-form-item",{attrs:{prop:"tag",label:"分类"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.info.article.tag,callback:function(t){e.$set(e.info.article,"tag",t)},expression:"info.article.tag"}},e._l(e.info.innerChannels,function(e){return n("el-option",{key:e.uuid,attrs:{label:e.name,value:e.uuid}})}))],1),n("el-form-item",{attrs:{label:"图片"}},[n("el-upload",{staticClass:"upload-demo",staticStyle:{display:"inline-block",float:"left","margin-right":"10px"},attrs:{action:"/upload/uploadFile","list-type":"picture-card","on-success":e.handleAvatarSuccess,"on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,multiple:!1,limit:1,name:"upload","auto-upload":!0}},[n("i",{staticClass:"el-icon-plus"})]),n("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("img",{attrs:{width:"100%",src:e.info.article.pic,alt:""}})]),e._v("\n                    上次使用："),null!=e.info.article.pic?n("img",{staticStyle:{width:"150px",height:"150px","border-radius":"10px"},attrs:{src:e.info.article.pic,alt:""}}):e._e()],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSave}},[e._v("保存")]),n("el-button",{on:{click:e.onBack}},[e._v("返回")])],1),n("el-input",{attrs:{type:"hidden"},model:{value:e.info.article.uuid,callback:function(t){e.$set(e.info.article,"uuid",t)},expression:"info.article.uuid"}})],1)],1)],1)],1)},staticRenderFns:[]};t.a=i}});