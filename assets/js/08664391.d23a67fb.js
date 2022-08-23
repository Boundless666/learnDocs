"use strict";(self.webpackChunklearn_docs=self.webpackChunklearn_docs||[]).push([[816],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=l,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),l=t(6010);const a="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),l=t(7294),a=t(6010),i=t(2389),s=t(7392),o=t(7094),u=t(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,t;const{lazy:i,block:p,defaultValue:m,values:f,groupId:v,className:y}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),T=null!=f?f:b.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),I=(0,s.l)(T,((e,n)=>e.value===n.value));if(I.length>0)throw new Error('Docusaurus error: Duplicate values "'+I.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===m?m:null!=(n=null!=m?m:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?n:b[0].props.value;if(null!==h&&!T.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+T.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:L,setTabGroupChoices:E}=(0,o.U)(),[g,S]=(0,l.useState)(h),k=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=v){const e=L[v];null!=e&&e!==g&&T.some((n=>n.value===e))&&S(e)}const _=e=>{const n=e.currentTarget,t=k.indexOf(n),r=T[t].value;r!==g&&(N(n),S(r),null!=v&&E(v,String(r)))},O=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var r;const n=k.indexOf(e.currentTarget)+1;t=null!=(r=k[n])?r:k[0];break}case"ArrowLeft":{var l;const n=k.indexOf(e.currentTarget)-1;t=null!=(l=k[n])?l:k[k.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,a.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},y)},T.map((e=>{let{value:n,label:t,attributes:i}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,key:n,ref:e=>k.push(e),onKeyDown:O,onFocus:_,onClick:_},i,{className:(0,a.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":g===n})}),null!=t?t:n)}))),i?(0,l.cloneElement)(b.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==g})))))}function m(e){const n=(0,i.Z)();return l.createElement(p,(0,r.Z)({key:String(n)},e))}},3945:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=t(7462),l=(t(7294),t(3905)),a=t(5488),i=t(5162);const s={},o="\u987a\u5e8f\u8868",u={unversionedId:"SequenceList/index",id:"SequenceList/index",title:"\u987a\u5e8f\u8868",description:"",source:"@site/docs/02-SequenceList/index.md",sourceDirName:"02-SequenceList",slug:"/SequenceList/",permalink:"/learnDocs/docs/SequenceList/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-SequenceList/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u7ed3\u6784\u5f15\u8a00",permalink:"/learnDocs/docs/intro"},next:{title:"code",permalink:"/learnDocs/docs/SequenceList/code"}},c={},d=[{value:"\u5b8c\u6574\u4ee3\u7801",id:"\u5b8c\u6574\u4ee3\u7801",level:5}],p={toc:d};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u987a\u5e8f\u8868"},"\u987a\u5e8f\u8868"),(0,l.kt)("p",null,"\u987a\u5e8f\u5b58\u653e\uff0c\u6bcf\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"\u6570\u636e\u9879")," \u5728\u5185\u5b58\u5730\u5740\u4e2d\u662f\u8fde\u7eed\u5b58\u653e\u7684"),(0,l.kt)(a.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"define",label:"\u5b8f\u5b9a\u4e49",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"    #define LIST_INIT_SIZE 8        //\u7ebf\u6027\u8868\u5b58\u50a8\u7a7a\u95f4\u521d\u59cb\u5206\u914d\u91cf\n    #define LIST_INCREMENT_SCALE 2  //\u7ebf\u6027\u8868\u5b58\u50a8\u7a7a\u95f4\u7684\u5206\u914d\u589e\u91cf\u6bd4\u4f8b\n"))),(0,l.kt)(i.Z,{value:"struct",label:"\u6570\u636e\u9879",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"    typedef char ElemType;  //\u5b9a\u4e49\u6570\u636e\u9879\u7c7b\u578b\n\n    typedef struct{\n        ElemType *data;\n        int length;\n        int listsize;\n    }SeqList;\n\n"))),(0,l.kt)(i.Z,{value:"init",label:"\u521d\u59cb\u5316",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"    void InitList(SeqList *l){\n        l->data = (ElemType*) malloc(sizeof(ElemType)*LIST_INIT_SIZE);\n        l->length = 0;\n        l->listsize = LIST_INIT_SIZE;\n    }\n"))),(0,l.kt)(i.Z,{value:"insert",label:"\u63d2\u5165\u64cd\u4f5c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'    void ListInsert(SeqList *l, int order, ElemType e){\n        if(order<1 || (order > l->length+1) ){\n                printf("\u4f4d\u5e8f--%d--\u8d85\u51fa\u8303\u56f4\\n",order);\n                return;\n        }\n        if(l->length == l->listsize){\n                printf("\u987a\u5e8f\u8868\u5b58\u50a8\u7a7a\u95f4\u5df2\u6ee1\\n");\n                return;\n        }\n\n        for(int i=l->length; i>=order; i--){\n                l->data[i] = l->data[i-1];\n        }\n        l->data[order-1] = e;\n        l->length = l->length+1;\n}\n\n')))),(0,l.kt)("h5",{id:"\u5b8c\u6574\u4ee3\u7801"},"\u5b8c\u6574\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>\n#include <stdlib.h>\n\n#define LIST_INIT_SIZE 8        //\u7ebf\u6027\u8868\u5b58\u50a8\u7a7a\u95f4\u521d\u59cb\u5206\u914d\u91cf\n#define LIST_INCREMENT_SCALE 2  //\u7ebf\u6027\u8868\u5b58\u50a8\u7a7a\u95f4\u7684\u5206\u914d\u589e\u91cf\u6bd4\u4f8b\n\ntypedef char ElemType;  //\u5b9a\u4e49\u6570\u636e\u9879\u7c7b\u578b\n\ntypedef struct{\n        ElemType *data;\n        int length;\n        int listsize;\n}SeqList;\n\n\nvoid InitList(SeqList *l);\n\nvoid visit(ElemType item);\nvoid ListTraverse(SeqList l, void (*visit)(ElemType) );\nvoid ListInsert(SeqList *l, int order, ElemType e);\n\nint main(){\n        SeqList l;\n        InitList(&l);\n        ListInsert(&l, 1, 'A');\n        ListInsert(&l, 2, 'B');\n        ListInsert(&l, 4, 'C');\n\n        ListTraverse(l, visit);\n\n        return 0;\n}\n\n//\u521d\u59cb\u5316\nvoid InitList(SeqList *l){\n        l->data = (ElemType*) malloc(sizeof(ElemType)*LIST_INIT_SIZE);\n        l->length = 0;\n        l->listsize = LIST_INIT_SIZE;\n#include <stdio.h>\n#include <stdlib.h>\n\n#define LIST_INIT_SIZE 8        //\u7ebf\u6027\u8868\u5b58\u50a8\u7a7a\u95f4\u521d\u59cb\u5206\u914d\u91cf\n#define LIST_INCREMENT_SCALE 2  //\u7ebf\u6027\u8868\u5b58\u50a8\u7a7a\u95f4\u7684\u5206\u914d\u589e\u91cf\u6bd4\u4f8b\n\ntypedef char ElemType;  //\u5b9a\u4e49\u6570\u636e\u9879\u7c7b\u578b\n\ntypedef struct{\n        ElemType *data;\n        int length;\n        int listsize;\n}SeqList;\n\n\nvoid InitList(SeqList *l);\n\nvoid visit(ElemType item);\nvoid ListTraverse(SeqList l, void (*visit)(ElemType) );\nvoid ListInsert(SeqList *l, int order, ElemType e);\n\nint main(){\n        SeqList l;\n        InitList(&l);\n        ListInsert(&l, 1, 'A');\n        ListInsert(&l, 2, 'B');\n        ListInsert(&l, 4, 'C');\n\n        ListTraverse(l, visit);\n\n        return 0;\n}\n\n//\u521d\u59cb\u5316\nvoid InitList(SeqList *l){\n        l->data = (ElemType*) malloc(sizeof(ElemType)*LIST_INIT_SIZE);\n        l->length = 1;\n\n")))}m.isMDXComponent=!0}}]);