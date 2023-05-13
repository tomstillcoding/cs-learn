---
title: MySQL

index: 1

---

# 【大厂校招生】如何学习MySQL

> 所有本文章需要用到的资源，在最下面，关注公众号【汤姆同学】，拉到最底下就可以看到相关链接

## 一、为什么要学习？

没办法，如果搞后台开发，工作中大概率会用到，而面试基本上是必考知识点，所以肯定也要学。

如果你做前端什么的别的工种，不需要和数据库打交道的话，不学这个也行。但是互联网里面很大一部分同学基本都是做的后台/后端开发，并且在科班上课的时候，虽然是以数据库系统理论知识为主，但是在介绍理论的实践时候，通常都会选择MySQL作为例子，实践课上也大概率需要用到MySQL，如果用到微软的Access什么的，可能是因为老师的课件太久没更新了，还是不要跟着老师学比较好。

当然，正式一点地说，后端研发岗位，数据库的知识是必须的，所谓后端，做的不过就是增删改查，高级一点的不过就是在更快、更稳定地增删改查而已，而增删改查最终落地到硬盘，用到数据库是必然的。

## 二、学会使用

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

如果你想额外去练习MySQL里面使用的SQL语句，可以直接去[力扣leetcode的数据库题目](https://leetcode.cn/problemset/database/)这里去练习，不过我其实并不是特别推荐，因为MySQL必知必会中的内容就已经够了，刷题倒是没有太大的意义。

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202207282055535.png)

## 三、系统性学习

### （1）《数据库系统概念》

这本书纯粹属于科班基本功，科班在学习数据库相关知识的时候，绝对不是上来就学MySQL、Redis，而是先搞好理论，毕竟理论是混凝土，实践是水泥活，只要混凝土质量高，不管你搭建出来怎样的房子你都会觉得得心应手。

也许这里面的内容读起来比较枯燥，而且看起来对于找工作、面试并没有特别大的帮助，毕竟哪个工作多年的还要考你这些数据库系统概念理论呢。尽管如此，我还是把这本书推荐给你，相信你有时间的时候还是会选择重新回头看看数据库的发展历史、以及优秀的理论、论文，如果你有机会成为一名数据库内核开发工程师，那么阅读经典教材、阅读论文就是更加必要的事情了～

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202207282053788.png)

> 相关资源：
>
> [《数据库系统概念》](https://github.com/byterotate/Book/blob/master/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B3%BB%E7%BB%9F%E6%A6%82%E5%BF%B5%EF%BC%88%E4%B8%AD%E6%96%87%E7%AC%AC%E5%85%AD%E7%89%88%EF%BC%89.pdf)
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

## 四、“三巨头”

> 完成了前三步，基本上已经是对MySQL有了非常充分的认识和了解了，如果你真的还要深入，你在网上查资料，或者去问一些经验丰富的工程师，他们可能会给你推荐这三个资料，不过呢，这三本资料虽然各有各的侧重点，但是并不是特别适合新手，或者是学校里面的同学、校招生这样的人群，毕竟学习是永无止境的，如果在一个MySQL上花的时间太多了，可能你都变得没那么感兴趣了，看书的效率也许会下降不少，毕竟计算机这个专业还有很多其他非常有意思、有趣的东西可以去学习。



> 所以，这部分的内容，因人而异，愿意阅读的话，可以挑选感兴趣的来看看～

### （1）《MySQL技术内幕：InnoDB存储引擎》

学完《MySQL是怎样运行的》，你肯定知道MySQL底层的存储引擎是可以更换的，并且我们大部分时间可能都花在了学习使用InnoDB存储引擎上面，因此这本书就着重给你讲解InnoDB存储引擎中的原理。

相比于前面的学习，这里偏重于存储引擎，有的和《MySQL是怎样运行的》重叠，有的并没有，我一直是觉得，书能多看就多看，多看几本书讲解同样的内容，也许你会有新的理解和认识，对于之前错误认识的纠错，或是加深对某些概念的理解，并且在有了之前学习的基础之后，遇到已经熟悉的内容，就完全可以跳过，只看那些其他书没有的知识就好。

这本书和《高性能MySQL》一样，经常出现在各个MySQL学习资料推荐上。

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202208042309967.png)

> [MySQL技术内幕：InnoDB存储引擎(GitHub)](https://github.com/wususu/effective-resourses/blob/master/%E6%95%B0%E6%8D%AE%E5%BA%93/MySQL%E6%8A%80%E6%9C%AF%E5%86%85%E5%B9%95(InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E)%E7%AC%AC2%E7%89%88.pdf)
>
> [MySQL技术内幕：InnoDB存储引擎(GitHub)](https://awesome-programming-books.github.io/mysql/MySQL%E6%8A%80%E6%9C%AF%E5%86%85%E5%B9%95%EF%BC%9AInnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.pdf)
>
> [MySQL技术内幕：InnoDB存储引擎(博客)](http://itmyhome.com/mysql-innodb/mysql-innodb.pdf)
>
> [MySQL技术内幕：InnoDB存储引擎(网盘)](https://www.manongbook.com/download/365.html)

### （2）《高性能MySQL》

这本书就比较蛋疼了。

怎么说呢，你要明白它的标题，定义得非常清楚，这不是一本基础书，不是让你学会使用MySQL，也不是让你很熟练地使用MySQL的，更不会简单聊聊原理，或者帮助你解决面试，可以说它的主题就是：优化与设计，极致榨干使用MySQL的性能。

那不就对了，咱们是来学习使用的，还远远不到解决MySQL的性能问题的那个地步，等是时候了再看吧，看看它的目录，都已经聊到固态硬盘的基准测试和选型了，开发还是运维？你先记得看看[目录](https://book.douban.com/subject/23008813/)在考虑是不是要学习这本书......

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202208042321429.png)

> [高性能MySQL](https://github.com/caijc00/programmer_bookshelf_cn/blob/master/%E6%95%B0%E6%8D%AE%E5%BA%93/%E9%AB%98%E6%80%A7%E8%83%BDMySQL%20%E7%AC%AC3%E7%89%88%20%E4%B8%AD%E6%96%87%20.pdf)
>
> [高性能MySQL](https://juejin.cn/post/6976290766876311559)
>
> [高性能MySQL](https://www.manongbook.com/download/47.html)

### （3）《MySQL实战45讲》

为了防止打广告的嫌疑，我在这里就不去说是哪里的课程了，毕竟是需要知识付费的，价格也不低。

这个资料偏实战，前半部分比较基础，实际上学完《MySQL是怎样运行的》基本上就够了，后半部分个人感觉有点运维，或者说DBA？再或者说比较偏优化？有一些实际生产中遇到的例子，比较有意思，但是如果是咱们在校生看的话，比较容易陷入纸上谈兵的漩涡。

也许将来有机会实际工作了，上手MySQL的使用了，需要你实现具体的需求了，再来学习可能会更适合。

题外话：最近45讲的作者，就是下面这位大牛，深陷借钱风波啊，网上的人说，借了很多身边的人钱，包括下属、朋友的钱，来做投资，结果负债累累，大家投资也要谨慎啊，杠杆虽好，注意控制风险，找人借钱相当于透支信用，并没有明确止损价格，很容易就是一念成魔了。

![](https://images-tomcode-1258913748.cos.ap-guangzhou.myqcloud.com/202208042301739.png)

> [MySQL实战45讲(需要购买)](https://time.geekbang.org/column/intro/100020801)
>
> [MySQL实战45讲(嘘!)](https://funnylog.gitee.io/mysql45/)
