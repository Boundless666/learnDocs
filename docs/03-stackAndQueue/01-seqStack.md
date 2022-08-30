# 顺序栈

```c
#include <stdio.h>
#include <stdbool.h>

#define MAXSIZE 10
#define EMPTY -1

typedef char ElemType;

typedef struct{
 ElemType data[MAXSIZE];
 int top;
}SeqStack;

void InitStack(SeqStack *stack);
bool Push(SeqStack *stack, ElemType e);
bool Pop(SeqStack *stack, ElemType *e);
bool GetTop(SeqStack *stack, ElemType *e);
void SuccessPrint(bool status, ElemType e);

int main(){
 SeqStack stack;
 InitStack(&stack);
 Push(&stack, 'D');
 Push(&stack, 'C');
 Push(&stack, 'B');
 Push(&stack, 'A');
 
 ElemType result;
 bool status;
 status = GetTop(&stack, &result);
 SuccessPrint(status, result);
 status = Pop(&stack, &result);
 SuccessPrint(status, result);
 
 status = Pop(&stack, &result);
 SuccessPrint(status, result);
 
 return 0;
}

bool stackEmpty(SeqStack *stack){
 if(stack->top == EMPTY){
  return true;
 }
 return false;
}

void InitStack(SeqStack *stack){
 stack->top = EMPTY;
}

bool Push(SeqStack *stack, ElemType e){
 if(stack->top+1 == MAXSIZE){
  printf("栈已存满\n");
  return false;
 }
 stack->top = stack->top + 1;
 stack->data[stack->top] = e; //两行合一: stack->data[--stack->top];
 return true;
}

bool Pop(SeqStack *stack, ElemType *e){
 if(stackEmpty(stack)){
  printf("空栈\n");
  return false;
 }
 *e = stack->data[stack->top];
 stack->top = stack->top - 1; //两行合一: *e = stack->data[stack->top--];
 return true;
}

bool GetTop(SeqStack *stack, ElemType *e){ 
 if(stackEmpty(stack)){
  printf("空栈\n");
  return false;
 }
 *e = stack->data[stack->top];
 return true;
}

void SuccessPrint(bool status, ElemType e){
 if(status){
  printf("元素值为:%c \n", e);
 }else{
  printf("执行失败!\n");
 }
}
```
