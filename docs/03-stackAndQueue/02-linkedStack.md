# 链栈

**linkedStack.c**

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
 LNode* top;
}Stack;

void InitStack(Stack *stack);
bool Push(Stack *stack, ElemType e);
bool Pop(Stack *stack, ElemType *e);
bool GetTop(Stack *stack, ElemType *e);
bool StackEmpty(Stack *stack);
void ShowInfo(Stack stack);
void SuccessPrint(bool status, ElemType e);

int main(){
 Stack stack;
 InitStack(&stack);
 Push(&stack, 'D');
 Push(&stack, 'C');
 Push(&stack, 'B');
 Push(&stack, 'A');
 ShowInfo(stack);

 ElemType result;
 bool status;
 status = GetTop(&stack, &result);
 printf("操作状态: %d 返回值: %c \n", status, result);
 status = Pop(&stack, &result);
 printf("操作状态: %d 返回值: %c \n", status, result);
 status = Pop(&stack, &result);
 printf("操作状态: %d 返回值: %c \n", status, result);
 status = Pop(&stack, &result);
 printf("操作状态: %d 返回值: %c \n", status, result);
 status = Pop(&stack, &result);
 printf("操作状态: %d 返回值: %c \n", status, result);
 status = Pop(&stack, &result);
 printf("操作状态: %d 返回值: %c \n", status, result);
 status = Pop(&stack, &result);
 printf("操作状态: %d 返回值: %c \n", status, result);
 
 return 0;
}


bool StackEmpty(Stack *stack){
 if(stack == NULL){
  printf("请先完成初始化,程序退出\n");  
  exit(0);
 }

 if(stack->top == NULL){
  return true;
 }
 return false;
}

void InitStack(Stack *stack){
 stack->top = NULL;
}


LNode* createNode(){
 LNode *node = (LNode*)malloc(sizeof(LNode));
 if(node == NULL){
  printf("内存申请失败,程序退出\n");
  exit(0);
 }
 node->next = NULL;
 return node;
}

bool Push(Stack *stack, ElemType e){
 if(stack == NULL){
  printf("请先初始化\n");
  return false;
 }
 LNode *newElem = createNode();
 newElem->data = e;
 newElem->next = stack->top;
 stack->top = newElem;
 return true; 
}

bool Pop(Stack *stack, ElemType *e){
 if(StackEmpty(stack)){
  printf("空栈,已经没有任何元素了\t");
  return false;
 }
 LNode *dumpElem = stack->top;
 *e = dumpElem->data;
 stack->top = dumpElem->next;
 free(dumpElem);
 return true;
}

bool GetTop(Stack *stack, ElemType *e){
 if(StackEmpty(stack)){
  printf("空栈,已经没有任何元素了\n");
  return false;
 }
 *e = stack->top->data;
 return true;
}

void ShowInfo(Stack stack){
 LNode *p = stack.top;
 int order = 1;
 while(p != NULL){
  printf("当前第 %d 个元素的值为: %c \n", order++, p->data);
  p = p->next;
 }
 printf("\n\n");
}

void SuccessPrint(bool status, ElemType e){
 if(status){
  printf("当前元素为: %c \n", e);
 }
 else{
  printf("执行操作失败!\n");
 }
}
```
