# 单链表

```c
int main(){
    int n = 200;
    float c = 0;
    if(n > 500 ){
        c = 0.15;
    }
    else{
        if(n > 100){
            c = 0.75;
        }
        else{
            if(n > 50){
                c = 0.05;
            }
        }
    }
}
```
