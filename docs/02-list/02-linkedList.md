# 单链表

```c
#include <stdio.h>
#include <stdlib.h>

typedef char ElemType;

typedef struct LNode{
 ElemType data;
 struct LNode *next;
}LNode, *LinkList;


LinkList InitLinkList();
void InsertList(LinkList l, int order, ElemType e);
void ShowInfo(LinkList l);
void DeleteList(LinkList l, int order, ElemType *e);
void GetElem(LinkList l, int order, ElemType *e);

int main(){
 LinkList l = InitLinkList();
 InsertList(l, 1, 'A');
 InsertList(l, 2, 'B');
 InsertList(l, 3, 'C');
 InsertList(l, 5, 'D');
 ShowInfo(l);

 ElemType result;
 GetElem(l, 2, &result);
 printf("获取节点位序为:%d 的值为: %c \n", 2, result);
 DeleteList(l, 2, &result);
 printf("删除的节点位序为:%d 的值为: %c \n", 2, result);
 ShowInfo(l);
 return 0;
}

LinkList InitLinkList(){
 LinkList l = (LinkList) malloc(sizeof(LNode));
 if(l == NULL){
  printf("申请内存分配失败\n");
  exit(0);
 }
 l->next = NULL;
 return l;
}

void InsertList(LinkList l, int order, ElemType e){
 LinkList p = l;
 int j=0;
 while(p && j<order-1){//定位到要插入位置的前一个节点
  p = p->next;
  j++;
 }
 if( !p ){
  printf("order = %d 超出链表范围\n", order);
  return;
 }
 LinkList newNode = (LinkList) malloc(sizeof(LNode));
 newNode->data = e;
 newNode->next = p->next;
 p->next = newNode;
}

void ShowInfo(LinkList l){
 LinkList p = l->next;
 int num = 1;
 while(p){
  printf("第 %d 个元素: %c \n", num++, p->data);
  p = p->next;
 }
}

/*
删除元素
order: 删除第i个元素
*/
void DeleteList(LinkList l, int order, ElemType *e){
 LinkList p = l;
 while(p->next && order>1){//找到要删除的节点的前一个节点
  p = p->next;
  order--;
 }
 if(p->next == NULL || order<1){
  printf("order 索引越界\n");
  return;
 }
 LinkList dump = p->next;
 *e = dump->data;
 p->next = p->next->next;//链表关系中删除p->next这个节点 也可这样p->next = dump->next
 free(dump);//内存中释放掉这个节点
}

/*
获取第 order 个元素
*/
void GetElem(LinkList l, int order, ElemType *e){
 LinkList p = l;
 while(p->next && order>1){
  p = p->next;
  order--;
 }
 if(p->next == NULL || order<1){
  printf("order 索引越界\n");
  return;
 }
 *e = p->next->data;
}
```
