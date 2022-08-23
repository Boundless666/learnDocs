---
sidebar_position: 1.0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 数据结构引言

整理目前学过的一些知识，希望对你我都有所帮助

**本文档所有代码运行环境如下:**
> 操作系统:     **ubuntu16.04 i686**
>
> c语言编译器:  **gcc 5.4.0**

推荐一些参考网站:
> [c语言语法文档](https://wangdoc.com/clang/intro.html)

**gcc 编译常用命令**
<Tabs
  defaultValue="one"
  values={[
    {label: '基本使用', value: 'one'},
    {label: '懒癌', value: 'two'}
  ]}>
  <TabItem value="one">

      //gcc编译文件(source.c)并链接指令
      gcc source.c -o source

      # 在当前目录下执行
      ./source
  </TabItem>
  <TabItem value="two">

      # 默认生成可执行文件名为: a.out
      gcc source.c
      
      # 在当前目录下执行
      ./a.out
  </TabItem>
</Tabs>
