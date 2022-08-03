---
title: MySQL

index: 1


---

# 【大厂校招生】如何学习MySQL

> 所有本文章需要用到的资源，在最下面，关注公众号【汤姆还在写代码】，拉到最底下就可以看到相关链接

## 一、学会使用

### （1）《MySQL必知必会》⭐️⭐️⭐️

跟着这本书中的内容，一定要学会安装MySQL，并且实际使用MySQL数据库，跟着书上介绍的命令、语言去实际使用MYSQL即可，这些命令不需要你背诵，而是知道它们都是有什么功能，能实现什么样的事情。

毕竟是学会使用的阶段，因此主要是练习使用MySQL，什么原理之类的都不在这一步去做，

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202207282043758.png)

> 相关资源：
>
> [MySQL必知必会PDF查看](https://awesome-programming-books.github.io/mysql/MySQL%E5%BF%85%E7%9F%A5%E5%BF%85%E4%BC%9A.pdf)
>
> [MySQL必知必会（文字版）PDF](https://github.com/ShawnLeee/the-book/blob/master/MySQL%E5%BF%85%E7%9F%A5%E5%BF%85%E4%BC%9A%EF%BC%88%E6%96%87%E5%AD%97%E7%89%88%EF%BC%89.pdf)
>
> [MySQL必知必会pdf](https://juejin.cn/post/6927618989518487566)

### （2）LeetCode刷题

**(不推荐，不过是个刷题的去处)**

如果你想额外去练习MySQL里面使用的SQL语句，可以直接去**[力扣leetcode的数据库题目](https://leetcode.cn/problemset/database/)**这里去练习，不过我其实并不是特别推荐，因为MySQL必知必会中的内容就已经够了，刷题倒是没有太大的意义。

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202207282055535.png)

## 二、系统性学习

### （1）《数据库系统概念》

这本书纯粹属于科班基本功，科班在学习数据库相关知识的时候，绝对不是上来就学MySQL、Redis，而是先搞好理论，毕竟理论是混凝土，实践是水泥活，只要混凝土质量高，不管你搭建出来怎样的房子你都会觉得得心应手。

也许这里面的内容读起来比较枯燥，而且看起来对于找工作、面试并没有特别大的帮助，毕竟哪个工作多年的还要考你这些数据库系统概念理论呢。尽管如此，我还是把这本书推荐给你，相信你有时间的时候还是会选择重新回头看看数据库的发展历史、以及优秀的理论、论文，如果你有机会成为一名数据库内核开发工程师，那么阅读经典教材、阅读论文就是更加必要的事情了～

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202207282053788.png)

> 相关资源：
>
> [byterotate/Book](https://github.com/byterotate/Book/blob/master/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B3%BB%E7%BB%9F%E6%A6%82%E5%BF%B5%EF%BC%88%E4%B8%AD%E6%96%87%E7%AC%AC%E5%85%AD%E7%89%88%EF%BC%89.pdf)
>
> [《数据库系统概念》](https://study.guoch.xyz/Books/%E6%9C%BA%E6%A2%B0%E5%B7%A5%E4%B8%9A%E5%87%BA%E7%89%88%E7%A4%BE%E9%BB%91%E7%9A%AE%E4%B9%A6/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B3%BB%E7%BB%9F%E6%A6%82%E5%BF%B5%20%20%E5%8E%9F%E4%B9%A6%E7%AC%AC6%E7%89%88_13013764.pdf?preview)
>
> [《数据库系统概念》](https://www.manongbook.com/download/147.html)

### （2）《MySQL是怎样运行的》⭐️⭐️⭐️

当然了，学完了《MySQL必知必会》，知道MySQL怎么使用之后，下一步当然是要去了解它的实现原理了，不管是面试上会考这些，还是作为一名工程师要去对原理有好奇心，这本书都是一个非常不错的选择。

不要看着这本书的封面，似乎是一本给小朋友看的书，**或者是看起来就一点也不硬核**，然而实际上这本书对原理的梳理与介绍是相当务实的，其实真的要系统性学习MySQL不就是学这些东西吗，举一些例子，我们在《数据库系统概念》里面了解到了关系型数据库的强大、严谨以后，要实现一个这样的关系型数据库，要让事务符合ACID性质，那么我们应当如何去实现？我们看到的一条条数据，在底层是如何存储在我们的硬盘中？数据库相对于我本地全部写入txt文本，写一个Excel表，又有哪些优势？

在这本书里面，你能看到非常详细的原理介绍，而面试基本也就是考这些内容而已。

看看这里面会讲解的东西吧：SQL语句如何从你的输入到服务器执行，最后再返回给你结果？具体经历了哪些步骤？索引如何实现？为何很快，有哪些索引？事务的隔离？ACID性质？表锁、行锁、间隙锁、共享锁、排他锁都是什么？redolog，binlog，undolog是什么？如何保证恢复？如何保证数据库可靠？什么是基准测试？如何通过workbench基准测试来优化我们的查询？

其实说来说去，就这些而已。

真是一本不错的书。

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202207282111220.png)

> 相关资源链接：
>
> [《MySQL是怎样运行的》](https://relph1119.github.io/mysql-learning-notes/#/)
>
> [《MySQL是怎样运行的》](https://share.weiyun.com/tVcnGDKx)
>
> [《MySQL是怎样运行的》](https://www.manongbook.com/download/2225.html)

### （3）《MySQL技术内幕：InnoDB存储引擎》⭐️⭐️⭐️



### （4）《高性能MySQL》

[《Redis设计与实现》](https://book.douban.com/subject/25900156/)

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202207161645480.png)

系统性学习Redis设计与实现的方式，可以阅读的书就是《Redis》设计与实现，这本书在入门知识讲解和源码展示之间把控得很好，非常适合入门的时候阅读，知识图谱如下：

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202207161634329.png)

[Redis设计与实现思维导图下载](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/Redis知识点.xmind)

### 三、Redis断点调试、源码简单阅读与验证

1、下载 [redis](https://github.com/redis) 官方代码

2、使用 make 或者使用 Clion 构建，推荐使用Clion，后续调试也比较方便

3、阅读代码、验证代码、改造代码

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202207161715686.png)

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202207161715784.png) 

## 进阶（看个人兴趣）

### 一、通过工作、实践来利用Redis实现一些功能模块：

1、比如Redis实现消息队列的方式、针对业务做性能优化、配合数据库的缓存策略、如何解决一致性问题、解决生产场景中雪崩、击穿、穿透等难题、Redis实现分布式锁、集群和分布式相关问题、脑裂、秒杀、并发等。

要么只有工作之后写了相关的代码，才能说你自己真正掌握了这一条，要么就学一些网上的文章吧，只能说了解了一下这些难题，但是并没有实际的生产经验，不过校招生无所谓，校招生怎么可能有生产经验呢，所以只是学习学习就好。确实有一些不错的网上要花钱的课，可以搜一下， 比如《Redis核心技术与实战》

2、  Redis仅作为方案设计中的一环，比如说在手机QQ中的频道功能，也就是类似Discord的频道、分tag、话题的方式，如何同时支持十万人同频道聊天，缓存、消息队列在这样的需求中所处的位置在什么地方？如何用数据给予方案证明，业内常见的实现方案是否有可以借鉴的地方，当然这只不过是在纸上谈兵，但是作为了解、学习来说还是很重要的。

### 二、魔改Redis源码，实现某些特定的需求

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202207161716970.png)

1、魔改Redis-client，各种语言都有，C++、Python、Java，都可以去魔改客户端，更熟悉Redis了。

2、阅读Github Redis仓库中的Issues以及Pull requests，有很多开源社区需要解决的问题，以及对用户的答疑都会放在这个地方，要么可以进入开源社区，针对这些问题去答疑，刷存在感，一定程度后许多开源项目的负责人会邀请你进入相关频道，比如Discord等，就有机会真正去改造开源项目。

3、针对业务去自己学习Redis源码，自己撸出来架构图，比如类之间的关系，UML、实体关系图、事件+时间驱动的时候，运行状态的流转形式，或者自己写文章，从点到面，先写文章介绍小的模块，慢慢把模块串起来，最后形成自己的知识体系和理解，也可以帮助到更多的人理解这样一个项目。

比如，先针对简单字符串，仔细阅读完所有源码（在看完《Redis设计与实现》之后，这一步应该相当简单），然后写文章仔细谈谈你的理解，String类型的设计与实现，最后甚至魔改，增加一种String的底层数据结构（前提是构思出一种能够解决的场景，比如某种特定情况下，比String的三种底层数据结构更高效的实现方式，时刻记住，没有银弹！）

## 资料

- [【菜鸟教程】Redis](https://www.runoob.com/redis/redis-tutorial.html)
- Redis设计与实现
  - [下载资源链接1](https://www.52doc.com/detail/8)
  - [下载资源链接2](https://www.manongbook.com/db/190.html)
  - [下载资源链接3](https://juejin.cn/post/6927836596402126855)
- [Redis源代码GitHub仓库](https://github.com/redis/redis)
- [Redis核心技术与实战](http://118.25.23.115/)

