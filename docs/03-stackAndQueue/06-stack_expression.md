# 栈的应用--表达式处理

对这样一个中缀表达式  **2+(5-3)*2**  怎么处理*ps:我们日常使用的就是中缀表达式*

核心有两点

1. 将中缀表达式 转为 后缀表达式
2. 对后缀表达式进行运算

中缀转后缀

```c
bool isOperationNum(char c){
 if(isdigit(c) != 0){//include <ctype.h>
  return true;
 }
 return false;
}

bool isOperator(char c){
 if(c == '+' || c=='-' || c=='*' || c=='/'){
  return true;
 }
 return false;
}

int getOperatorLevel(char c){
 if(c=='+' || c=='-'){
  return 1;
 } 
 if(c=='*' || c=='/'){
  return 2;
 }
 return -1;
}

bool compare(char left, char right){
 if(getOperatorLevel(left) >= getOperatorLevel(right)){
  return true;
 }
 return false;
}

/*
中缀表达式 转 后缀表达式
1.遇到操作数  直接拼接在后缀表达式后面
2.遇到界限符 ( )   遇到 ( 就放入栈中,遇到 ) 则依次取出栈中的元素,直到遇到元素为 ( 为止, ( 不加入后缀表达式
3.遇到运算符 + - * / 依次弹出栈中优先级高于或等于当前元素的元素 直到遇到元素为 ( 或者栈空为止, ( 不加入后缀表达式   最后再将此运算符入栈
*/
void GetPostfix(char *expression, char *result){
 Stack stack;
 InitStack(&stack);
 int length = strlen(expression); 
 char tmp;
 int index = 0;
 for(int i=0; i<length; i++){
  if(isOperationNum(expression[i])){
   result[index++] = expression[i];
   continue;
  }
  if(expression[i] == '('){
   Push(&stack, expression[i]);
   continue;
  }
  if(expression[i] == ')'){
   Pop(&stack, &tmp);
   while(tmp != '('){
    result[index++] = tmp;
    Pop(&stack, &tmp);
   }
   continue;
  }
  if(isOperator(expression[i])){
   GetTop(&stack, &tmp);
   while(!StackEmpty(&stack) && compare(tmp, expression[i]) ){
    Pop(&stack, &tmp);
    if(tmp == '('){
     break;
    }
    result[index++] = tmp; 
   }
   Push(&stack, expression[i]);
  }

 }
 while(StackEmpty(&stack) == false){
  Pop(&stack, &tmp);
  result[index++] = tmp;
 }
}
```

##### 对后缀表达式运算

```c
int add(char left, char right){
 return (int)(left-'0') + (int)(right-'0');
}
int sub(char left, char right){
 return (int)(left) - (int)(right);
}
int mul(char left, char right){
 int result = ((int)(left-'0')) * ((int)(right-'0'));
 return result;
}
int div(char left, char right){
 return ((int)(left-'0')) / ((int)(right-'0'));
}
/*
对后缀表达式进行运算处理
1.遇到操作数  入栈
2.遇到界限符  经过中缀转后缀的处理  后缀表达式不会含有界限符
3.遇到运算符  弹出栈中的两个元素进行运算   注意后弹出的那个作为被操作数--->  top2 运算符 top1
*/
int CalculationPostfix(char *expression){
 Stack stack;
 InitStack(&stack);
 int length = strlen(expression);
 char left, right,result;
 for(int i=0; i<length; i++){
  if(isOperationNum(expression[i])){
   Push(&stack, expression[i]);
   continue;
  }
  if(isOperator(expression[i])){
   Pop(&stack, &right);//注意这里 先弹出的是运算符 右边的计算数
   Pop(&stack, &left);
   if(expression[i] == '+'){
    result = add(left, right) + '0';
   }else if(expression[i] == '-'){
    result = sub(left, right) + '0';
   }else if(expression[i] == '*'){
    result = mul(left, right) + '0';
   }else{
    result = div(left, right) + '0';
   }
   Push(&stack, result);
  }
 }
 Pop(&stack, &result);
 return (int)(result-'0');
}
```
