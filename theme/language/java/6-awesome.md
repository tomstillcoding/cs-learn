---
title: Awesome Java
order: 10

---

> 本文档来自[java-awesome-cn](https://github.com/jobbole/awesome-java-cn)
> 该文档包含了Java语言涉及到的各种开源项目，是Java语言的百科全书
> 中文版由中文开源社区翻译而来，给大家免费整理使用，感恩开源

# java-awesome
> Java语言优秀资源整理，为项目落地加速🏃
>
> 在 [GitHub](https://github.com/jobbole/awesome-java-cn) 上稳定更新，觉得不错请点个 Star ❤️
>
> 如转载分享，请保留出处，谢谢 😆

## 古董级工具
### 这些工具伴随着Java一起出现，在各自辉煌之后还在一直使用
- [Apache Ant](http://www.importnew.com/apache-ant/)：基于XML的构建管理工具。[官网](http://ant.apache.org/)
- [cglib](http://www.importnew.com/cglib/)：字节码生成库。[官网](https://github.com/cglib/cglib)
- [GlassFish](http://www.importnew.com/glassfish/)：应用服务器，由Oracle赞助支持的Java EE参考实现。[官网](https://glassfish.java.net/)
- [Hudson](http://www.importnew.com/hudson/)：持续集成服务器，目前仍在活跃开发。[官网](http://hudson-ci.org/)
- [JavaServer Faces](http://www.importnew.com/javaserver-faces/)：Mojarra是JSF标准的一个开源实现，由Oracle开发。[官网](https://javaserverfaces.java.net/)
- [JavaServer Pages](http://www.importnew.com/javaserver-pages/)：支持自定义标签库的网站通用模板库。[官网](https://jsp.java.net/)
- [Liquibase](http://www.importnew.com/liquibase/)：与具体数据库独立的追踪、管理和应用数据库Scheme变化的工具。[官网](http://www.liquibase.org/)


## 构建工具
### 构建及应用依赖关系处理工具
- [Apache Maven](http://www.importnew.com/maven/)：Maven是一款声明式构建及依赖管理工具，采用约定优于配置方式进行管理。相对Apache Ant更推荐使用Maven，前者采用了过程式管理，维护相对困难。[官网](http://maven.apache.org/)
- [Bazel](http://www.importnew.com/bazel/)：来自Google的构建工具，可以快速、可靠地构建代码。[官网](http://bazel.io)
- [Gradle](http://www.importnew.com/gradle/)：使用Groovy（非XML）进行增量构建，可以很好地与Maven依赖管理配合工作。[官网](http://gradle.org/)
- [Buck](http://www.importnew.com/buck/)：Facebook构建工具。[官网](https://buckbuild.com/)


## 字节码操作
### 编程方式操作字节码的开发库
- [ASM](http://www.importnew.com/asm/)：通用底层字节码操作和分析开发库。[官网](http://asm.ow2.org/)
- [Byte Buddy](http://www.importnew.com/byte-buddy/)：使用流式API进一步简化字节码生成。[官网](http://bytebuddy.net/)
- [Byteman](http://www.importnew.com/byteman/)：在运行时通过DSL（规则）操作字节码进行测试和故障排除。[官网](http://byteman.jboss.org/)
- [Javassist](http://www.importnew.com/javassist/)：一个简化字节码编辑尝试。[官网](http://jboss-javassist.github.io/javassist)


## 集群管理
### 在集群内动态管理应用程序的框架
- [Apache Aurora](http://www.importnew.com/apache-aurora/)：Apache Aurora是一个Mesos框架，用于长时间运行服务和定时任务（cron job）。[官网](http://aurora.apache.org/)
- [Singularity](http://www.importnew.com/singularity/)：Singularity是一个Mesos框架，方便部署和操作。它支持Web Service、后台运行、调度作业和一次性任务。[官网](http://getsingularity.com/)


## 代码分析
### 测量代码指标和质量工具。
- [Checkstyle](http://www.importnew.com/checkstyle/)：代码编写规范和标准静态分析工具。[官网](https://github.com/checkstyle/checkstyle)
- [Error Prone](http://www.importnew.com/error-prone/)：将常见编程错误作为运行时错误报告。[官网](https://github.com/google/error-prone)
- FindBugs：通过字节码静态分析查找隐藏bug。[官网](http://findbugs.sourceforge.net/)
- [jQAssistant](http://www.importnew.com/jqassistant/)：使用基于Neo4J查询语言进行代码静态分析。[官网](http://jqassistant.org/)
- [PMD](http://www.importnew.com/pmd/)：对源代码分析查找不良的编程习惯。[官网](https://github.com/pmd/pmd)
- [SonarQube](http://www.importnew.com/sonarqube/)：通过插件集成其它分析组件，对过去一段时间内的数据进行统计。[官网](http://www.sonarqube.org/)


## 编译器生成工具
### 用来创建解析器、解释器或编译器的框架 
- [ANTLR](http://www.importnew.com/antlr/)：复杂的全功能自顶向下解析框架。[官网](http://www.antlr.org/)
- [JavaCC](http://www.importnew.com/javacc/)：JavaCC是更加专门的轻量级工具，易于上手且支持语法超前预测。[官网](https://javacc.org/)


## 外部配置工具
### 支持外部配置的开发库
- [config](http://www.importnew.com/config/)：针对JVM语言的配置库。[官网](https://github.com/typesafehub/config)
- [owner](http://www.importnew.com/owner/)：减少冗余配置属性。[官网](https://github.com/lviggiano/owner)


## 约束满足问题求解程序
### 帮助解决约束满足问题的开发库
- [Choco](http://www.importnew.com/choco/)：可直接使用的约束满足问题求解程序，使用了约束规划技术。[官网](http://choco-solver.org/)
- [JaCoP](http://www.importnew.com/jacop/)：为FlatZinc语言提供了一个接口，可以执行MiniZinc模型。[官网](https://github.com/radsz/jacop/)
- [OptaPlanner](http://www.importnew.com/optaplanner/)：业务规划与资源调度优化求解程序。[官网](http://www.optaplanner.org/)
- [Sat4J](http://www.importnew.com/sat4j/)：逻辑代数与优化问题最先进的求解程序。[官网](http://www.sat4j.org/)


## 持续集成
- [Bamboo](http://www.importnew.com/bamboo/)：Atlassian解决方案，可以很好地集成Atlassian的其他产品。可以选择开源许可，也可以购买商业版。[官网](https://www.atlassian.com/software/bamboo)
- CircleCI：提供托管服务，可以免费试用。[官网](https://circleci.com/)
- [Codeship](http://www.importnew.com/codeship/)：提供托管服务，提供有限的免费模式。[官网](https://codeship.com/features)
- [fabric8](hao.importnew.com/fabric8/)：容器集成平台。[官网](http://fabric8.io/)
- [Go](http://www.importnew.com/go/)：ThoughtWork开源解决方案。[官网](https://www.gocd.io/)
- [Jenkins](http://www.importnew.com/jenkins/)：支持基于服务器的部署服务。[官网](http://jenkins-ci.org/)
- [TeamCity](http://www.importnew.com/teamcity/)：JetBrain的持续集成解决方案，有免费版。[官网](http://www.jetbrains.com/teamcity/)
- [Travis](http://www.importnew.com/travis/)：通常用作开源项目的托管服务。[官网](https://travis-ci.org)
- [Buildkite](http://www.importnew.com/buildkite/): 持续集成工具，用简单的脚本就能设置pipeline，而且能快速构建，可以免费试用。[官网](https://buildkite.com/)


## CSV解析
### 简化CSV数据读写的框架与开发库
- [uniVocity-parsers](http://www.importnew.com/univocity-parsers/)：速度最快功能最全的CSV开发库之一，同时支持TSV与固定宽度记录的读写。[官网](https://github.com/uniVocity/univocity-parsers)


## 数据库
### 简化数据库交互的相关工具
- [Apache Phoenix](http://www.importnew.com/apache-phoenix/)：HBase针对低延时应用程序的高性能关系数据库层。[官网](http://phoenix.apache.org/)
- [Crate](http://www.importnew.com/crate/)：实现了数据同步、分片、缩放、复制的分布式数据存储。除此之外还可以使用基于SQL的语法跨集群查询。[官网](https://crate.io/)
- [Flyway](http://www.importnew.com/flyway/)：简单的数据库迁移工具。[官网](http://flywaydb.org/)
- [H2](http://www.importnew.com/h2/)：小型SQL数据库，以可以作为内存数据库使用著称。[官网](http://h2database.com/)
- [HikariCP](http://www.importnew.com/hikaricp/)：高性能JDBC连接工具。[官网](https://github.com/brettwooldridge/HikariCP)
- [JDBI](http://www.importnew.com/jdbi/)：便捷的JDBC抽象。[官网](http://jdbi.org/)
- [jOOQ](http://www.importnew.com/jooq/)：为SQL schema生成typesafe代码。[官网](http://www.jooq.org/)
- [MapDB](http://www.importnew.com/mapdb/)：以磁盘或堆内存中并发集合为基础的嵌入式数据库引擎。[官网](http://www.mapdb.org/)
- [Presto](http://www.importnew.com/presto/)：针对大数据的分布式SQL查询引擎。[官网](https://github.com/facebook/presto)
- [Querydsl](http://www.importnew.com/querydsl/)：Typesafe统一查询。[官网](http://www.querydsl.com/)


## 数据结构
- [Apache Parquet](http://www.importnew.com/apache-parquet/)：Google Dremel论文中发布的基于组装算法的列式（Columnar）存储格式。[官网](http://parquet.apache.org/)
- [Protobuf](http://www.importnew.com/protobuf/)：Google数据交换格式。[官网](https://github.com/google/protobuf)
- [SBE](http://www.importnew.com/sbe/)：简单二进制编码，是最快速的消息格式之一。[官网](https://github.com/real-logic/simple-binary-encoding)
- [Wire](http://www.importnew.com/wire/)：整洁轻量级协议缓存。[官网](https://github.com/square/wire)


## 时间日期工具库
### 处理时间和日期的开发库
- [Joda-Time](http://www.importnew.com/joda-time/)：在Java 8发布前，Joda-Time是实际使用的时间日期库标准。[官网](http://www.joda.org/joda-time/)
- [Time4J](http://www.importnew.com/time4j/)：高级时间和日期库。[官网](https://github.com/MenoData/Time4J)
- [ThreeTen](http://www.importnew.com/ThreeTen/)：JSR-310实现，为JDK提供更具特点的时间和日期API。[官网](http://www.threeten.org)


## 依赖注入
### 帮实现依赖翻转范式的开发库 [官网](https://en.wikipedia.org/wiki/Inversion_of_control)
- [Apache DeltaSpike](http://www.importnew.com/apache-deltaspike/)：CDI扩展框架。[官网](https://deltaspike.apache.org/)
- [Dagger2](http://www.importnew.com/dagger2/)：编译时注入框架，不需要使用反射。[官网](http://google.github.io/dagger/)
- [Guice](http://www.importnew.com/guice/)：可以匹敌Dagger的轻量级注入框架。[官网](https://github.com/google/guice)
- [HK2](http://www.importnew.com/hk2/)：轻量级动态依赖注入框架。[官网](https://hk2.java.net)


## 开发流程增强工具
### 从最基本的层面增强开发流程
- [ADT4J](http://www.importnew.com/adt4j/)：针对代数数据类型的JSR-269代码生成器。[官网](https://github.com/sviperll/adt4j)
- [AspectJ](http://www.importnew.com/aspectj/)：面向切面编程（AOP）的无缝扩展。[官网](https://eclipse.org/aspectj/)
- [Auto](http://www.importnew.com/auto/)：源代码生成器集合。[官网](https://github.com/google/auto)
- [DCEVM](http://www.importnew.com/dcevm/)：通过修改JVM在运行时支持对已加载的类进行无限次重定义。[官网](http://dcevm.github.io/)
- HotswapAgent：支持无限次重定义运行时类与资源。[官网](https://github.com/HotswapProjects/HotswapAgent)
- Immutables：类似Scala的条件类。[官网](http://immutables.github.io/)
- JHipster：基于Spring Boot与AngularJS应用程序的Yeoman源代码生成器。[官网](https://github.com/jhipster/generator-jhipster)
- [JRebel](http://www.importnew.com/jrebel/)：无需重新部署，可以即时重新加载代码与配置的商业软件。[官网](http://zeroturnaround.com/software/jrebel/)
- Lombok：减少冗余的代码生成器。[官网](https://projectlombok.org/)
- Spring Loaded：类重载代理。[官网](https://github.com/spring-projects/spring-loaded)
- [vert.x](http://www.importnew.com/vert-x/)：多语言事件驱动应用框架。[官网](http://vertx.io/)


## 分布式应用
### 用来编写分布式容错应用的开发库和框架
- [Akka](http://www.importnew.com/akka/)：用来编写分布式容错并发事件驱动应用程序的工具和运行时。[官网](http://akka.io)
- [Apache Storm](http://www.importnew.com/storm/)：实时计算系统。[官网](http://storm.apache.org/)
- [Apache ZooKeeper](http://www.importnew.com/zookeeper/)：针对大型分布式系统的协调服务，支持分布式配置、同步和名称注册。[官网](http://zookeeper.apache.org/)
- [Hazelcast](http://www.importnew.com/Hazelcast/)：高可扩展内存数据网格。[官网](http://hazelcast.org/)
- [Hystrix](http://www.importnew.com/hystrix/)：提供延迟和容错。[官网](https://github.com/Netflix/Hystrix)
- [JGroups](http://www.importnew.com/jgroups/)：提供可靠的消息传递和集群创建的工具。[官网](http://www.jgroups.org/)
- [Orbit](http://www.importnew.com/orbit/)：支持虚拟角色（Actor），在传统角色的基础上增加了另外一层抽象。[官网](http://orbit.bioware.com/)
- [Quasar](http://www.importnew.com/quasar/)：为JVM提供轻量级线程和角色。[官网](http://www.paralleluniverse.co/quasar/)


## 分布式数据库
### 对应用程序而言，在分布式系统中的数据库看起来就像是只有一个数据源
- [Apache Cassandra](http://www.importnew.com/cassandra/)：列式数据库，可用性高且没有单点故障。[官网](http://cassandra.apache.org)
- [Apache HBase](http://www.importnew.com/hbase/)：针对大数据的Hadoop数据库。[官网](http://hbase.apache.org)
- [Druid](http://www.importnew.com/druid/)：实时和历史OLAP数据存储，在聚集查询和近似查询方面表现不俗。[官网](http://druid.io)
- [Infinispan](http://www.importnew.com/infinispan/)：针对缓存的高并发键值对数据存储。[官网](http://infinispan.org/)
- [TiDB]()：开源分布式HTAP数据库，结合了传统的RDBMS和NoSQL的最佳特性。[官网](https://pingcap.com)


## 发布
### 以本机格式发布应用程序的工具
- Bintray：发布二进制文件版本控制工具。可以于Maven或Gradle一起配合使用。提供开源免费版本和几种商业收费版本。[官网](https://bintray.com/)
- [Central Repository](http://www.importnew.com/central-repository/)：最大的二进制组件仓库，面向开源社区提供免费服务。Apache Maven默认使用Central [官网](http://search.maven.org/)Repository，也可以在所有其他构建工具中使用。
- IzPack：为跨平台部署建立创作工具（Authoring Tool）。[官网](http://izpack.org/)
- JitPack：打包GitHub仓库的便捷工具。可根据需要构建Maven、Gradle项目，发布可立即使用的组件。[官网](https://jitpack.io/)
- Launch4j：将JAR包装为轻量级本机Windows可执行程序。[官网](http://launch4j.sourceforge.net/)
- Nexus：支持代理和缓存功能的二进制管理工具。[官网](http://www.sonatype.com/nexus)
- packr：将JAR、资源和JVM打包成Windows、Linux和Mac OS X本地发布文件。[官网](https://github.com/libgdx/packr/)


## 文档处理工具
### 处理Office文档的开发库
- [Apache POI](http://www.importnew.com/poi/)：支持OOXML规范（XLSX、DOCX、PPTX）以及OLE2规范（XLS、DOC、PPT）。[官网](http://poi.apache.org/)
- [documents4j](http://www.importnew.com/documents4j/)：使用第三方转换器进行文档格式转换，转成类似MS Word这样的格式。[官网](http://documents4j.com)
- [jOpenDocument](http://www.importnew.com/jopendocument/)：处理OpenDocument格式（由Sun公司提出基于XML的文档格式）。[官网](http://www.jopendocument.org/)

## 函数式编程
### 函数式编程支持库
- Cyclops：支持一元（Monad）操作和流操作工具类、comprehension（List语法）、模式匹配、trampoline等特性。[官网](https://github.com/aol/cyclops)
- Fugue：Guava的函数式编程扩展。[官网](https://bitbucket.org/atlassian/fugue)
- Functional Java：实现了多种基础和高级编程抽象，用来辅助面向组合开发（composition-oriented development）。[官网](http://www.functionaljava.org)
- Javaslang：一个函数式组件库，提供持久化数据类型和函数式控制结构。[官网](http://javaslang.com)
- jOOλ：旨在填补Java 8 lambda差距的扩展，提供了众多缺失的类型和一组丰富的顺序流API。[官网](https://github.com/jOOQ/jOOL)


## 游戏开发
### 游戏开发框架
- [jMonkeyEngine](http://www.importnew.com/jmonkeyengine/)：现代3D游戏开发引擎。[官网](http://jmonkeyengine.org/)
- [libGDX](http://www.importnew.com/libgdx/)：全面的跨平台高级框架。[官网](https://libgdx.badlogicgames.com/)
- [LWJGL](http://www.importnew.com/lwjgl/)：对OpenGL/CL/AL等技术进行抽象的健壮框架。[官网](https://www.lwjgl.org/)
- jPCT：基于OpenGL技术开发的3D图形引擎。纯Java的3D引擎。[官网](http://www.jpct.net/)


## GUI
### 现代图形化用户界面开发库
- [JavaFX](http://www.importnew.com/javafx/)：Swing的后继者。[官网](http://www.oracle.com/technetwork/java/javase/overview/javafx-overview-2158620.html)
- [Scene Builder](http://www.importnew.com/scene_builder/)：开发JavaFX应用的可视化布局工具。[官网](http://docs.oracle.com/javase/8/scene-builder-2/get-started-tutorial/overview.htm#JSBGS164)


## 高性能计算
### 涵盖了从集合到特定开发库的高性能计算相关工具
- Agrona：高性能应用中常见的数据结构和工具方法。[官网](https://github.com/real-logic/Agrona)
- Disruptor：线程间消息传递开发库。[官网](http://lmax-exchange.github.io/disruptor/)
- fastutil：快速紧凑的特定类型集合（Collection）。[官网](http://fastutil.di.unimi.it/)
- GS Collections：受Smalltalk启发的集合框架。[官网](https://github.com/goldmansachs/gs-collections)
- [HPPC](http://www.importnew.com/hppc/)：基础类型集合。[官网](http://labs.carrotsearch.com/hppc.html)
- Javolution：实时和嵌入式系统的开发库。[官网](http://javolution.org/)
- [JCTools](http://www.importnew.com/jctools/)：JDK中缺失的并发工具。[官网](https://github.com/JCTools/JCTools)
- [Koloboke](http://www.importnew.com/koloboke/)：Hash set和hash map。[官网](https://github.com/OpenHFT/Koloboke)
- Trove：基础类型集合。[官网](http://trove.starlight-systems.com/)
- High-scale-lib:Cliff Click 个人开发的高性能并发库[官网](https://github.com/stephenc/high-scale-lib)


## IDE
### 简化开发的集成开发环境
- [Eclipse](http://www.importnew.com/eclipse/)：老牌开源项目，支持多种插件和编程语言。[官网](http://www.eclipse.org/)
- [IntelliJ IDEA](http://www.importnew.com/intellij-idea/)：支持众多JVM语言，是安卓开发者好的选择。商业版主要针对企业客户。[官网](http://www.jetbrains.com/idea/)
- [NetBeans](http://www.importnew.com/netbeans/)：为多种技术提供集成化支持，包括Java SE、Java EE、数据库访问、HTML5等。[官网](https://netbeans.org/)
- [Scala IDE](http://www.importnew.com/scala-ide/)：一款基于Eclipse开源平台打造的Scala集成开发环境。[官网](http://scala-ide.org/)
- [SpringSource Tool Suite（STS）](http://www.importnew.com/springsource-tool-suite/):一款基于Eclipse开源平台打造的Spring应用开发环境。[官网](http://spring.io/tools/sts/)


## 图像处理
### 创建、评价和操作图片的支持库
- [Imgscalr](http://www.importnew.com/imgscalr/)：纯Java 2D实现，简单、高效、支持硬件加速的图像缩放开发库。[官网](https://github.com/thebuzzmedia/imgscalr)
- [Picasso](http://www.importnew.com/picasso/)：安卓图片下载和图片缓存开发库。[官网](http://square.github.io/picasso/)
- [Thumbnailator](http://www.importnew.com/thumbnailator/)：Thumbnailator是一个高质量Java缩略图开发库。[官网](https://github.com/coobird/thumbnailator)
- [ZXing](http://www.importnew.com/zxing/)：支持多种格式的一维、二维条形码图片处理开发库。[官网](https://github.com/zxing/zxing)
- [im4java](http://www.importnew.com/im4java/): 基于ImageMagick或GraphicsMagick命令行的图片处理开发库，基本上ImageMagick能够支持的图片格式和处理方式都能够处理。[官网](http://im4java.sourceforge.net/)
- Apache Batik：在Java应用中程序以SVG格式显示、生成及处理图像的工具集，包括SVG解析器、SVG生成器、SVG DOM等模块，可以集成使用也可以单独使用，还可以扩展自定义的SVG标签。[官网](http://xmlgraphics.apache.org/batik/)


## JSON
### 简化JSON处理的开发库
- [Genson](http://www.importnew.com/genson/)：强大且易于使用的Java到JSON转换开发库。[官网](http://owlike.github.io/genson)
- [Gson](http://www.importnew.com/gson/)：谷歌官方推出的JSON处理库，支持在对象与JSON之间双向序列化，性能良好且可以实时调用。[官网](https://github.com/google/gson)
- [Jackson](http://www.importnew.com/jackson/)：与GSON类似，在频繁使用时性能更佳。[官网](http://wiki.fasterxml.com/JacksonHome)
- [LoganSquare](http://www.importnew.com/logansquare/)：基于Jackson流式API，提供对JSON解析和序列化。比GSON与Jackson组合方式效果更好。[官网](https://github.com/bluelinelabs/LoganSquare)
- [Fastjson](http://www.importnew.com/fastjson/)：一个Java语言编写的高性能功能完善的JSON库。[官网](https://github.com/Alibaba/fastjson)
- Kyro：快速、高效、自动化的Java对象序列化和克隆库。[官网](https://github.com/EsotericSoftware/kryo)


## JVM与JDK
### 目前的JVM和JDK实现
- [JDK 9](http://www.importnew.com/jdk-9/)：JDK 9的早期访问版本。[官网](https://jdk9.java.net/)
- [OpenJDK](http://www.importnew.com/openjdk/)：JDK开源实现。[官网](http://openjdk.java.net/)


## 基于JVM的语言
### 除Java外，可以用来编写JVM应用程序的编程语言
- Scala：融合了面向对象和函数式编程思想的静态类型编程语言。[官网](http://www.scala-lang.org/)
- [Groovy](http://www.importnew.com/groovy/)：类型可选（Optionally typed）的动态语言，支持静态类型和静态编译。目前是一个Apache孵化器项目。[官网](http://www.groovy-lang.org/)
- Clojure：可看做现代版Lisp的动态类型语言。[官网](http://clojure.org/)
- Ceylon：RedHat开发的面向对象静态类型编程语言。[官网](http://ceylon-lang.org/)
- Kotlin：JetBrain针对JVM、安卓和浏览器提供的静态类型编程语言。[官网](http://kotlinlang.org/)
- [Xtend](http://www.importnew.com/xtend/)：一种静态编程语言，能够将其代码转换为简洁高效的Java代码，并基于JVM运行。[官网](http://www.eclipse.org/xtend/)


## 日志
### 记录应用程序行为日志的开发库
- [Apache Log4j 2](http://www.importnew.com/log4j2/)：使用强大的插件和配置架构进行完全重写。[官网](http://logging.apache.org/log4j/)
- [kibana](http://www.importnew.com/kibana/)：分析及可视化日志文件。[官网](https://www.elastic.co/products/kibana)
- [Logback](http://www.importnew.com/logback/)：强健的日期开发库，通过Groovy提供很多有趣的选项。[官网](http://logback.qos.ch/)
- [logstash](http://www.importnew.com/logstash/)：日志文件管理工具。[官网](https://www.elastic.co/products/logstash)
- [Metrics](http://www.importnew.com/metrics/)：通过JMX或HTTP发布参数，并且支持存储到数据库。[官网](https://github.com/dropwizard/metrics)
- [SLF4J](http://www.importnew.com/slf4j/)：日志抽象层，需要与具体的实现配合使用。[官网](http://www.slf4j.org/)


## 机器学习
### 提供具体统计算法的工具。其算法可从数据中学习
- [Apache Flink](http://www.importnew.com/apache-flink/)：快速、可靠的大规模数据处理引擎。[官网](https://flink.apache.org/)
- [Apache Hadoop](http://www.importnew.com/apache-hadoop/)：在商用硬件集群上用来进行大规模数据存储的开源软件框架。[官网](http://hadoop.apache.org/)
- [Apache Mahout](http://www.importnew.com/apache-mahout/)：专注协同过滤、聚类和分类的可扩展算法。[官网](https://mahout.apache.org/)
- [Apache Spark](http://www.importnew.com/apache-spark/)：开源数据分析集群计算框架。[官网](http://spark.apache.org/)
- [DeepDive](http://www.importnew.com/deepdive/)：从非结构化数据建立结构化信息并集成到已有数据库的工具。[官网](http://deepdive.stanford.edu)
- [Deeplearning4j](http://www.importnew.com/deeplearning4j/)：分布式多线程深度学习开发库。[官网](http://deeplearning4j.org/)
- [H2O](http://www.importnew.com/h2o/)：用作大数据统计的分析引擎。[官网](http://h2o.ai/)
- [Weka](http://www.importnew.com/weka/)：用作数据挖掘的算法集合，包括从预处理到可视化的各个层次。[官网](http://www.cs.waikato.ac.nz/ml/weka/)
- [QuickML](http://www.importnew.com/quickml/)：高效机器学习库。[官网](http://quickml.org/)、[GitHub](https://github.com/sanity/quickml)


## 消息传递
### 在客户端之间进行消息传递，确保协议独立性的工具
- [Aeron](http://www.importnew.com/aeron/)：高效可扩展的单播、多播消息传递工具。[官网](https://github.com/real-logic/Aeron)
- [Apache ActiveMQ](http://www.importnew.com/activemq/)：实现JMS的开源消息代理（broker），可将同步通讯转为异步通讯。[官网](http://activemq.apache.org/)
- [Apache Camel](http://www.importnew.com/apache-camel/)：通过企业级整合模式（Enterprise Integration Pattern EIP）将不同的消息传输API整合在一起。[官网](http://camel.apache.org/)
- [Apache Kafka](http://www.importnew.com/kafka/)：高吞吐量分布式消息系统。[官网](http://kafka.apache.org/)
- [Apache RocketMQ](http://rocketmq.apache.org/): Apache RocketMQ是一个开源的分布式消息传递和流数据平台。[官网](http://rocketmq.apache.org/)
- [Hermes](http://www.importnew.com/hermes/)：快速、可靠的消息代理（Broker），基于Kafka构建。[官网](http://hermes.allegro.tech)
- JBoss HornetQ：清晰、准确、模块化，可以方便嵌入的消息工具。[官网](http://hornetq.jboss.org/)
- [JeroMQ](http://www.importnew.com/jeromq/)：ZeroMQ的纯Java实现。[官网](https://github.com/zeromq/jeromq)
- [Smack](http://www.importnew.com/smack/)：跨平台XMPP客户端函数库。[官网](https://github.com/igniterealtime/Smack/)
- Openfire：是开源的、基于XMPP、采用Java编程语言开发的实时协作服务器。 Openfire安装和使用都非常简单，并可利用Web界面进行管理。 [官网](http://www.igniterealtime.org/projects/openfire/index.jsp) [GitHub](https://github.com/igniterealtime/Openfire)
- Spark：是一个开源，跨平台IM客户端。它的特性支持集组聊天，电话集成和强大安全性能。如果企业内部部署IM使用Openfire+Spark是最佳的组合。 [官网](http://www.igniterealtime.org/projects/spark/index.jsp) [GitHub](https://github.com/igniterealtime/Spark)
- Tigase： 是一个轻量级的可伸缩的 Jabber/XMPP 服务器。无需其他第三方库支持，可以处理非常高的复杂和大量的用户数，可以根据需要进行水平扩展。 [官网](http://www.tigase.net)


## 杂项
### 未分类其它资源
- Design Patterns：实现并解释了最常见的设计模式。[官网](https://github.com/iluwatar/java-design-patterns)
- Jimfs：内存文件系统。[官网](https://github.com/google/jimfs)
- Lanterna：类似curses的简单console文本GUI函数库。[官网](https://code.google.com/p/lanterna/)
- LightAdmin：可插入式CRUD UI函数库，可用来快速应用开发。[官网](http://lightadmin.org/)
- OpenRefine：用来处理混乱数据的工具，包括清理、转换、使用Web Service进行扩展并将其关联到数据库。[官网](http://openrefine.org/)
- RoboVM：Java编写原生iOS应用。[官网](https://robovm.com/)
- [Quartz](http://www.importnew.com/quartz/)：强大的任务调度库.[官网](http://www.quartz-scheduler.org/)


## 应用监控工具
### 监控生产环境中应用程序的工具
- [AppDynamics](http://www.importnew.com/appdynamics/)：性能监测商业工具。[官网](http://www.appdynamics.com/)
- [JavaMelody](http://www.importnew.com/javamelody/)：性能监测和分析工具。[官网](https://github.com/javamelody/javamelody)
- [Kamon](http://www.importnew.com/Kamon/)：Kamon用来监测在JVM上运行的应用程序。[官网](http://www.kamon.io/)
- [New Relic](http://www.importnew.com/new-relic/)：性能监测商业工具。[官网](http://newrelic.com/)
- SPM：支持对JVM应用程序进行分布式事务追踪的性能监测商业工具。[官网](https://sematext.com/spm/)
- [OverOps(Takipi)](http://www.importnew.com/overops_takipi/)：产品运行时错误监测及调试商业工具。[官网](https://www.takipi.com/)

## 原生开发库
### 用来进行特定平台开发的原生开发库
- [JNA](http://www.importnew.com/jna/)：不使用JNI就可以使用原生开发库。此外，还为常见系统函数提供了接口。[官网](https://github.com/java-native-access/jna)


## 自然语言处理
### 用来专门处理文本的函数库
- [Apache OpenNLP](http://www.importnew.com/apache-opennlp/)：处理类似分词等常见任务的工具。[官网](https://opennlp.apache.org/)
- [CoreNLP](http://www.importnew.com/stanford_corenlp/)：斯坦佛CoreNLP提供了一组基础工具，可以处理类似标签、实体名识别和情感分析这样的任务。[官网](http://nlp.stanford.edu/software/coenlp.shtml)
- [LingPipe](http://www.importnew.com/lingpipe/)：一组可以处理各种任务的工具集，支持POS标签、情感分析等。[官网](http://alias-i.com/lingpipe/)
- [Mallet](http://www.importnew.com/mallet/)：统计学自然语言处理、文档分类、聚类、主题建模等。[官网](http://mallet.cs.umass.edu/)


## 网络
### 网络编程函数库
- [Async Http Client](http://www.importnew.com/async-http-client/)：异步HTTP和WebSocket客户端函数库。[官网](https://github.com/AsyncHttpClient/async-http-client)
- [Grizzly](http://www.importnew.com/grizzly/)：NIO框架，在Glassfish中作为网络层使用。[官网](https://grizzly.java.net/)
- [Netty](http://www.importnew.com/netty/)：构建高性能网络应用程序开发框架。[官网](http://netty.io/)
- [OkHttp](http://www.importnew.com/okhttp/)：一个Android和Java应用的HTTP+SPDY客户端。[官网](http://square.github.io/okhttp/)
- Undertow：基于NIO实现了阻塞和非阻塞API的Web服务器，在WildFly中作为网络层使用。[官网](http://undertow.io/)
- unirest-java: Unirest 是一个轻量级的 HTTP 请求库，涵盖 Node、Ruby、Java、PHP、Python、Objective-C、.NET 等多种语言。可发起 GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS 请求。[官网](http://unirest.io/java)
- brpc-java: java版baidu rpc框架，高性能、多协议、易扩展、低耦合。[官网](https://github.com/baidu/brpc-java)


## ORM
### 处理对象持久化的API
- [Ebean](http://www.importnew.com/ebean/)：支持快速数据访问和编码的ORM框架。[官网](http://ebean-orm.github.io/)
- [EclipseLink](http://www.importnew.com/eclipselink/)：支持许多持久化标准，JPA、JAXB、JCA和SDO。[官网](https://www.eclipse.org/eclipselink/)
- [Hibernate](http://www.importnew.com/hibernate/)：广泛使用、强健的持久化框架。Hibernate的技术社区非常活跃。[官网](http://hibernate.org/orm/)
- [MyBatis](http://www.importnew.com/mybatis/)：带有存储过程或者SQL语句的耦合对象（Couples object）。[官网](http://mybatis.github.io/mybatis-3/)
- [OrmLite](http://www.importnew.com/ormlite/)：轻量级开发包，免除了其它ORM产品中的复杂性和开销。[官网](http://ormlite.com/)
- Nutz：另一个SSH。[官网](http://nutzam.com/)，[Github](https://github.com/nutzam/nutz)，[论坛](https://nutz.cn/)
- JFinal：JAVA WEB + ORM框架。[官网](http://www.jfinal.com)，[Github](https://github.com/jfinal/jfinal)
- [Apache OpenJPA](http://openjpa.apache.org/): 实现了 EJB 3.0 中的 JPA 标准,为开发者提供功能强大、使用简单的持久化数据管理框架。 [官网](http://openjpa.apache.org/)


## PDF
### 用来帮助创建PDF文件的资源
- [Apache FOP](http://www.importnew.com/apache_fop/)：从XSL-FO创建PDF。[官网](http://xmlgraphics.apache.org/fop/)
- [Apache PDFBox](http://www.importnew.com/apache-pdfbox/)：用来创建和操作PDF的工具集。[官网](http://pdfbox.apache.org/)
- [DynamicReports](http://www.importnew.com/dynamicreports/)：JasperReports的精简版。[官网](http://dynamicreports.org/)
- [flyingsaucer](http://www.importnew.com/flyingsaucer/)：XML/XHTML和CSS 2.1渲染器。[官网](https://github.com/flyingsaucerproject/flyingsaucer)
- [iText](http://www.importnew.com/itext/)：一个易于使用的PDF函数库，用来编程创建PDF文件。注意，用于商业用途时需要许可证。[官网](http://itextpdf.com/)
- [JasperReports](http://www.importnew.com/jasperreports/)：一个复杂的报表引擎。[官网](http://community.jaspersoft.com/project/jasperreports-library)

## 性能分析
### 性能分析、性能剖析及基准测试工具
- [jHiccup](http://www.importnew.com/jhiccup/)：提供平台中JVM暂停的日志和记录。[官网](https://github.com/giltene/jHiccup)
- [JMH](http://www.importnew.com/jmh/)：JVM基准测试工具。[官网](http://openjdk.java.net/projects/code-tools/jmh/)
- [JProfiler](http://www.importnew.com/jprofiler/)：商业分析器。[官网](https://www.ej-technologies.com/products/jprofiler/overview.html)
- [LatencyUtils](http://www.importnew.com/latencyutils/)：测量和报告延迟的工具。[官网](https://github.com/LatencyUtils/LatencyUtils)
- [VisualVM](http://www.importnew.com/visualvm/)：对运行中的应用程序信息提供了可视化界面。[官网](http://visualvm.java.net/)
- [YourKit Java Profiler](http://www.importnew.com/yourkit-java-profiler/)：商业分析器。[官网](https://www.yourkit.com/features/)


## 响应式开发库
### 用来开发响应式应用程序的开发库
- [Reactive Streams](http://www.importnew.com/reactive-streams/)：异步流处理标准，支持非阻塞式反向压力（backpressure）。[官网](https://github.com/reactive-streams/reactive-streams-jv/)
- [Reactor](http://www.importnew.com/reactor/)：构建响应式快速数据（fast-data）应用程序的开发库。[官网](http://projectreactor.io/)
- [RxJava](http://www.importnew.com/rxjava/)：通过JVM可观察序列（observable sequence）构建异步和基于事件的程序。[官网](https://github.com/ReactiveX/RxJava)


## REST框架
### 用来创建RESTful 服务的框架
- [Dropwizard](http://www.importnew.com/dropwizard/)：偏向于自己使用的Web框架。用来构建Web应用程序，使用了Jetty、Jackson、Jersey和Metrics。[官网](https://dropwizard.github.io/drpwizard/)
- [Feign](http://www.importnew.com/feign/)：受Retrofit、JAXRS-2.0和WebSocket启发的HTTP客户端连接器（binder）。[官网](https://github.com/Netflix/feign)
- Jersey：JAX-RS参考实现。[官网](https://jersey.java.net/)
- [RESTEasy](http://www.importnew.com/resteasy/)：经过JAX-RS规范完全认证的可移植实现。[官网](http://resteasy.jboss.org/)
- [RestExpress](http://www.importnew.com/restexpress/)：一个Java类型安全的REST客户端。[官网](https://github.com/RestExpress/RestExpress)
- [RestX](http://www.importnew.com/restx/)：基于注解处理和编译时源码生成的框架。[官网](http://restx.io)
- [Retrofit](http://www.importnew.com/retrofit/)：类型安全的REST客户端。[官网](http://square.github.io/retrofit/)
- [Spark](http://www.importnew.com/sparkjava/)：受到Sinatra启发的Java REST框架。[官网](http://sparkjava.com/)
- [Swagger](http://www.importnew.com/swagger/)：Swagger是一个规范且完整的框架，提供描述、生产、消费和可视化RESTful Web Service。[官网](http://swagger.io/)
- [Blade](http://www.importnew.com/bladejava/)：国人开发的一个轻量级的MVC框架. 它拥有简洁的代码，优雅的设计。[官网](https://lets-blade.com/)


## 科学计算与分析
### 用于科学计算和分析的函数库
- [DataMelt](http://www.importnew.com/datamelt/)：用于科学计算、数据分析及数据可视化的开发环境。[官网](http://jwork.org/dmelt/)
- [JGraphT](http://www.importnew.com/jgrapht/)：支持数学图论对象和算法的图形库。[官网](https://github.com/jgrapht/jgrapht)
- [JScience](http://www.importnew.com/jscience/)：用来进行科学测量和单位的一组类。[官网](http://jscience.org/)


## 搜索引擎
### 文档索引引擎，用于搜索和分析
- [Apache Solr](http://www.importnew.com/solr/)：一个完全的企业搜索引擎。为高吞吐量通信进行了优化。[官网](http://lucene.apache.org/solr/)
- Elasticsearch：一个分布式、支持多租户（multitenant）全文本搜索引擎。提供了RESTful Web接口和无schema的JSON文档。[官网](http://www.elsticsearch.org/)
- Apache Lucene：是一个开放源代码的全文检索引擎工具包，是一个全文检索引擎的架构，提供了完整的查询引擎和索引引擎，部分文本分析引擎。[官网](http://lucene.apache.org/)


## 安全
### 用于处理安全、认证、授权或会话管理的函数库
- [Apache Shiro](http://www.importnew.com/shiro/)：执行认证、授权、加密和会话管理。[官网](http://shiro.apache.org/)
- [Bouncy Castle](http://www.importnew.com/bouncy-castle/)，涵盖了从基础的帮助函数到PGP/SMIME操作。[官网](https://www.bouncycastle.org/java.html)：多途加密开发库。支持JCA提供者（JCA provider)
- [Cryptomator](http://www.importnew.com/cryptomator/)：在云上进行客户端跨平台透明加密。[官网](https://cryptomator.org/)
- [Keycloak](http://www.importnew.com/keycloak/)：为浏览器应用和RESTful Web Service集成SSO和IDM。目前还处于beta版本，但是看起来非常有前途。[官网](http://keycloak.jboss.org/)
- [PicketLink](http://www.importnew.com/picketlink/)：PicketLink是一个针对Java应用进行安全和身份认证管理的大型项目（Umbrella Project）。[官网](http://picketlink.org/)
- [Sa-Token](https://github.com/dromara/sa-token)：Sa-Token 是一个轻量级 Java 权限认证框架，主要解决：登录认证、权限认证、Session会话、单点登录、OAuth2.0、微服务网关鉴权 等一系列权限相关问题。[官网](https://sa-token.dev33.cn/)


## 序列化
### 用来高效处理序列化的函数库
- [FlatBuffers](http://www.importnew.com/flatbuffers/)：高效利用内存的序列化函数库，无需解包和解析即可高效访问序列化数据。[官网](https://github.com/google/flatbuffers)
- [Kryo](http://www.importnew.com/kryo/)：快速、高效的对象图形序列化框架。[官网](https://github.com/EsotericSoftware/kryo)
- [FST](http://www.importnew.com/fst/)：提供兼容JDK的高性能对象图形序列化。[官网](https://github.com/RuedigerMoeller/fast-serialization)
- [MessagePack](http://www.importnew.com/messagepack/)：一种高效的二进制序列化格式。[官网](https://github.com/msgpack/msgpack-java)


## 应用服务器
### 用来部署应用程序的服务器
- [Apache Tomcat](http://www.importnew.com/apache-tomcat/)：针对Servlet和JSP的应用服务器，健壮性好且适用性强。[官网](http://tomcat.apache.org/)
- [Apache TomEE](http://www.importnew.com/tomee/)：Tomcat加Java EE。[官网](http://tomee.apache.org/)
- [Jetty](http://www.importnew.com/jetty/)：轻量级、小巧的应用服务器，通常会嵌入到项目中。[官网](http://www.eclipse.org/jetty/)
- [WebSphere Liberty](http://www.importnew.com/websphere-liberty/)：轻量级、模块化应用服务器，由IBM开发。[官网](https://developer.ibm.com/wasdev/)
- [WildFly](http://www.importnew.com/wildfly/)：之前被称作JBoss，由Red Hat开发。支持很多Java EE功能。[官网](http://www.wildfly.org/)


## 模板引擎
### 在模板中替换表达式的工具
- [Apache Velocity](http://www.importnew.com/velocity/)：提供HTML页面模板、email模板和通用开源代码生成器模板。[官网](http://velocity.apache.org/)
- [FreeMarker](http://www.importnew.com/freemarker/)：通用模板引擎，不需要任何重量级或自己使用的依赖关系。[官网](http://freemarker.org/)
- [Handlebars.java](http://www.importnew.com/handlebars-java/)：使用Java编写的模板引擎，逻辑简单，支持语义扩展（semantic Mustache）。[官网](http://jknack.github.io/handlebars.java/)
- [Thymeleaf](http://www.importnew.com/thymeleaf/)：旨在替换JSP，支持XML文件的工具。[官网](http://www.thymeleaf.org/)
- [Beetl](http://ibeetl.com/)：新一代的模板引擎，功能强大，性能良好，超过当前流行的模板引擎。而且还易学易用。[官网](http://ibeetl.com/)


## 测试
### 测试内容从对象到接口，涵盖性能测试和基准测试工具
- [Apache JMeter](http://www.importnew.com/jmeter/)：功能性测试和性能评测。[官网](http://jmeter.apache.org/)
- [Arquillian](http://www.importnew.com/arquillian/)：集成测试和功能行测试平台，集成Java EE容器。[官网](http://arquillian.org/)
- [AssertJ](http://www.importnew.com/assertj/)：支持流式断言提高测试的可读性。[官网](http://joel-costigliola.github.io/assertj/)
- [Awaitility](http://www.importnew.com/awaitility/)：用来同步异步操作的DSL。[官网](https://github.com/jayway/awaitility)
- [Cucumber](http://www.importnew.com/cucumber-jvm/)：BDD测试框架。[官网](https://github.com/cucumber/cucumber-jvm)
- Gatling：设计为易于使用、可维护的和高性能负载测试工具。[官网](http://gatling.io/)
- [Hamcrest](http://www.importnew.com/hamcrest/)：可用来灵活创建意图（intent）表达式的匹配器。[官网](http://hamcrest.org/JavaHamcrest/)
- JMockit：用来模拟静态、final方法等。[官网](http://jmockit.org/)
- [JUnit](http://www.importnew.com/junit/)：通用测试框架。[官网](http://junit.org/)
- [Mockito](http://www.importnew.com/mockito/)：在自动化单元测试中创建测试对象，为TDD或BDD提供支持。[官网](https://github.com/mockito/mockito)
- [PowerMock](http://www.importnew.com/powermock/)： 支持模拟静态方法、构造函数、final类和方法、私有方法以及移除静态初始化器的模拟工具。[官网](https://github.com/jayway/powermock)
- [REST Assured](http://www.importnew.com/rest-assured/)：为REST/HTTP服务提供方便测试的Java DSL。[官网](https://github.com/jayway/rest-assured)
- [Selenide](http://www.importnew.com/selenide/)：为Selenium提供精准的周边API，用来编写稳定且可读的UI测试。[官网](http://selenide.org/)
- [Selenium](http://www.importnew.com/selenium/)：为Web应用程序提供可移植软件测试框架。[官网](http://docs.seleniumhq.org/)
- [Spock](http://www.importnew.com/spock/)：JUnit-compatible framework featuring an expressive Groovy-derived specification language.[官网](http://docs.spockframework.org/)兼容JUnit框架，支持衍生的Groovy范的语言。
- [TestNG](http://www.importnew.com/testng/)：测试框架。[官网](http://testng.org/)
- [Truth](http://www.importnew.com/truth/)：Google的断言和命题（proposition）框架。[官网](https://github.com/google/truth)
- [Unitils](http://www.importnew.com/unitils/)：模块化测试函数库，支持单元测试和集成测试。[官网](http://www.unitils.org/)
- [WireMock](http://www.importnew.com/wiremock/)：Web Service测试桩（Stub）和模拟函数。[官网](http://wiremock.org/)


## 通用工具库
### 通用工具类函数库
- [Apache Commons](http://www.importnew.com/apache-commons/)：提供各种用途的函数，比如配置、验证、集合、文件上传或XML处理等。[官网](http://commons.apache.org/)
- [args4j](http://www.importnew.com/args4j/)：命令行参数解析器。[官网](http://args4j.kohsuke.org/)
- [CRaSH](http://www.importnew.com/crash/)：为运行进行提供CLI。[官网](http://www.crashub.org)
- [Gephi](http://www.importnew.com/gephi/)：可视化跨平台网络图形化操作程序。[官网](https://github.com/gephi/gephi/)
- [Guava](http://www.importnew.com/guava/)：集合、缓存、支持基本类型、并发函数库、通用注解、字符串处理、I/O等。[官网](https://github.com/google/guava)
- [JADE](http://www.importnew.com/jade/)：构建、调试多租户系统的框架和环境。[官网](http://jade.tilab.com/)
- [javatuples](http://www.importnew.com/javatuples/)：正如名字表示的那样，提供tuple支持。尽管目前tuple的概念还有留有争议。[官网](http://www.javatuples.org/)
- [JCommander](http://www.importnew.com/jcommander/)：命令行参数解析器。[官网](http://jcommander.org/)
- [Protégé](http://www.importnew.com/protege/)：提供存在论（ontology）编辑器以及构建知识系统的框架。[官网](http://protege.stanford.edu/)
- [Hutool](https://github.com/looly/hutool)：一个Java工具集，缓存、HTTP、加密解密、DFA、JSON、分组配置文件、数据库操作、图片验证码、Excel读写、定时任务、模板引擎、邮件、Servlet、二维码、Emoji、分词等一系列工具类。[官网](https://hutool.cn)

## 网络爬虫
### 用于分析网站内容的函数库
- [Apache Nutch](http://www.importnew.com/nutch/)：可用于生产环境的高度可扩展、可伸缩的网络爬虫。[官网](http://nutch.apache.org/)
- [Crawler4j](http://www.importnew.com/crawler4j/)：简单的轻量级网络爬虫。[官网](https://github.com/yasserg/crawler4j)
- [JSoup](http://www.importnew.com/jsoup/)：刮取、解析、操作和清理HTML。[官网](http://jsoup.org/)
- [webmagic](https://github.com/code4craft/webmagic/)：一个可扩展的Java爬虫框架，架构类似Python的Scrapy。


## Web框架
### 用于处理Web应用程序不同层次间通讯的框架
- [Apache Tapestry](http://www.importnew.com/apache-tapestry/)：基于组件的框架，使用Java创建动态、强健的、高度可扩展的Web应用程序。[官网](http://tapestry.apache.org/)
- [Apache Wicket](http://www.importnew.com/apache-wicket/)：基于组件的Web应用框架，与Tapestry类似带有状态显示GUI。[官网](http://wicket.apache.org/)
- [Google Web Toolkit](http://www.importnew.com/gwt/)：一组Web开发工具集，包含在客户端将Java代码转为JavaScript的编译器、XML解析器、RCP [官网](http://www.gwtproject.org/)API、JUnit集成、国际化支持和GUI控件。
- [Grails](http://www.importnew.com/grails/)：Groovy框架，旨在提供一个高效开发环境，使用约定而非配置、没有XML并支持混入（mixin）。[官网](https://grails.org/)
- [Ninja](http://www.importnew.com/ninja/)：Java全栈Web开发框架。非常稳固、快速和高效。[官网](http://www.ninjaframework.org/)
- [Pippo](http://www.importnew.com/pippo/)：小型、高度模块化的类Sinatra框架。[官网](http://www.pippo.ro/)
- [Play](http://www.importnew.com/play-framework/)：使用约定而非配置，支持代码热加载并在浏览器中显示错误。[官网](https://www.playframework.com/)
- [PrimeFaces](http://www.importnew.com/primefaces/)：JSF框架，提供免费和带支持的商业版本。包括若干前端组件。[官网](http://primefaces.org/)
- [Ratpack](http://www.importnew.com/ratpack/)：一组Java开发函数库，用于构建快速、高效、可扩展且测试完备的HTTP应用程序。[官网](https://ratpack.io/)
- [Spring Boot](http://www.importnew.com/spring-boot/)：微框架，简化了Spring新程序的开发过程。[官网](http://projects.spring.io/spring-boot/)
- [Spring](http://www.importnew.com/spring-framework/)：旨在简化Java EE的开发过程，提供依赖注入相关组件并支持面向切面编程。[官网](http://projects.spring.io/spring-framework/)
- [Vaadin](http://www.importnew.com/vaadin/)：基于GWT构建的事件驱动框架。使用服务端架构，客户端使用Ajax。[官网](https://vaadin.com/)
- [Blade](http://www.importnew.com/bladejava/)：国人开发的一个轻量级的MVC框架. 它拥有简洁的代码，优雅的设计。[官网](https://lets-blade.com/)


## 业务流程管理套件
### 流程驱动的软件系统构建
- [jBPM](http://www.importnew.com/jbpm/)：非常灵活的业务流程管理框架，致力于构建开发与业务分析人员之间的桥梁。[官网](http://www.jbpm.org/)
- Activity：轻量级工作流和业务流程管理框架。[官网](http://www.activiti.org/) [github](https://github.com/Activiti/Activiti)


## 资源
### 社区
- r/java：Reddit的Java子社区。[官网](https://www.reddit.com/r/java)
- stackoverflow：问答平台。[官网](http://stackoverflow.com/questions/tagged/java)
- vJUG：虚拟Java用户组。[官网](http://virtualjug.com/)
- java8 新特性教程例子。[github](https://github.com/winterbe/java8-tutorial)


## 有影响力的书
### 具有广泛影响且值得阅读的Java经典书籍
- [Effective Java (2nd Edition)](http://www.importnew.com/effective-java/)
- [Java 8 in Action](http://www.importnew.com/java-8-in-action/)
- [Java Concurrency in Practice | Java并发编程实战](http://www.importnew.com/java-concurrency-in-practice/)
- [Thinking in Java | Java编程思想](http://www.importnew.com/thinking-in-java/)
- [Java Puzzlers | Java解惑](http://www.importnew.com/java-puzzlers/)


## 博客
### 可以一边编程一边听的东西
- Java Council：[官网](http://virtualjug.com/#podcast/)
- Java Posse：Discontinued as of 02/2015.[官网](http://www.javaposse.com/)


## 微博、微信公众号
- ImportNew：是最受欢迎的、专注Java技术分享的微信公众号。专注Java技术分享，包括Java基础技术、进阶技能、架构设计和Java技术领域动态等。 
  <br>![](http://ww2.sinaimg.cn/small/63918611gw1epb2c7rv2uj20460463ym.jpg)
- ImportNew 微博：[@ImportNew](http://weibo.com/importnew)


## Twitter
- [Adam Bien](https://twitter.com/AdamBien/)：自由职业者、作家、JavaONE明星演讲者、顾问、Java Champion。
- [Antonio Goncalves](https://twitter.com/agoncal/)：Java Champion、JUG Leader、Devoxx France、Java EE 6/7、JCP、作家。
- [Arun Gupta](https://twitter.com/arungupta/)：Java Champion、JavaONE明星演讲者、JUG Leader、Devoxx4Kids成员、Red Hatter。
- [Bruno Borges](https://twitter.com/brunoborges)：Oracle产品经理、Java Jock。
- [Ed Burns](https://twitter.com/edburns)：Oracle技术团队顾问。
- [Eugen Paraschiv](https://twitter.com/baeldung)：Spring安全课程作者。
- [James Weaver](https://twitter.com/JavaFXpert)：Java、JavaFX、IoT开发者、作者和演讲者。
- [Java EE](https://twitter.com/Java_EE/)：Java EE Twitter官方账号。
- [Java Magazine](https://twitter.com/Oraclejavamag)：Java杂志官方账号。
- [Java.net](https://twitter.com/javanetbuzz/)：Java.net官方账号。
- [Java](https://twitter.com/java/)：Java Twitter官方账号。
- [Javin Paul](https://twitter.com/javinpaul)：知名Java博客作者。
- [Lukas Eder](https://twitter.com/lukaseder)：Data Geekery（jOOQ）创始人兼CEO。
- [Mario Fusco](https://twitter.com/mariofusco)：RedHatter、JUG协调、活跃讲师和作者。
- [Mark Reinhold](https://twitter.com/mreinhold)：Oracle首席架构师、Java平台开发组。
- [Martijn Verburg](https://twitter.com/karianna)：London JUG co-leader、演讲者、作家、Java Champion等。
- [OpenJDK](https://twitter.com/OpenJDK)：OpenJDK官方账号。
- [Reza Rahman](https://twitter.com/reza_rahman)：Java EE、GlassFish、WebLogic传道者、作家、演讲者、开源黑客。
- [Simon Maple](https://twitter.com/sjmaple)：Java Champion、virtualJUG创始人、LJC leader、RebelLabs作者。
- [Stephen Colebourne](https://twitter.com/jodastephen)： Java Champion、演讲者。
- [Tim Boudreau](https://twitter.com/kablosna)：作家、NetBeans大牛。
- [Trisha Gee](https://twitter.com/trisha_gee)：Java Champion、演讲者。


## 知名网站——值得关注的Java技术站点
### 中文站点
- [ImportNew](http://www.importnew.com/)（ImportNew 专注 Java 技术）
### 英文站点
- [Android Arsenal](https://android-arsenal.com)
- [Google Java Style](http://www.importnew.com/google-java-style/)：[官网](https://google.github.io/styleguide/javaguide.html)
- [InfoQ](http://www.importnew.com/infoq/)：[官网](http://www.infoq.com/)
- [Java Code Geeks](http://www.javacodegeeks.com/)
- [Java, SQL, and jOOQ](http://blog.jooq.org/)
- [Java.net](http://java.net/)
- [Javalobby](http://java.dzone.com/)
- [JavaWorld](http://www.importnew.com/javaworld/)：[官网](http://www.javaworld.com/)
- [JAXenter](http://www.importnew.com/jaxenter/)：[官网](https://jaxenter.com/)
- [RebelLabs](http://zeroturnaround.com/rebellabs/)
- [The Java Specialist' Newsletter](http://www.importnew.com/javaspecialists/)：[官网](http://www.javaspecialists.eu/archive/archive.jsp)
- [The Takipi Blog](http://blog.takipi.com/)
- [TheServerSide.com](http://www.importnew.com/theserverside/)：服务器编程交流平台是一个老牌的IT信息网站，关注服务器端编程的，以Java和.Net周边信息为主。[官网](http://www.theserverside.com/)
- [Thoughts On Java](http://www.thoughts-on-java.org/)
- [Vanilla Java](http://vanillajava.blogspot.ch/)
- [Vlad Mihalcea on Hibernate](http://vladmihalcea.com/)
- [Voxxed](https://www.voxxed.com/)
- [OnJava](http://www.importnew.com/onjava/)：O'Reilly Java包含最新的Java技术资讯，优质代码，完全的实例和详解。[官网](