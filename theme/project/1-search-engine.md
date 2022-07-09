---
title: 用Java写一个搜索引擎

index: 1
---







### 项目简介

用Java写一个简单的搜索引擎~

### 项目运行

1. 安装 Java 1.8环境、MySQL环境、IDEA
2. 新建一个MySQL数据库，使用data.sql和segmentation.sql创建数据表和分词表，暂时里面没有数据
3. 导入datase.csv数据集到data表中，作为我们的文档数据集
4. 运行segmentation/addAllSeg.java中的addSeg方法，会使用data表中的内容建立分词；在运行addAllSegUseSplit方法，用于创建DataSeg关系表，注意修改loop，data表中有多少数据就添加多少数据。
5. 打开浏览器或者postman等http请求工具，localhost:9090?search_use_split?word=欧美&pageNum=1

### 项目架构

Spring Boot，MySQL，MyBatis

### 功能说明

1. 支持搜索存文本信息。
2. 支持用户自定义关键字过滤。
3. 支持搜索结果按条目分页展示。
4. 实现了关联度算法，把关联度高的信息优先展示。
5. 支持“相关搜索”功能。

### 技术说明

1. 分词采用开源的[jieba](https://github.com/huaban/jieba-analysis)分词库。首先将[悟空数据集](https://wukong-dataset.github.io/wukong-dataset/download.html)所有的文本数据进行分词创建倒排索引，并建立分词-文本关系表。
2. 关联度算法最先采用在数据库里查询分词（关联词）的方式，现在优化成采用[tfidf算法](https://zh.m.wikipedia.org/zh-cn/Tf-idf)。
3. 关键词过滤类似谷歌搜索"-过滤词"的方式，使用正则匹配校验是否为过滤词，支持多个过滤词。
4. 为了加快搜索速度，使用布隆过滤、B+树索引以及分表来进行优化。
