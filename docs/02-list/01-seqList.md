# 顺序表

```c
#include <stdio.h>
#include <stdlib.h>

#define LIST_INIT_SIZE 8 //线性表存储空间初始分配量
#define LIST_INCREMENT_SCALE 2 //线性表存储空间的分配增量比例

typedef char ElemType; //定义数据项类型

typedef struct{
 ElemType *data;
 int length;
 int listsize;
}SeqList;


void InitList(SeqList *l);
void visit(ElemType item);
void ListTraverse(SeqList l, void (*visit)(ElemType) );
void ListInsert(SeqList *l, int order, ElemType e);
void ListDelete(SeqList *l, int order, ElemType *e);
int compare(ElemType left, ElemType right);
int LocateElem(SeqList l, ElemType e, int (*compare)(ElemType,ElemType));
void GetElem(SeqList l, int order, ElemType *e);

int main(){
 SeqList l;
 InitList(&l);
 ListInsert(&l, 1, 'A');
 ListInsert(&l, 2, 'B');
 ListInsert(&l, 4, 'C');
 ListInsert(&l, 3, 'C');
 ListInsert(&l, 4, 'D');
 ListInsert(&l, 5, 'E');
 ListTraverse(l, visit);
 
 ElemType result;
 int order = LocateElem(l, 'B', compare);
 ListDelete(&l, order, &result);
 ListTraverse(l, visit);
 printf("删除的位序:%d \t 结果:%c \n",order, result);
 
 GetElem(l, order, &result);
 printf("获取的位序:%d \t 结果:%c \n",order, result);
 
 
 return 0;
}

//初始化
void InitList(SeqList *l){
 l->data = (ElemType*) malloc(sizeof(ElemType)*LIST_INIT_SIZE);
 l->length = 0;
 l->listsize = LIST_INIT_SIZE;
}

//顺序表遍历
void ListTraverse(SeqList l, void (*visit)(ElemType) ){
 printf("length = %d \t listsize = %d \n 列表元素如下:\n",l.length, l.listsize);
 if(l.length < 1){
  return;
 }
 for(int i=0; i<l.length; i++){
  visit(l.data[i]);
 }
 printf("\n\n");
}
//顺序表遍历操作
void visit(ElemType item){
 printf("--- %c ---\n",item);
}


/*
插入操作
order:在第i个元素前面插入
*/
void ListInsert(SeqList *l, int order, ElemType e){
 if(order<1 || (order > l->length+1) ){
  printf("位序--%d--超出范围\n",order);
  return;
 }
 if(l->length == l->listsize){
  printf("顺序表存储空间已满\n");//可以在这里执行一个扩容操作 realloc()
  return;
 }
 
 for(int i=l->length; i>=order; i--){
  l->data[i] = l->data[i-1];
 }
 l->data[order-1] = e;
 l->length = l->length+1;
}

/*
删除操作
order:删除第i个元素
*/
void ListDelete(SeqList *l, int order, ElemType *e){
 if(order<1 || order > l->length){
  printf("位序--%d--超出范围\n",order);
  return;
 }
 (*e) = l->data[order - 1];
 for(int i=order-1; i<l->length-1; i++){
  l->data[i] = l->data[i+1];
 }
 l->length = l->length -1;
}

void GetElem(SeqList l, int order, ElemType *e){
 if(order<1 || order>l.length){
  printf("位序--%d--超出范围\n",order);
  return;
 }
 (*e) = l.data[order - 1];
}

int compare(ElemType left, ElemType right){
 return left == right;
}
int LocateElem(SeqList l, ElemType e, int (*compare)(ElemType,ElemType)){
 int result = 0;
 for(int i=0; i<l.length; i++){
  if(compare(l.data[i], e)){
   result = i+1;
   break;
  }
 }
 return result;
}
```
