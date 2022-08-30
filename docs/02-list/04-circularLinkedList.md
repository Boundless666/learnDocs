# 循环链表

```c
#include <stdio.h>
#include <stdlib.h>

typedef char ElemType;

typedef struct LNode{
 ElemType data;
 struct LNode *next;
}LNode, *LinkedList;

LNode* CreateNode();
void ListInsert(LinkedList head, int order, ElemType e);
void ShowInfo(LinkedList head);
void ListDelete(LinkedList head, int order, ElemType *e);

int main(){
 LinkedList head = CreateNode();
 head->next = head; //创建的时候首先指向自己  一个节点的循环链表  后续在添加新节点的时候保证尾节点指向head

 ListInsert(head, 1, 'E');
 ListInsert(head, 1, 'C');
 ListInsert(head, 1, 'B');
 ListInsert(head, 3, 'D');
 ListInsert(head, 1, 'A');
 ListInsert(head, 6, 'F');
 ShowInfo(head);

 ElemType result;
 ListDelete(head, 1, &result);
 printf("删除链表中第 %d 个元素,元素值为: %c \n", 1, result);
 ShowInfo(head);
 
 ListDelete(head, 6, &result);
 printf("删除链表中第 %d 个元素,元素值为: %c \n", 6, result);
 ShowInfo(head);
}

LNode* CreateNode(){
 LinkedList node = (LinkedList)malloc(sizeof(LNode));
 if(node == NULL){
  printf("内存空间申请失败,程序退出\n");
  exit(0);
 }
 node->next = NULL;
 return node;
}

void ListInsert(LinkedList head, int order, ElemType e){
 LinkedList p = head;

 while(p->next!=head && order>1){
  p = p->next;
  order--;
 }

 if(order != 1){
  printf("order越界访问\n");
  return;
 }
 LinkedList node = CreateNode();
 node->data = e;
 node->next = p->next;
 p->next = node;
}

void ShowInfo(LinkedList head){
 LinkedList p = head->next;
 int order = 1;
 while(p!=NULL && p!=head){
  printf("第 %d 个节点的数据为: %c \n", order++, p->data);
  p = p->next;
 }
 printf("\n\n");
}

void ListDelete(LinkedList head, int order, ElemType *e){
 LinkedList dump, pre;
 dump = pre = head;
 dump = dump->next;
 while(dump->next!=head && order>1){
  pre = dump;
  dump = dump->next;
  order--;
 }
 if(order!=1 || dump==dump->next){
  printf("order越界访问\n");
  return;
 }
 *e = dump->data;
 pre->next = dump->next;
 free(dump);
}
```
