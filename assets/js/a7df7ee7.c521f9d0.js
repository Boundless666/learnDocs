"use strict";(self.webpackChunklearn_docs=self.webpackChunklearn_docs||[]).push([[829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=i(n),d=a,f=k["".concat(u,".").concat(d)]||k[d]||l[d]||c;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var i=2;i<c;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const c={},s="\u987a\u5e8f\u6808",o={unversionedId:"stackAndQueue/seqStack",id:"stackAndQueue/seqStack",title:"\u987a\u5e8f\u6808",description:"",source:"@site/docs/03-stackAndQueue/01-seqStack.md",sourceDirName:"03-stackAndQueue",slug:"/stackAndQueue/seqStack",permalink:"/docs/stackAndQueue/seqStack",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-stackAndQueue/01-seqStack.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u961f\u5217\u548c\u6808",permalink:"/docs/stackAndQueue/"},next:{title:"\u94fe\u6808",permalink:"/docs/stackAndQueue/linkedStack"}},u={},i=[],p={toc:i};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u987a\u5e8f\u6808"},"\u987a\u5e8f\u6808"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <stdbool.h>\n\n#define MAXSIZE 10\n#define EMPTY -1\n\ntypedef char ElemType;\n\ntypedef struct{\n ElemType data[MAXSIZE];\n int top;\n}SeqStack;\n\nvoid InitStack(SeqStack *stack);\nbool Push(SeqStack *stack, ElemType e);\nbool Pop(SeqStack *stack, ElemType *e);\nbool GetTop(SeqStack *stack, ElemType *e);\nvoid SuccessPrint(bool status, ElemType e);\n\nint main(){\n SeqStack stack;\n InitStack(&stack);\n Push(&stack, \'D\');\n Push(&stack, \'C\');\n Push(&stack, \'B\');\n Push(&stack, \'A\');\n \n ElemType result;\n bool status;\n status = GetTop(&stack, &result);\n SuccessPrint(status, result);\n status = Pop(&stack, &result);\n SuccessPrint(status, result);\n \n status = Pop(&stack, &result);\n SuccessPrint(status, result);\n \n return 0;\n}\n\nbool stackEmpty(SeqStack *stack){\n if(stack->top == EMPTY){\n  return true;\n }\n return false;\n}\n\nvoid InitStack(SeqStack *stack){\n stack->top = EMPTY;\n}\n\nbool Push(SeqStack *stack, ElemType e){\n if(stack->top+1 == MAXSIZE){\n  printf("\u6808\u5df2\u5b58\u6ee1\\n");\n  return false;\n }\n stack->top = stack->top + 1;\n stack->data[stack->top] = e; //\u4e24\u884c\u5408\u4e00: stack->data[--stack->top];\n return true;\n}\n\nbool Pop(SeqStack *stack, ElemType *e){\n if(stackEmpty(stack)){\n  printf("\u7a7a\u6808\\n");\n  return false;\n }\n *e = stack->data[stack->top];\n stack->top = stack->top - 1; //\u4e24\u884c\u5408\u4e00: *e = stack->data[stack->top--];\n return true;\n}\n\nbool GetTop(SeqStack *stack, ElemType *e){ \n if(stackEmpty(stack)){\n  printf("\u7a7a\u6808\\n");\n  return false;\n }\n *e = stack->data[stack->top];\n return true;\n}\n\nvoid SuccessPrint(bool status, ElemType e){\n if(status){\n  printf("\u5143\u7d20\u503c\u4e3a:%c \\n", e);\n }else{\n  printf("\u6267\u884c\u5931\u8d25!\\n");\n }\n}\n')))}l.isMDXComponent=!0}}]);