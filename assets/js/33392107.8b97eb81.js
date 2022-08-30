"use strict";(self.webpackChunklearn_docs=self.webpackChunklearn_docs||[]).push([[507],{3905:(e,n,t)=>{t.d(n,{Zo:()=>L,kt:()=>c});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},L=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},a=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,L=l(e,["components","mdxType","originalType","parentName"]),a=s(t),c=i,f=a["".concat(p,".").concat(c)]||a[c]||u[c]||o;return t?r.createElement(f,d(d({ref:n},L),{},{components:t})):r.createElement(f,d({ref:n},L))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,d=new Array(o);d[0]=a;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,d[1]=l;for(var s=2;s<o;s++)d[s]=t[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}a.displayName="MDXCreateElement"},8554:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const o={},d="\u53cc\u94fe\u8868",l={unversionedId:"list/duLinkedList",id:"list/duLinkedList",title:"\u53cc\u94fe\u8868",description:"",source:"@site/docs/02-list/03-duLinkedList.md",sourceDirName:"02-list",slug:"/list/duLinkedList",permalink:"/docs/list/duLinkedList",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-list/03-duLinkedList.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5355\u94fe\u8868",permalink:"/docs/list/linkedList"},next:{title:"\u5faa\u73af\u94fe\u8868",permalink:"/docs/list/circularLinkedList"}},p={},s=[],L={toc:s};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},L,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u53cc\u94fe\u8868"},"\u53cc\u94fe\u8868"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <stdlib.h>\n\ntypedef char ElemType;\n\ntypedef struct LNode{\n struct LNode *prior;\n ElemType data; \n struct LNode *next;\n}DuLNode, *DuLinkedList;\n\n//\u521d\u59cb\u5316\nDuLinkedList InitList();\n//\u8f93\u51fa\u94fe\u8868\u4e2d\u7684\u4fe1\u606f\nvoid ShowInfo(DuLinkedList l);\n//\u5728\u7b2c order \u4e2a\u4f4d\u5e8f\u524d\u9762\u63d2\u5165\u5143\u7d20\u7684\u6570\u636e\nvoid ListInsert(DuLinkedList l, int order, ElemType e);\n//\u5220\u9664\u7b2c order \u4e2a\u4f4d\u5e8f\u7684\u5143\u7d20\u7684\u6570\u636e\nvoid ListDeleteByOrder(DuLinkedList l, int order, ElemType *e);\n//\u5220\u9664\u7b2c\u4e00\u4e2a\u4e0e e \u76f8\u5339\u914d\u7684\u5143\u7d20\u6570\u636e \u8fd4\u56de\u5b83\u5728\u94fe\u8868\u4e2d\u7684\u4f4d\u5e8f\nint ListDeleteByElem(DuLinkedList l, ElemType e);\n//\u83b7\u53d6\u7b2c order \u4e2a\u4f4d\u5e8f\u7684\u5143\u7d20\u7684\u6570\u636e\nvoid GetElem(DuLinkedList l, int order, ElemType *e);\n//\u83b7\u53d6\u7b2c order \u4e2a\u4f4d\u5e8f\u7684\u5143\u7d20  \u53ef\u4ee5\u5229\u7528\u8fd9\u4e2a\u5143\u7d20\u5feb\u901f\u627e\u5230\u5b83\u7684\u524d\u9a71\u548c\u540e\u7ee7\nDuLinkedList GetElemP(DuLinkedList l, int order);\n\nint main(){\n DuLinkedList l = InitList();\n ListInsert(l, 1, \'D\');\n ListInsert(l, 1, \'C\');\n ListInsert(l, 1, \'B\');\n ListInsert(l, 1, \'A\');\n ListInsert(l, 5, \'A\');\n ShowInfo(l);\n\n int order = 2; \n DuLinkedList tmp = GetElemP(l, order);\n printf("GetElemP\u83b7\u53d6\u5230\u7b2c %d \u4e2a\u5143\u7d20\u7684\u503c\u4e3a: %c \\n", order, tmp->data);\n ElemType e;\n GetElem(l, order, &e);\n printf("GetElem\u83b7\u53d6\u5230\u7b2c %d \u4e2a\u5143\u7d20\u7684\u503c\u4e3a: %c \\n", order, e);\n \n order = ListDeleteByElem(l, e);\n printf("ListDeleteByElem \u5220\u9664\u94fe\u8868\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u503c\u4e3a: %c \u7684\u6570\u636e\u7684\u4f4d\u5e8f\u662f: %d \\n", e, order);\n ShowInfo(l);\n\n ListDeleteByOrder(l, order, &e);\n printf("ListDeleteByOrder \u5220\u9664\u7684\u7b2c %d \u4e2a\u5143\u7d20\u7684\u503c\u4e3a: %c \\n", order, e);\n ShowInfo(l);\n return 0;\n}\n\n//\u521d\u59cb\u5316\nDuLinkedList InitList(){\n DuLinkedList l = (DuLinkedList) malloc(sizeof(DuLNode));\n if(l == NULL){\n  printf("\u5185\u5b58\u5206\u914d\u7533\u8bf7\u5931\u8d25\\n");\n  exit(0);\n }\n l->prior = NULL;\n l->data = -1;\n l->next = NULL;\n return l;\n}\n\n//\u8f93\u51fa\u94fe\u8868\u4e2d\u7684\u4fe1\u606f\nvoid ShowInfo(DuLinkedList l){\n DuLinkedList p = l->next;\n int order = 1;\n while(p){\n  printf("DuLinkedList\u7b2c %d \u4e2a\u5143\u7d20\u7684\u503c\u4e3a: %c \\n", order++, p->data);\n  p = p->next;\n }\n printf("\\n\\n");\n}\n\n//\u5728\u7b2c order \u4e2a\u4f4d\u5e8f\u524d\u9762\u63d2\u5165\u5143\u7d20\u7684\u6570\u636e\nvoid ListInsert(DuLinkedList l, int order, ElemType e){\n DuLinkedList p = l;\n while(p!=NULL && order>1){//\u627e\u5230order\u7684\u524d\u4e00\u4e2a\u5143\u7d20p\n  p = p->next;\n  order++;\n }\n if(p==NULL || order<1){\n  printf("\u4f4d\u5e8f\u8d85\u51fa\u94fe\u8868\u5b9e\u9645\u8fb9\u754c\\n");\n  return;\n }\n \n DuLinkedList newItem = (DuLinkedList)malloc(sizeof(DuLNode));\n newItem->data = e;\n newItem->next = p->next;\n newItem->prior = p;\n if(p->next != NULL){\n  p->next->prior = newItem;\n }\n p->next = newItem;\n}\n//\u5220\u9664\u7b2c order \u4e2a\u4f4d\u5e8f\u7684\u5143\u7d20\u7684\u6570\u636e\nvoid ListDeleteByOrder(DuLinkedList l, int order, ElemType *e){\n DuLinkedList p = l->next;\n while(p!=NULL && order>1){//\u627e\u5230\u7b2c order \u4e2a\u5143\u7d20\n  p = p->next;\n  order--;\n }\n if(p==NULL || order<1){\n  printf("\u4f4d\u5e8f\u8d85\u51fa\u94fe\u8868\u5b9e\u9645\u8fb9\u754c\\n");\n  return;\n }\n \n if(p->next != NULL){\n  p->next->prior = p->prior;\n }\n p->prior->next = p->next;\n *e = p->data;\n free(p);\n}\n\nint equal(ElemType left, ElemType right){\n return left == right;\n}\n//\u5220\u9664\u7b2c\u4e00\u4e2a\u4e0e e \u76f8\u5339\u914d\u7684\u5143\u7d20\u6570\u636e \u8fd4\u56de\u5b83\u5728\u94fe\u8868\u4e2d\u7684\u4f4d\u5e8f\nint ListDeleteByElem(DuLinkedList l, ElemType e){\n DuLinkedList p = l;\n int order = 0;\n while(p!=NULL){\n  p = p->next;\n  order++;\n  if(equal(e, p->data)){\n   break;\n  }\n }\n if(p==NULL){\n  printf("\u6ca1\u6709\u5339\u914d\u7684\u5143\u7d20\\n");\n  return -1;\n }\n if(p->next != NULL){\n  p->next->prior = p->prior;\n }\n p->prior->next = p->next;\n free(p);\n return order;\n}\n\n//\u83b7\u53d6\u7b2c order \u4e2a\u4f4d\u5e8f\u7684\u5143\u7d20\u7684\u6570\u636e\nvoid GetElem(DuLinkedList l, int order, ElemType *e){\n DuLinkedList p = l->next;\n while(p!=NULL && order>1){\n  p = p->next;\n  order--;\n \n if(p==NULL || order<1){\n  printf("order\u4f4d\u5e8f\u8d85\u51fa\u94fe\u8868\u8fb9\u754c\\n");\n  return;\n }\n *e = p->data;\n}\n\n//\u83b7\u53d6\u7b2c order \u4e2a\u4f4d\u5e8f\u7684\u5143\u7d20  \u53ef\u4ee5\u5229\u7528\u8fd9\u4e2a\u5143\u7d20\u5feb\u901f\u627e\u5230\u5b83\u7684\u524d\u9a71\u548c\u540e\u7ee7\nDuLinkedList GetElemP(DuLinkedList l, int order){\n DuLinkedList p = l->next;\n while(p!=NULL && order>1){\n  p = p->next;\n  order--;\n } \n if(p==NULL || order<1){\n  printf("order\u4f4d\u5e8f\u8d85\u51fa\u94fe\u8868\u8fb9\u754c\\n");\n  return NULL;\n }\n return p;\n}\n')))}u.isMDXComponent=!0}}]);