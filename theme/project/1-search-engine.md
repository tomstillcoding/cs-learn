---
title: 如何用Java写一个搜索引擎？

index: 1


---

## 项目地址

GitHub: [tomstillcoding/cs-learn-project](https://github.com/tomstillcoding/cs-learn-project/tree/main/search-project)

## 项目简介

原项目地址：**[bytedance-youthcamp-search-engine](https://github.com/optimjie/bytedance-youthcamp-search-engine)**

当初小明同学问我，如果做一个项目的话，是做一个抖音App出来呢，还是做一个搜索引擎呢？

我说如果工作内容偏向后端的话，可能做搜索引擎会好一些吧，复杂度什么的可能一开始就比短视频App要高一些。那时候还不知道原来这是他们的大作业，而且小明最后选择了一条艰难的路——还是做抖音吧，毕竟居然字节都把抖音的App客户端提供给他们了，那就不用写前端啦！

大作业提交完，小明又来找我了，他非常后悔地说：“早知道选搜索引擎了，一共都没几个人选搜索引擎当大作业，都被搜索引擎吓到了，大家都不敢搞！ =.=  然后小明又建议我，要不你讲一下人家这个搜索引擎怎么写的吧？我看人家得了第一名，肯定写得狠不戳，你讲讲这个模块是啥意思呗~

于是就有了这期视频，花了一天时间，把原项目看明白，然后拆掉所有做视频不需要的代码，最后写了这个文档，出了一期视频，最后变成了这个模样，《一个搜索引擎的最小代码集合》，跟着这个撸一遍，你要说你还不明白原理，我是绝对不相信的  ^ ^

## 项目运行 

### 环境

1. Java 18 (我用的IDEA提供的OpenJDK version 18.0.1)
2. MySQL 8(我用的MySQL 8.0.27-arm64)
3. 就这俩，没别的啦，其他都是些自己的工具

### 工具

1. IDE：IDEA
2. MySQL客户端：MySQL WorkBench / Navicat for MySQL
3. Browser: Chrome

### 相关知识

Java Spring Mybatis简单应用方式、Controller、DAO、Service架构设计模式、布隆过滤器、分词、关联度算法等等等等，其实也不用太在意，看到没听说过，咩见过的东西，直接搜一下就可以了

### 运行方式

1. 下载项目到本地，刷新Maven 依赖(pom.xml)
2. 修改项目中的application.property，里面的MySQL用户名、密码等等配置，按照你的环境去配置（注意这里的监听端口，默认是9091）
3. 用MySQL客户端连接上你本地的MySQL服务，建数据库database：可以叫做search-engine，选择使用这张表
4. 运行两个sql文件，然后将提供的数据集导入data表中
5. 运行DatabaseInitializer里面的InitSegmentTable，然后运行initDataSegRelationTable这两个测试函数（用来分析data表中的内容，然后建立分词表Segment，以及数据分词之间的关系表）
6. 随后运行Application
7. 测试关键词查询功能（可分词）
   1. 打开浏览器或者postman等http请求工具（curl也行=。=），请求：localhost:9091/search?keyword=欧美&pageNum=1，代表在搜索引擎中输入关键词“欧美”，请求第一页的结果。
   2. keyword=连衣裙，再次查询，注意效果
   3. keword=欧美连衣裙，再次查询，注意效果
8. 结束~

## 项目架构

Spring Boot，MySQL，MyBatis

用到了相关的数据集以及分词工具

## 功能说明

1. 支持搜索存文本信息。
3. 支持搜索结果按条目分页展示。
4. 实现了关联度算法，把关联度高的信息优先展示。

## 技术说明

1. 分词采用开源的[jieba分词库](https://github.com/huaban/jieba-analysis)。首先将[悟空数据集](https://wukong-dataset.github.io/wukong-dataset/download.html)所有的文本数据进行分词创建倒排索引，并建立分词-文本关系表。
2. 关联度算法直接采用[tfidf(来自jieba分词库)](https://zh.m.wikipedia.org/zh-cn/Tf-idf)。
3. 使用布隆过滤、分表来进行简单优化。

## 相关资料

### 原理

1、将爬虫爬来的数据放入data表中，从data表中处理数据生成segment表

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202207092059326.png)

2、用data表和segment表生成data_segment_relation表

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202207092105642.png)

3、一次搜索：欧美连衣裙

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202207092106786.png)

### 增强方向

1. 性能方面：增加各种加快查询速度的、处理速度的优化，反正就是快！更快！
2. 功能方面：
   1. 爬虫：真实的搜索引擎，数据肯定是要不断更新的，不断喂给本地的数据库的，也就是说搜索引擎搜出来的东西，内容+链接怎么得到呢？其实就是爬虫，不断爬每个网页，以及获取网页里面的url，继续爬，继续喂到数据库，源源不断，那么就需要一个专门的爬虫服务器去做这件事情了，所以为啥百度最近几年很伤心呢，因为互联网越来越封闭了，各个app全部都在自己的生态玩，根本不给你爬虫的机会，你爬不到我的网站，那你这搜索引擎有啥用呢？
   2. 推荐：搜出来的结果排序方式，项目是相关度搜出来排序一次，那假设有个网站给我钱，说让我把搜索结果里面的它搞到第一去，那是不是可以帮帮他呢，广告挣钱钱？或者说，千人千面？每个用户同样的关键词搜出来的东西不一样？个性化推荐？
   3. 数据处理：项目里是一次性把数据源（data表）中的内容进行处理，多出来了分词表和分词数据关系表，那要是有几百几千个TB的数据，要你快速处理完，生成分词和分词数据关系？那就涉及到并分布式并行计算了，嗯？又看到了CMU分布式系统设计这门课了？第一个大作业就是实现Google的MapReduce论文，真是流畅的学习计划啊 ( ^‐^)_且~~