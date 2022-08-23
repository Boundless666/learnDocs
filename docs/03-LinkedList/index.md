# 单链表


```c
#include <stdio.h>
#include <stdlib.h>

typedef struct LNode{
        char* data;
        struct LNode* next;
}Node, *LinkedList;

void InitLinkedList(LinkedList l);

int main(){
        LinkedList l;
        InitLinkedList(l);
}

void InitLinkedList(LinkedList l){
        l = (Node*) malloc(sizeof(Node));
        if(l == NULL){
                printf("初始化失败!!! 程序结束运行\n");
                exit(0);//stdlib库中的函数  退出程序
        }
        l->next = NULL;
        l->data = NULL;
        printf("初始化成功\n");//stdio库中的函数
}
```