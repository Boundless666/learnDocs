# 栈的应用--括号匹配

在我们使用的编程语言中，大部分语言的语法都会有括号的出现  而且都是成对出现

//比如**()、[]、{}**

当在编辑器里面编写代码时，如果你输入的括号不匹配，编辑器就会检测到并且有智能提示，比如某一块变红。

而这个检测机制  可以用栈很容易的实现出来

> 核心思想：
>
> 遇到左半边括号**入栈**
>
> 遇到右半边括号**出栈**   出栈元素 与这个右半边括号**配对**,配对成功就继续   失败则表示括号异常

```c
#include <stdio.h>
#include <stdbool.h>

#include "linkedStack.h"//这是引入之前写的链栈结构  你可以引入自己实现的栈结构
bool BracketCheck(char str[], int length);

int main(){
 char str[] = {'(','(','[',']',')',')',']'};
        bool status;
        status = BracketCheck(str, sizeof(str) / sizeof(char));
        printf("状态: %d \n", status);
        return 0;
}

bool BracketCheck(char str[], int length){
 Stack stack;
 InitStack(&stack);
 for(int i=0; i<length; i++){
  if(str[i]=='(' || str[i]=='[' || str[i]=='{'){//是左括号  入栈操作
   Push(&stack, str[i]);
   continue;
  }
  if(StackEmpty(&stack)){
   printf("匹配失败,括号异常\n");
   return false;
  }
  ElemType top;
  Pop(&stack, &top);//取出栈顶的元素  入栈的肯定是左半边的括号  (、[、{ 其中一个
  if(top=='(' && str[i] != ')'){
   return false;
  }
  if(top=='[' && str[i] != ']'){
   return false;
  }
  if(top=='{' && str[i] != '}'){
   return false;
  }
  
 } 
 return StackEmpty(&stack);//如果栈中还有元素  也表示括号没有全部匹配完成
}
```
