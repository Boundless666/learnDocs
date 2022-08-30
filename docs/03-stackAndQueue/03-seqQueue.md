# 顺序队列

```c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAXSIZE 10

typedef char ElemType;

typedef struct{
 ElemType data[MAXSIZE];
 int front,rear;
 int length;
}SeqQueue;

void InitQueue(SeqQueue *queue);
bool EnQueue(SeqQueue *queue, ElemType e);
bool DeQueue(SeqQueue *queue, ElemType *e);
void ShowInfo(SeqQueue queue);

int main(){
 SeqQueue queue;
 InitQueue(&queue); 
 EnQueue(&queue, 'A');
 EnQueue(&queue, 'B');
 EnQueue(&queue, 'C');
 EnQueue(&queue, 'D');
 EnQueue(&queue, 'E');
 EnQueue(&queue, 'F');
 EnQueue(&queue, 'G');
 EnQueue(&queue, 'H');
 EnQueue(&queue, 'I');
 EnQueue(&queue, 'J');
 EnQueue(&queue, 'K');//第11个

 ShowInfo(queue);

 ElemType result;
 bool status;
 status = DeQueue(&queue, &result);
 printf("操作状态: %d 返回值: %c \n", status, result);
 status = DeQueue(&queue, &result);
 printf("操作状态: %d 返回值: %c \n", status, result);

 ShowInfo(queue);
 
 return 0;
}

bool queueEmpty(SeqQueue *queue){
 if(queue->length == 0){
  return true;
 } 
 return false;
}

bool queueFull(SeqQueue *queue){
 int rnext = (queue->rear + 1) % MAXSIZE;
 if(rnext == queue->front && queue->length == MAXSIZE){
  return true;
 }
 return false;
}

void InitQueue(SeqQueue *queue){
 queue->front = queue->length = 0;
 queue->rear = -1;
}

bool EnQueue(SeqQueue *queue, ElemType e){
 if(queueFull(queue)){
  printf("队列已满\n");
  return false;
 }
 queue->rear = (queue->rear + 1) % MAXSIZE;
 queue->data[queue->rear] = e;
 queue->length++;
 return true;
}

bool DeQueue(SeqQueue *queue, ElemType *e){
 if(queueEmpty(queue)){
  printf("队列为空\n");
  return false;
 }
 *e = queue->data[queue->front];
 queue->front = (queue->front + 1) % MAXSIZE;
 queue->length--;
}


void ShowInfo(SeqQueue queue){
 int front = queue.front;
 int length = queue.length;
 int order = 1;
 while(length > 0){
  printf("队列中第 %d 个元素的值为: %c \n", order++, queue.data[front]);
  front = (front + 1) % MAXSIZE;
  length--;
 }
 printf("\n\n");
}
```
