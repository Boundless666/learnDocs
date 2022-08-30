# 双链表

```c
#include <stdio.h>
#include <stdlib.h>

typedef char ElemType;

typedef struct LNode{
 struct LNode *prior;
 ElemType data; 
 struct LNode *next;
}DuLNode, *DuLinkedList;

//初始化
DuLinkedList InitList();
//输出链表中的信息
void ShowInfo(DuLinkedList l);
//在第 order 个位序前面插入元素的数据
void ListInsert(DuLinkedList l, int order, ElemType e);
//删除第 order 个位序的元素的数据
void ListDeleteByOrder(DuLinkedList l, int order, ElemType *e);
//删除第一个与 e 相匹配的元素数据 返回它在链表中的位序
int ListDeleteByElem(DuLinkedList l, ElemType e);
//获取第 order 个位序的元素的数据
void GetElem(DuLinkedList l, int order, ElemType *e);
//获取第 order 个位序的元素  可以利用这个元素快速找到它的前驱和后继
DuLinkedList GetElemP(DuLinkedList l, int order);

int main(){
 DuLinkedList l = InitList();
 ListInsert(l, 1, 'D');
 ListInsert(l, 1, 'C');
 ListInsert(l, 1, 'B');
 ListInsert(l, 1, 'A');
 ListInsert(l, 5, 'A');
 ShowInfo(l);

 int order = 2; 
 DuLinkedList tmp = GetElemP(l, order);
 printf("GetElemP获取到第 %d 个元素的值为: %c \n", order, tmp->data);
 ElemType e;
 GetElem(l, order, &e);
 printf("GetElem获取到第 %d 个元素的值为: %c \n", order, e);
 
 order = ListDeleteByElem(l, e);
 printf("ListDeleteByElem 删除链表中第一个元素的值为: %c 的数据的位序是: %d \n", e, order);
 ShowInfo(l);

 ListDeleteByOrder(l, order, &e);
 printf("ListDeleteByOrder 删除的第 %d 个元素的值为: %c \n", order, e);
 ShowInfo(l);
 return 0;
}

//初始化
DuLinkedList InitList(){
 DuLinkedList l = (DuLinkedList) malloc(sizeof(DuLNode));
 if(l == NULL){
  printf("内存分配申请失败\n");
  exit(0);
 }
 l->prior = NULL;
 l->data = -1;
 l->next = NULL;
 return l;
}

//输出链表中的信息
void ShowInfo(DuLinkedList l){
 DuLinkedList p = l->next;
 int order = 1;
 while(p){
  printf("DuLinkedList第 %d 个元素的值为: %c \n", order++, p->data);
  p = p->next;
 }
 printf("\n\n");
}

//在第 order 个位序前面插入元素的数据
void ListInsert(DuLinkedList l, int order, ElemType e){
 DuLinkedList p = l;
 while(p!=NULL && order>1){//找到order的前一个元素p
  p = p->next;
  order++;
 }
 if(p==NULL || order<1){
  printf("位序超出链表实际边界\n");
  return;
 }
 
 DuLinkedList newItem = (DuLinkedList)malloc(sizeof(DuLNode));
 newItem->data = e;
 newItem->next = p->next;
 newItem->prior = p;
 if(p->next != NULL){
  p->next->prior = newItem;
 }
 p->next = newItem;
}
//删除第 order 个位序的元素的数据
void ListDeleteByOrder(DuLinkedList l, int order, ElemType *e){
 DuLinkedList p = l->next;
 while(p!=NULL && order>1){//找到第 order 个元素
  p = p->next;
  order--;
 }
 if(p==NULL || order<1){
  printf("位序超出链表实际边界\n");
  return;
 }
 
 if(p->next != NULL){
  p->next->prior = p->prior;
 }
 p->prior->next = p->next;
 *e = p->data;
 free(p);
}

int equal(ElemType left, ElemType right){
 return left == right;
}
//删除第一个与 e 相匹配的元素数据 返回它在链表中的位序
int ListDeleteByElem(DuLinkedList l, ElemType e){
 DuLinkedList p = l;
 int order = 0;
 while(p!=NULL){
  p = p->next;
  order++;
  if(equal(e, p->data)){
   break;
  }
 }
 if(p==NULL){
  printf("没有匹配的元素\n");
  return -1;
 }
 if(p->next != NULL){
  p->next->prior = p->prior;
 }
 p->prior->next = p->next;
 free(p);
 return order;
}

//获取第 order 个位序的元素的数据
void GetElem(DuLinkedList l, int order, ElemType *e){
 DuLinkedList p = l->next;
 while(p!=NULL && order>1){
  p = p->next;
  order--;
 
 if(p==NULL || order<1){
  printf("order位序超出链表边界\n");
  return;
 }
 *e = p->data;
}

//获取第 order 个位序的元素  可以利用这个元素快速找到它的前驱和后继
DuLinkedList GetElemP(DuLinkedList l, int order){
 DuLinkedList p = l->next;
 while(p!=NULL && order>1){
  p = p->next;
  order--;
 } 
 if(p==NULL || order<1){
  printf("order位序超出链表边界\n");
  return NULL;
 }
 return p;
}
```
