# 链队列

```c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef char ElemType;

typedef struct LNode{
 ElemType data;
 struct LNode *next;
}LNode;

typedef struct{
 LNode *front, *rear;
}LinkedQueue;

void InitQueue(LinkedQueue *queue);
bool EnQueue(LinkedQueue *queue, ElemType e);
bool DeQueue(LinkedQueue *queue, ElemType *e);
void ShowInfo(LinkedQueue queue);

int main(){
 LinkedQueue queue;
 InitQueue(&queue);
 EnQueue(&queue, 'A');
 EnQueue(&queue, 'B');
 EnQueue(&queue, 'C');
 EnQueue(&queue, 'D');
 EnQueue(&queue, 'E');
 EnQueue(&queue, 'F');
 EnQueue(&queue, 'G');
 ShowInfo(queue);
 
 ElemType result;
 bool status;
 status = DeQueue(&queue, &result);
 printf("操作状态: %d 返回值: %c \n", status, result);
 status = DeQueue(&queue, &result);
 printf("操作状态: %d 返回值: %c \n", status, result);
 status = DeQueue(&queue, &result);
 printf("操作状态: %d 返回值: %c \n", status, result);
 ShowInfo(queue);
 return 0;
}


LNode* createNode(){
 LNode* node = (LNode*)malloc(sizeof(LNode));
 if(node == NULL){
  printf("内存申请失败,程序退出\n");
  exit(0);
 }
 node->next = NULL;
 return node;
}
bool queueEmpty(LinkedQueue *queue){
 if(queue->front == NULL){
  return true;
 }
 return false;
}

void InitQueue(LinkedQueue *queue){
 queue->front = queue->rear = NULL;
}

bool EnQueue(LinkedQueue *queue, ElemType e){
 LNode* newElem = createNode();
 newElem->data = e;
 if(queueEmpty(queue)){
  queue->front = queue->rear = newElem;
  return true;
 }
 queue->rear->next = newElem;
 queue->rear = newElem;
 return true;
}

bool DeQueue(LinkedQueue *queue, ElemType *e){
 if(queueEmpty(queue)){
  printf("空的链队列\n");
  return false;
 }
 LNode* dumpElem = queue->front;
 *e = dumpElem->data;
 queue->front = dumpElem->next;
 free(dumpElem);
 return true;
}

void ShowInfo(LinkedQueue queue){
 LNode* p = queue.front;
 int order = 1;
 while(p != queue.rear){
  printf("当前第 %d 个元素的值为: %c \n", order++, p->data);
  p = p->next;
 }
 printf("当前第 %d 个元素的值为: %c \n", order, p->data);
 printf("\n\n");
}
```
