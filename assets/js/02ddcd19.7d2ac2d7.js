"use strict";(self.webpackChunklearn_docs=self.webpackChunklearn_docs||[]).push([[207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),k=u(n),f=a,d=k["".concat(i,".").concat(f)]||k[f]||p[f]||c;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const c={},o="\u6808\u7684\u5e94\u7528--\u62ec\u53f7\u5339\u914d",s={unversionedId:"stackAndQueue/stack_bracket",id:"stackAndQueue/stack_bracket",title:"\u6808\u7684\u5e94\u7528--\u62ec\u53f7\u5339\u914d",description:"\u5728\u6211\u4eec\u4f7f\u7528\u7684\u7f16\u7a0b\u8bed\u8a00\u4e2d\uff0c\u5927\u90e8\u5206\u8bed\u8a00\u7684\u8bed\u6cd5\u90fd\u4f1a\u6709\u62ec\u53f7\u7684\u51fa\u73b0  \u800c\u4e14\u90fd\u662f\u6210\u5bf9\u51fa\u73b0",source:"@site/docs/03-stackAndQueue/05-stack_bracket.md",sourceDirName:"03-stackAndQueue",slug:"/stackAndQueue/stack_bracket",permalink:"/learnDocs/docs/stackAndQueue/stack_bracket",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-stackAndQueue/05-stack_bracket.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u94fe\u961f\u5217",permalink:"/learnDocs/docs/stackAndQueue/linkedQueue"},next:{title:"\u6808\u7684\u5e94\u7528--\u8868\u8fbe\u5f0f\u5904\u7406",permalink:"/learnDocs/docs/stackAndQueue/stack_expression"}},i={},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6808\u7684\u5e94\u7528--\u62ec\u53f7\u5339\u914d"},"\u6808\u7684\u5e94\u7528--\u62ec\u53f7\u5339\u914d"),(0,a.kt)("p",null,"\u5728\u6211\u4eec\u4f7f\u7528\u7684\u7f16\u7a0b\u8bed\u8a00\u4e2d\uff0c\u5927\u90e8\u5206\u8bed\u8a00\u7684\u8bed\u6cd5\u90fd\u4f1a\u6709\u62ec\u53f7\u7684\u51fa\u73b0  \u800c\u4e14\u90fd\u662f\u6210\u5bf9\u51fa\u73b0"),(0,a.kt)("p",null,"//\u6bd4\u5982",(0,a.kt)("strong",{parentName:"p"},"()\u3001[]\u3001{}")),(0,a.kt)("p",null,"\u5f53\u5728\u7f16\u8f91\u5668\u91cc\u9762\u7f16\u5199\u4ee3\u7801\u65f6\uff0c\u5982\u679c\u4f60\u8f93\u5165\u7684\u62ec\u53f7\u4e0d\u5339\u914d\uff0c\u7f16\u8f91\u5668\u5c31\u4f1a\u68c0\u6d4b\u5230\u5e76\u4e14\u6709\u667a\u80fd\u63d0\u793a\uff0c\u6bd4\u5982\u67d0\u4e00\u5757\u53d8\u7ea2\u3002"),(0,a.kt)("p",null,"\u800c\u8fd9\u4e2a\u68c0\u6d4b\u673a\u5236  \u53ef\u4ee5\u7528\u6808\u5f88\u5bb9\u6613\u7684\u5b9e\u73b0\u51fa\u6765"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6838\u5fc3\u601d\u60f3\uff1a"),(0,a.kt)("p",{parentName:"blockquote"},"\u9047\u5230\u5de6\u534a\u8fb9\u62ec\u53f7",(0,a.kt)("strong",{parentName:"p"},"\u5165\u6808")),(0,a.kt)("p",{parentName:"blockquote"},"\u9047\u5230\u53f3\u534a\u8fb9\u62ec\u53f7",(0,a.kt)("strong",{parentName:"p"},"\u51fa\u6808"),"   \u51fa\u6808\u5143\u7d20 \u4e0e\u8fd9\u4e2a\u53f3\u534a\u8fb9\u62ec\u53f7",(0,a.kt)("strong",{parentName:"p"},"\u914d\u5bf9"),",\u914d\u5bf9\u6210\u529f\u5c31\u7ee7\u7eed   \u5931\u8d25\u5219\u8868\u793a\u62ec\u53f7\u5f02\u5e38")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>\n#include <stdbool.h>\n\n#include \"linkedStack.h\"//\u8fd9\u662f\u5f15\u5165\u4e4b\u524d\u5199\u7684\u94fe\u6808\u7ed3\u6784  \u4f60\u53ef\u4ee5\u5f15\u5165\u81ea\u5df1\u5b9e\u73b0\u7684\u6808\u7ed3\u6784\nbool BracketCheck(char str[], int length);\n\nint main(){\n char str[] = {'(','(','[',']',')',')',']'};\n        bool status;\n        status = BracketCheck(str, sizeof(str) / sizeof(char));\n        printf(\"\u72b6\u6001: %d \\n\", status);\n        return 0;\n}\n\nbool BracketCheck(char str[], int length){\n Stack stack;\n InitStack(&stack);\n for(int i=0; i<length; i++){\n  if(str[i]=='(' || str[i]=='[' || str[i]=='{'){//\u662f\u5de6\u62ec\u53f7  \u5165\u6808\u64cd\u4f5c\n   Push(&stack, str[i]);\n   continue;\n  }\n  if(StackEmpty(&stack)){\n   printf(\"\u5339\u914d\u5931\u8d25,\u62ec\u53f7\u5f02\u5e38\\n\");\n   return false;\n  }\n  ElemType top;\n  Pop(&stack, &top);//\u53d6\u51fa\u6808\u9876\u7684\u5143\u7d20  \u5165\u6808\u7684\u80af\u5b9a\u662f\u5de6\u534a\u8fb9\u7684\u62ec\u53f7  (\u3001[\u3001{ \u5176\u4e2d\u4e00\u4e2a\n  if(top=='(' && str[i] != ')'){\n   return false;\n  }\n  if(top=='[' && str[i] != ']'){\n   return false;\n  }\n  if(top=='{' && str[i] != '}'){\n   return false;\n  }\n  \n } \n return StackEmpty(&stack);//\u5982\u679c\u6808\u4e2d\u8fd8\u6709\u5143\u7d20  \u4e5f\u8868\u793a\u62ec\u53f7\u6ca1\u6709\u5168\u90e8\u5339\u914d\u5b8c\u6210\n}\n")))}p.isMDXComponent=!0}}]);