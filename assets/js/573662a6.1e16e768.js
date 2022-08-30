"use strict";(self.webpackChunklearn_docs=self.webpackChunklearn_docs||[]).push([[308],{3905:(e,n,u)=>{u.d(n,{Zo:()=>l,kt:()=>f});var t=u(7294);function r(e,n,u){return n in e?Object.defineProperty(e,n,{value:u,enumerable:!0,configurable:!0,writable:!0}):e[n]=u,e}function o(e,n){var u=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),u.push.apply(u,t)}return u}function a(e){for(var n=1;n<arguments.length;n++){var u=null!=arguments[n]?arguments[n]:{};n%2?o(Object(u),!0).forEach((function(n){r(e,n,u[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(u)):o(Object(u)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(u,n))}))}return e}function i(e,n){if(null==e)return{};var u,t,r=function(e,n){if(null==e)return{};var u,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)u=o[t],n.indexOf(u)>=0||(r[u]=e[u]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)u=o[t],n.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(e,u)&&(r[u]=e[u])}return r}var d=t.createContext({}),c=function(e){var n=t.useContext(d),u=n;return e&&(u="function"==typeof e?e(n):a(a({},n),e)),u},l=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var u=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(u),f=r,m=p["".concat(d,".").concat(f)]||p[f]||s[f]||o;return u?t.createElement(m,a(a({ref:n},l),{},{components:u})):t.createElement(m,a({ref:n},l))}));function f(e,n){var u=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=u.length,a=new Array(o);a[0]=p;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=u[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,u)}p.displayName="MDXCreateElement"},9095:(e,n,u)=>{u.r(n),u.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=u(7462),r=(u(7294),u(3905));const o={},a="\u94fe\u961f\u5217",i={unversionedId:"stackAndQueue/linkedQueue",id:"stackAndQueue/linkedQueue",title:"\u94fe\u961f\u5217",description:"",source:"@site/docs/03-stackAndQueue/04-linkedQueue.md",sourceDirName:"03-stackAndQueue",slug:"/stackAndQueue/linkedQueue",permalink:"/docs/stackAndQueue/linkedQueue",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-stackAndQueue/04-linkedQueue.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u987a\u5e8f\u961f\u5217",permalink:"/docs/stackAndQueue/seqQueue"},next:{title:"\u6808\u7684\u5e94\u7528--\u62ec\u53f7\u5339\u914d",permalink:"/docs/stackAndQueue/stack_bracket"}},d={},c=[],l={toc:c};function s(e){let{components:n,...u}=e;return(0,r.kt)("wrapper",(0,t.Z)({},l,u,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u94fe\u961f\u5217"},"\u94fe\u961f\u5217"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\ntypedef char ElemType;\n\ntypedef struct LNode{\n ElemType data;\n struct LNode *next;\n}LNode;\n\ntypedef struct{\n LNode *front, *rear;\n}LinkedQueue;\n\nvoid InitQueue(LinkedQueue *queue);\nbool EnQueue(LinkedQueue *queue, ElemType e);\nbool DeQueue(LinkedQueue *queue, ElemType *e);\nvoid ShowInfo(LinkedQueue queue);\n\nint main(){\n LinkedQueue queue;\n InitQueue(&queue);\n EnQueue(&queue, \'A\');\n EnQueue(&queue, \'B\');\n EnQueue(&queue, \'C\');\n EnQueue(&queue, \'D\');\n EnQueue(&queue, \'E\');\n EnQueue(&queue, \'F\');\n EnQueue(&queue, \'G\');\n ShowInfo(queue);\n \n ElemType result;\n bool status;\n status = DeQueue(&queue, &result);\n printf("\u64cd\u4f5c\u72b6\u6001: %d \u8fd4\u56de\u503c: %c \\n", status, result);\n status = DeQueue(&queue, &result);\n printf("\u64cd\u4f5c\u72b6\u6001: %d \u8fd4\u56de\u503c: %c \\n", status, result);\n status = DeQueue(&queue, &result);\n printf("\u64cd\u4f5c\u72b6\u6001: %d \u8fd4\u56de\u503c: %c \\n", status, result);\n ShowInfo(queue);\n return 0;\n}\n\n\nLNode* createNode(){\n LNode* node = (LNode*)malloc(sizeof(LNode));\n if(node == NULL){\n  printf("\u5185\u5b58\u7533\u8bf7\u5931\u8d25,\u7a0b\u5e8f\u9000\u51fa\\n");\n  exit(0);\n }\n node->next = NULL;\n return node;\n}\nbool queueEmpty(LinkedQueue *queue){\n if(queue->front == NULL){\n  return true;\n }\n return false;\n}\n\nvoid InitQueue(LinkedQueue *queue){\n queue->front = queue->rear = NULL;\n}\n\nbool EnQueue(LinkedQueue *queue, ElemType e){\n LNode* newElem = createNode();\n newElem->data = e;\n if(queueEmpty(queue)){\n  queue->front = queue->rear = newElem;\n  return true;\n }\n queue->rear->next = newElem;\n queue->rear = newElem;\n return true;\n}\n\nbool DeQueue(LinkedQueue *queue, ElemType *e){\n if(queueEmpty(queue)){\n  printf("\u7a7a\u7684\u94fe\u961f\u5217\\n");\n  return false;\n }\n LNode* dumpElem = queue->front;\n *e = dumpElem->data;\n queue->front = dumpElem->next;\n free(dumpElem);\n return true;\n}\n\nvoid ShowInfo(LinkedQueue queue){\n LNode* p = queue.front;\n int order = 1;\n while(p != queue.rear){\n  printf("\u5f53\u524d\u7b2c %d \u4e2a\u5143\u7d20\u7684\u503c\u4e3a: %c \\n", order++, p->data);\n  p = p->next;\n }\n printf("\u5f53\u524d\u7b2c %d \u4e2a\u5143\u7d20\u7684\u503c\u4e3a: %c \\n", order, p->data);\n printf("\\n\\n");\n}\n')))}s.isMDXComponent=!0}}]);