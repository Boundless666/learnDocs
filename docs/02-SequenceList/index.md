import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 顺序表

顺序存放，每个 **数据项** 在内存地址中是连续存放的

<Tabs>
    <TabItem value="define" label="宏定义" default>

```c
    #define LIST_INIT_SIZE 8        //线性表存储空间初始分配量
    #define LIST_INCREMENT_SCALE 2  //线性表存储空间的分配增量比例
```

  </TabItem>

  <TabItem value="struct" label="数据项">

```c
    typedef char ElemType;  //定义数据项类型

    typedef struct{
        ElemType *data;
        int length;
        int listsize;
    }SeqList;

```

  </TabItem>
  <TabItem value="init" label="初始化">

```c
    void InitList(SeqList *l){
        l->data = (ElemType*) malloc(sizeof(ElemType)*LIST_INIT_SIZE);
        l->length = 0;
        l->listsize = LIST_INIT_SIZE;
    }
```  

  </TabItem>
  <TabItem value="insert" label="插入操作">

```c
    void ListInsert(SeqList *l, int order, ElemType e){
        if(order<1 || (order > l->length+1) ){
                printf("位序--%d--超出范围\n",order);
                return;
        }
        if(l->length == l->listsize){
                printf("顺序表存储空间已满\n");
                return;
        }

        for(int i=l->length; i>=order; i--){
                l->data[i] = l->data[i-1];
        }
        l->data[order-1] = e;
        l->length = l->length+1;
}

```

  </TabItem>

</Tabs>

##### 完整代码

```c
#include <stdio.h>
#include <stdlib.h>

#define LIST_INIT_SIZE 8        //线性表存储空间初始分配量
#define LIST_INCREMENT_SCALE 2  //线性表存储空间的分配增量比例

typedef char ElemType;  //定义数据项类型

typedef struct{
        ElemType *data;
        int length;
        int listsize;
}SeqList;


void InitList(SeqList *l);

void visit(ElemType item);
void ListTraverse(SeqList l, void (*visit)(ElemType) );
void ListInsert(SeqList *l, int order, ElemType e);

int main(){
        SeqList l;
        InitList(&l);
        ListInsert(&l, 1, 'A');
        ListInsert(&l, 2, 'B');
        ListInsert(&l, 4, 'C');

        ListTraverse(l, visit);

        return 0;
}

//初始化
void InitList(SeqList *l){
        l->data = (ElemType*) malloc(sizeof(ElemType)*LIST_INIT_SIZE);
        l->length = 0;
        l->listsize = LIST_INIT_SIZE;
#include <stdio.h>
#include <stdlib.h>

#define LIST_INIT_SIZE 8        //线性表存储空间初始分配量
#define LIST_INCREMENT_SCALE 2  //线性表存储空间的分配增量比例

typedef char ElemType;  //定义数据项类型

typedef struct{
        ElemType *data;
        int length;
        int listsize;
}SeqList;


void InitList(SeqList *l);

void visit(ElemType item);
void ListTraverse(SeqList l, void (*visit)(ElemType) );
void ListInsert(SeqList *l, int order, ElemType e);

int main(){
        SeqList l;
        InitList(&l);
        ListInsert(&l, 1, 'A');
        ListInsert(&l, 2, 'B');
        ListInsert(&l, 4, 'C');

        ListTraverse(l, visit);

        return 0;
}

//初始化
void InitList(SeqList *l){
        l->data = (ElemType*) malloc(sizeof(ElemType)*LIST_INIT_SIZE);
        l->length = 1;

```
