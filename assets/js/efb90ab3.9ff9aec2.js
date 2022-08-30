"use strict";(self.webpackChunklearn_docs=self.webpackChunklearn_docs||[]).push([[114],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>L});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=r.createContext({}),a=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},d=function(n){var e=a(n.components);return r.createElement(p.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,p=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),u=a(t),L=i,f=u["".concat(p,".").concat(L)]||u[L]||c[L]||o;return t?r.createElement(f,l(l({ref:e},d),{},{components:t})):r.createElement(f,l({ref:e},d))}));function L(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,l=new Array(o);l[0]=u;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=n,s.mdxType="string"==typeof n?n:i,l[1]=s;for(var a=2;a<o;a++)l[a]=t[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1799:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var r=t(7462),i=(t(7294),t(3905));const o={},l="\u5355\u94fe\u8868",s={unversionedId:"list/linkedList",id:"list/linkedList",title:"\u5355\u94fe\u8868",description:"",source:"@site/docs/02-list/02-linkedList.md",sourceDirName:"02-list",slug:"/list/linkedList",permalink:"/learnDocs/docs/list/linkedList",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-list/02-linkedList.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u987a\u5e8f\u8868",permalink:"/learnDocs/docs/list/seqList"},next:{title:"\u53cc\u94fe\u8868",permalink:"/learnDocs/docs/list/duLinkedList"}},p={},a=[],d={toc:a};function c(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5355\u94fe\u8868"},"\u5355\u94fe\u8868"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <stdlib.h>\n\ntypedef char ElemType;\n\ntypedef struct LNode{\n ElemType data;\n struct LNode *next;\n}LNode, *LinkList;\n\n\nLinkList InitLinkList();\nvoid InsertList(LinkList l, int order, ElemType e);\nvoid ShowInfo(LinkList l);\nvoid DeleteList(LinkList l, int order, ElemType *e);\nvoid GetElem(LinkList l, int order, ElemType *e);\n\nint main(){\n LinkList l = InitLinkList();\n InsertList(l, 1, \'A\');\n InsertList(l, 2, \'B\');\n InsertList(l, 3, \'C\');\n InsertList(l, 5, \'D\');\n ShowInfo(l);\n\n ElemType result;\n GetElem(l, 2, &result);\n printf("\u83b7\u53d6\u8282\u70b9\u4f4d\u5e8f\u4e3a:%d \u7684\u503c\u4e3a: %c \\n", 2, result);\n DeleteList(l, 2, &result);\n printf("\u5220\u9664\u7684\u8282\u70b9\u4f4d\u5e8f\u4e3a:%d \u7684\u503c\u4e3a: %c \\n", 2, result);\n ShowInfo(l);\n return 0;\n}\n\nLinkList InitLinkList(){\n LinkList l = (LinkList) malloc(sizeof(LNode));\n if(l == NULL){\n  printf("\u7533\u8bf7\u5185\u5b58\u5206\u914d\u5931\u8d25\\n");\n  exit(0);\n }\n l->next = NULL;\n return l;\n}\n\nvoid InsertList(LinkList l, int order, ElemType e){\n LinkList p = l;\n int j=0;\n while(p && j<order-1){//\u5b9a\u4f4d\u5230\u8981\u63d2\u5165\u4f4d\u7f6e\u7684\u524d\u4e00\u4e2a\u8282\u70b9\n  p = p->next;\n  j++;\n }\n if( !p ){\n  printf("order = %d \u8d85\u51fa\u94fe\u8868\u8303\u56f4\\n", order);\n  return;\n }\n LinkList newNode = (LinkList) malloc(sizeof(LNode));\n newNode->data = e;\n newNode->next = p->next;\n p->next = newNode;\n}\n\nvoid ShowInfo(LinkList l){\n LinkList p = l->next;\n int num = 1;\n while(p){\n  printf("\u7b2c %d \u4e2a\u5143\u7d20: %c \\n", num++, p->data);\n  p = p->next;\n }\n}\n\n/*\n\u5220\u9664\u5143\u7d20\norder: \u5220\u9664\u7b2ci\u4e2a\u5143\u7d20\n*/\nvoid DeleteList(LinkList l, int order, ElemType *e){\n LinkList p = l;\n while(p->next && order>1){//\u627e\u5230\u8981\u5220\u9664\u7684\u8282\u70b9\u7684\u524d\u4e00\u4e2a\u8282\u70b9\n  p = p->next;\n  order--;\n }\n if(p->next == NULL || order<1){\n  printf("order \u7d22\u5f15\u8d8a\u754c\\n");\n  return;\n }\n LinkList dump = p->next;\n *e = dump->data;\n p->next = p->next->next;//\u94fe\u8868\u5173\u7cfb\u4e2d\u5220\u9664p->next\u8fd9\u4e2a\u8282\u70b9 \u4e5f\u53ef\u8fd9\u6837p->next = dump->next\n free(dump);//\u5185\u5b58\u4e2d\u91ca\u653e\u6389\u8fd9\u4e2a\u8282\u70b9\n}\n\n/*\n\u83b7\u53d6\u7b2c order \u4e2a\u5143\u7d20\n*/\nvoid GetElem(LinkList l, int order, ElemType *e){\n LinkList p = l;\n while(p->next && order>1){\n  p = p->next;\n  order--;\n }\n if(p->next == NULL || order<1){\n  printf("order \u7d22\u5f15\u8d8a\u754c\\n");\n  return;\n }\n *e = p->next->data;\n}\n')))}c.isMDXComponent=!0}}]);