---
title: 【Redis】学习指南

index: 1


---

# 【大厂校招生】如何学习Redis

> 所有本文章需要用到的资源，在最下面，关注公众号【汤姆还在写代码】，拉到最底下就可以看到相关链接

## 入门

### 一、学习API，了解如何简单使用

[菜鸟教程](https://www.runoob.com/redis/redis-tutorial.html)，看一两遍，动手下载运行一下就差不多了，非常简单。

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202207161643186.png)

### 二、系统性学习

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

