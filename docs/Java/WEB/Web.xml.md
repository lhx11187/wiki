# Web.xml

- [Web.xml详解](https://blog.csdn.net/believejava/article/details/43229361)

## 加载过程

1. 启动 WEB 项目的时候，容器首先会去它的配置文件 web.xml 读取两个节点:  \<listener>\</listener> 和 \<context-param>\</context-param>。
2. 紧接着，容器创建一个 <span style="color:red;">ServletContext（Application）</span>，这个WEB项目所有部分都将共享这个上下文。
3. 容器以 \<context-param>\</context-param> 的 name 作为键，value 作为值，将其转化为键值对，存入 ServletContext。
4. 容器创建 \<listener>\</listener> 中的类实例，根据配置的 class 类路径 \<listener-class> 来创建监听，在监听中会有contextInitialized(ServletContextEvent args) 初始化方法，启动 Web 应用时，系统调用 Listener 的该方法，在这个方法中获得：<span style="color:red;">ServletContext</span> application = ServletContextEvent.getServletContext();  <span style="color:red;">context-param 的值</span> = application.getInitParameter("context-param的键");  得到这个 context-param 的值之后，你就可以做一些操作了。
5. 举例：你可能想在项目启动之前就打开数据库，那么这里就可以在 \<context-param> 中设置数据库的连接方式（驱动、url、user、password），在监听类中初始化数据库的连接。这个监听是自己写的一个类，除了初始化方法，它还有销毁方法，用于关闭应用前释放资源。比如:说数据库连接的关闭，此时，调用 contextDestroyed(ServletContextEvent args)，关闭Web应用时，系统调用Listener的该方法。
6. 接着，容器会读取 \<filter>\</filter>，根据指定的类路径来实例化过滤器。
7. <span style="color:red;">以上都是在WEB项目还没有完全启动起来的时候就已经完成了的工作。</span>如果系统中有 Servlet，则 Servlet 是在第一次发起请求的时候被实例化的，而且一般不会被容器销毁，它可以服务于多个用户的请求。所以，Servlet 的初始化都要比上面提到的那几个要迟。
8. 总的来说，web.xml 的加载顺序是:<span style="color:red;">\<context-param></span>**->**<span style="color:red;">\<listener></span>**->**<span style="color:red;">\<filter></span>**->**<span style="color:red;">\<servlet></span>。其中，如果 web.xml 中出现了相同的元素，则按照在配置文件中出现的先后顺序来加载。
9. 对于某类元素而言，与它们出现的顺序是有关的。以 \<filter>为例，web.xml 中当然可以定义多个 \<filter>，与 \<filter> 相关的一个元素是 \<filter-mapping>，**注意**，对于拥有相同 \<filter-name> 的 \<filter> 和 \<filter-mapping> 元素而言，\<filter-mapping> 必须出现在 \<filter> 之后，否则当解析到 \<filter-mapping> 时，它所对应的 \<filter-name>还未定义。web 容器启动初始化每个 \<filter> 时，按照 \<filter> 出现的顺序来初始化的，当请求资源匹配多个 \<filter-mapping> 时，\<filter> 拦截资源是按照 \<filter-mapping> 元素出现的顺序来依次调用 doFilter() 方法的。\<servlet> 同 \<filter> 类似，此处不再赘述。

## 标签详解

### display-name

\<display-name>test-hwp-web-application\</display-name> 定义了web应用的名称，可以在http://localhost:8080/manager/html中显示。

### context-param

- \<context-param> 元素含有一对参数名和参数值，用作应用的 Servlet 上下文初始化参数，参数名在整个Web应用中必须是<span style="color:red;">惟一</span>的，在web应用的整个生命周期中上下文初始化参数都存在，任意的 Servlet 和 jsp 都可以随时随地访问它。
- 配置 Spring，<span style="color:red;">必须需要 \<listener>，而 \<context-param> 可有可无</span>，如果在web.xml中不写 \<context-param>配置信息，默认的路径是/WEB-INF/applicationContext.xml，在WEB-INF目录下创建的xml文件的名称必须是applicationContext.xml。如果是要自定义文件名可以在web.xml里加入contextConfigLocation这个context参数：在\<param-value>\</param-value>里指定相应的xml文件名，如果有多个xml文件，可以写在一起并以“,”号分隔，比如在business-client工程中，我们采用了自定义配置方式，\<context-param>配置如下：

```xml
<!-- spring config -->
<context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>/WEB-INF/spring-configuration/*.xml</param-value>
</context-param>
<listener>
     <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>
```

- 部署在同一容器中的多个Web项目，要配置不同的webAppRootKey，web.xml文件中最好定义webAppRootKey参数，如果不定义，将会缺省为“webapp.root”，如下：

```xml
<!-- 应用路径  -->  
<context-param>  
    <param-name>webAppRootKey</param-name>  
    <param-value>webapp.root</param-value>  
</context-param>
```

- 在不同环境下如何获取

在 JSP 网页中可以使用下列方法来取得：<span style="color:red;">${initParam.param_name}</span>

在 Servlet 可以使用下列方法来获得：

```java
String param_name = getServletContext().getInitParamter("param_name");
```

Servlet 的 ServletConfig 对象拥有该 Servlet 的 ServletContext 的一个引用

所以可这样取得上下文初始化参数：

```java
getServletConfig().getServletContext().getInitParameter()
```

也可以在Servlet中直接调用，两者是等价的

```java
getServletContext().getInitParameter()
```

使用上下文初始化参数


```xml
<context-param>
    <param-name>webAppRootKey</param-name>
    <param-value>business.root</param-value>
</context-param>
<!-- spring config -->
<context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:spring/spring-config.xml</param-value>
</context-param>
```

### session-config

```xml
<!-- Set timeout to 120 minutes -->
<session-config> 
   <session-timeout>120</session-timeout> 
</session-config> 
```

\<session-config> 用于设置容器的 session 参数，比如：\<session-timeout> 用于指定 http session 的失效时间。默认时间 30 minutes。\<session-timeout> 用来指定默认的会话超时时间间隔，以分钟为单位。该元素值必须为整数。如果 session-timeout元素的值为零或负数，则表示会话将永远不会超时。

### listener

```xml
<!-- log4j 监听器 -->
<listener>
    <listener-class>org.springframework.web.util.Log4jConfigListener</listener-class>
</listener>
```

#### Listener介绍

\<listener>为web应用程序定义监听器，监听器用来监听各种事件，比如：Application和Session事件，所有的监听器按照相同的方式定义，功能取决去它们各自实现的接口，常用的Web事件接口有如下几个：

- ServletContextListener：用于监听Web Application的启动和关闭；
- ServletContextAttributeListener：用于监听ServletContext范围（Application）内属性的改变；
- ServletRequestListener：用于监听用户的请求；
- ServletRequestAttributeListener：用于监听ServletRequest范围（Request）内属性的改变；
- HttpSessionListener：用于监听用户session的开始和结束；
- HttpSessionAttributeListener：用于监听HttpSession范围（Session）内属性的改变。

\<listener>主要用于监听Web应用事件，其中有两个比较重要的Web应用事件：<span style="color:red;">Application的启动和停止</span>（starting up or shutting down）和 <span style="color:red;">Session的创建和失效</span>（created or destroyed）。<span style="color:red;">Application启动事件发生在应用第一次被Servlet容器装载和启动的时候；停止事件发生在Web应用停止的时候。</span>Session创建事件发生在每次一个新的Session创建的时候，类似地Session失效事件发生在每次一个Session失效的时候。为了使用这些Web应用事件做些有用的事情，我们必须创建和使用一些特殊的“监听类”。它们是实现了以下两个接口中任何一个接口的简单java类：<span style="color:red;">javax.servlet.ServletContextListener</span>或<span style="color:red;">javax.servlet.http.HttpSessionListener</span>，如果想让你的类监听Application的启动和停止事件，你就得实现ServletContextListener接口；想让你的类去监听Session的创建和失效事件，那你就得实现HttpSessionListener接口。

#### Listener配置

配置Listener只要向Web应用注册Listener实现类即可，无序配置参数之类的东西，因为<span style="color:red;">Listener获取的是Web应用ServletContext（Application）的配置参数。</span>为Web应用配置Listener的两种方式：

- 使用@WebListener修饰Listener实现类即可。
- 在web.xml文档中使用\<listener>进行配置。

我们选择web.xml这种配置方式，只有一个元素\<listener-class>指定Listener的实现类，如下所示：

```xml
<listener>
   <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>
```

这里的\<listener>用于Spring的加载，Spring加载可以利用<span style="color:red;">ServletContextListener</span>实现，也可以采用<span style="color:red;">load-on-startup Servlet</span> 实现，但是，当\<filter>需要用到 bean 时，加载顺序是先加载\<filter>后加载\<servlet>，则\<filter>中初始化操作中的 bean 为null；所以，如果\<filter>中要使用到bean，此时就可以根据加载顺序\<listener> -> \<filter> -> \<servlet>，将spring的加载改成Listener的方式。

-  采用load-on-startup Servlet 实现：

```xml
<servlet>  
   <servlet-name>context</servlet-narne> 
   <servlet-class>org.springframework.web.context.ContextLoaderServlet</servlet-class>  
   <load-on-startup>1</load-on-startup>  
</servlet>
```

- 利用ServletContextListener实现：

```xml
<listener>
   <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>
```

### filter

```xml

<!--****************************过滤器配置*********************************-->
<!-- 字符集过滤器 -->
<filter>
    <filter-name>CharacterEncodingFilter</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
    <init-param>
        <param-name>forceEncoding</param-name>
        <param-value>true</param-value>
    </init-param>
</filter>
<!--****************************映射关系配置********************************-->
<filter-mapping>
    <filter-name>CharacterEncodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

#### Filter介绍

Filter可认为是Servle的一种“加强版”，主要用于对用户请求request进行预处理，也可以对Response进行后处理，是个<span style="color:red;">典型的处理链。使用Filter的完整流程是：Filter对用户请求进行预处理，接着将请求HttpServletRequest交给Servlet进行处理并生成响应，最后Filter再对服务器响应HttpServletResponse进行后处理。</span>Filter与Servlet具有完全相同的生命周期，且Filter也可以通过\<init-param>来配置初始化参数，获取Filter的初始化参数则使用FilterConfig的getInitParameter()。

换种说法，Servlet里有request和response两个对象，Filter能够在一个request到达Servlet之前预处理request，也可以在离开Servlet时处理response，Filter其实是一个Servlet链。以下是Filter的一些常见应用场合

- 认证Filter
- 日志和审核Filter
- 图片转换Filter
- 数据压缩Filter
- 密码Filter
- 令牌Filter
- 触发资源访问事件的Filter
- XSLT Filter
- 媒体类型链Filter

Filter可负责拦截多个请求或响应；一个请求或响应也可被多个Filter拦截。创建一个Filter只需两步：

- 创建Filter处理类
- Web.xml文件中配置Filter

Filter必须实现javax.servlet.Filter接口，在该接口中定义了三个方法：

- void init(FilterConfig config)：用于完成Filter的初始化。FilteConfig用于访问Filter的配置信息。
- void destroy()：用于Filter销毁前，完成某些资源的回收。
- void doFilter(ServletRequest request,ServletResponse response,FilterChain chain)：实现过滤功能的核心方法，该方法就是对每个请求及响应增加额外的处理。该方法实现对用户请求request进行预处理，也可以实现对服务器响应response进行后处理---它们的分界线为是否调用了chain.doFilter(request，response)，执行该方法之前，即对用户请求request进行预处理，执行该方法之后，即对服务器响应response进行后处理。

#### Filter配置

Filter配置与Servlet的配置非常相似，需要配置两部分：配置Filter名称和Filter拦截器URL模式。区别在于Servlet通常只配置一个URL，而Filter可以同时配置多个请求的URL。配置Filter有两种方式：

- 在Filter类中通过Annotation进行配置。
- 在web.xml文件中通过配置文件进行配置。

我们使用的是web.xml这种配置方式，下面重点介绍\<filter>内包含的一些元素。

\<filter>用于指定Web容器中的过滤器，可包含\<filter-name>、\<filter-class>、\<init-param>、\<icon>、\<display-name>、\<description>。

- \<filter-name>：用来定义过滤器的名称，该名称在整个程序中都必须唯一。
- \<filter-class>：指定过滤器类的完全限定的名称，即Filter的实现类。
- \<init-param>：为Filter配置参数，与\<context-param>具有相同的元素描述符\<param-name>和\<param-value>。
- \<filter-mapping>：用来声明Web应用中的过滤器映射，过滤器被映射到一个servlet或一个URL模式。这个过滤器的\<filter>和\<filter-mapping>必须具有相同的\<filter-name>，指定该Filter所拦截的URL。过滤是按照部署描述符的\<filter-mapping>出现的顺序执行的。

##### 字符集过滤器

```xml
<filter>
    <filter-name>CharacterEncodingFilter</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
    <init-param>
        <param-name>forceEncoding</param-name>
        <param-value>true</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>CharacterEncodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

- CharacterEncodingFilter类可以通过简单配置来帮我们实现字符集转换的功能。
- 参数encoding用于指定编码类型，参数forceEncoding设为true时，强制执行request.setCharacterEncoding(this.encoding)和reponse.setCharacterEncoding(this.encoding)中的方法。

##### 缓存控制

```xml
<filter>
    <filter-name>NoCache Filter</filter-name>
    <filter-class>com.yonyou.mcloud.cas.client.authentication.NoCacheFilter</filter-class>
</filter>
<filter-mapping>
    <filter-name>NoCache Filter</filter-name>
    <!—表示对URL全部过滤-->
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

### servlet

```xml
<servlet>
    <servlet-name>spring-mvc-control</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
      <param-name>publishContext</param-name>
      <param-value>false</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>spring-mvc-control</servlet-name>
    <!-- /  即表示拦截所有请求，但不拦截 jsp -->
    <!-- /* 即表示所有的都拦截，包括 jsp -->
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

#### Servlet介绍

Servlet通常称为服务器端小程序，是运行在服务器端的程序，用于处理及响应客户的请求。Servlet是个特殊的java类，继承于<span style="color:red;">HttpServlet</span>。客户端通常只有GET和POST两种请求方式，Servlet为了响应这两种请求，必须重写doGet()和doPost()方法。大部分时候，Servlet对于所有的请求响应都是完全一样的，此时<span style="color:red;">只需要重写service()方法即可响应客户端的所有请求。</span>另外，HttpServlet有两个方法：

- init(ServletConfig config)：创建Servlet实例时，调用该方法来<span style="color:red;">初始化Servlet资源</span>。
- destroy()：销毁Servlet实例时，自动调用该方法来回收资源。

通常无需重写init()和destroy()两个方法，除非需要在初始化Servlet时，完成某些资源初始化的方法，才考虑重写init()方法，<span style="color:red;">如果重写了init()方法，应在重写该方法的第一行调用super.init(config)，该方法将调用HttpServlet的init()方法。</span>如果需要在销毁Servlet之前，先完成某些资源的回收，比如关闭数据库连接，才需要重写destory方法()。

Servlet的生命周期，创建Servlet实例有两个时机：

- 客户端第一次请求某个Servlet时，系统创建该Servlet的实例，大部分Servlet都是这种Servlet。
- Web应用启动时立即创建Servlet实例，即load-on-start Servlet。

每个Servlet的运行都遵循如下生命周期：

- <span style="color:red;">创建Servlet实例</span>。
- Web容器<span style="color:red;">调用Servlet的init()方法</span>，对Servlet进行初始化。
- Servlet初始化后，将一直存在于容器中，用于<span style="color:red;">响应客户端请求</span>，如果客户端发送GET请求，容器调用Servlet的doGet()方法处理并响应请求；如果客户端发送POST请求，容器调用Servlet的doPost()方法处理并响应请求。或者统一使用service()方法处理来响应用户请求。
- Web容器决定销毁Servlet时，<span style="color:red;">先调用Servlet的destory()方法</span>，通常在关闭Web应用时<span style="color:red;">销毁Servlet实例</span>。

#### Servlet配置

为了让Servlet能响应用户请求，还必须将Servlet配置在web应用中，配置Servlet需要修改web.xml文件。从Servlet3.0开始，配置Servlet有两种方式：

- 在Servlet类中使用@WebServlet Annotation进行配置。
- 在web.xml文件中进行配置。

```java
/**
* 使用@WebServlet注解配置WxServlet,urlPatterns属性指明了WxServlet的访问路径
*/
@WebServlet(urlPatterns="/WxServlet")
```

我们用web.xml文件来配置Servlet，需要配置\<servlet>和\<servlet-mapping>。\<servlet>用来声明一个Servlet。\<icon>、\<display-name>和\<description>元素的用法和\<filter>的用法相同。\<init-param>元素与\<context-param>元素具有相同的元素描述符，可以使用\<init-param>子元素将初始化参数名和参数值传递给Servlet，访问Servlet配置参数通过ServletConfig对象来完成，ServletConfig提供如下方法：

<span style="color:red;">java.lang.String.getInitParameter(java.lang.String name)，用于获取初始化参数。</span>ServletConfig获取配置参数的方法和ServletContext获取配置参数的方法完全一样，只是ServletConfig是取得当前Servlet的配置参数，而ServletContext是获取整个Web应用的配置参数。

##### \<description>、\<display-name>和\<icon>

- \<description>：为Servlet指定一个文本描述。
- \<display-name>：为Servlet提供一个简短的名字被某些工具显示。
- \<icon>：为Servlet指定一个图标，在图形管理工具中表示该Servlet。

##### \<servlet-name>、\<servlet-class>和\<jsp-file>元素

\<servlet>必须含有\<servlet-name>和\<servlet-class>，或者\<servlet-name>和\<jsp-file>。 描述如下：

- \<servlet-name>：用来定义servlet的名称，该名称在整个应用中必须是惟一的。
- \<servlet-class>：用来指定servlet的完全限定的名称。
- \<jsp-file>：用来指定应用中JSP文件的完整路径。这个完整路径必须由/开始。

##### \<load-on-startup>

如果load-on-startup元素存在，而且也指定了jsp-file元素，则JSP文件会被重新编译成Servlet，同时产生的Servlet也被载入内存。\<load-on-startup>的内容可以为空，或者是一个整数。这个值表示由Web容器载入内存的顺序。

举个例子：如果有素两个Servlet元素都含有\<load-on-startup>子元，则\<load-on-startup>子元素值较小的Servlet将先被加载。如果\<load-on-startup>子元素值为空或负值，则由Web容器决定什么时候加载Servlet。如果两个Servlet的\<load-on-startup>子元素值相同，则由Web容器决定先加载哪一个Servlet。\<load-on-startup>1\</load-on-startup>表示启动容器时，初始化Servlet。

##### \<servlet-mapping>

\<servlet-mapping>含有\<servlet-name>和\<url-pattern>

- \<servlet-name>：Servlet的名字，唯一性和一致性，与\<servlet>元素中声明的名字一致。
- \<url-pattern>：指定相对于Servlet的URL的路径。该路径相对于web应用程序上下文的根路径。\<servlet-mapping>将URL模式映射到某个Servlet，即该Servlet处理的URL。

匹配规则和顺序如下：

1. **精确路径匹配**。例子：比如servletA 的url-pattern为 /test，servletB的url-pattern为 /\* ，这个时候，如果我访问的url为http://localhost/test ，这个时候容器就会先进行精确路径匹配，发现/test正好被servletA精确匹配，那么就去调用servletA，也不会去理会其他的servlet了。
2. **最长路径匹配**。例子：servletA的url-pattern为/test/\*，而servletB的url-pattern为/test/a/\*，此时访问http://localhost/test/a时，容器会选择路径最长的servlet来匹配，也就是这里的servletB。
3. **扩展匹配**。如果url最后一段包含扩展，容器将会根据扩展选择合适的servlet。例子：servletA的url-pattern：\*.action
4. 如果前面三条规则都没有找到一个servlet，容器会根据url选择对应的请求资源。如果应用定义了一个default servlet，则容器会将请求丢给default servlet。

根据这个规则表，就能很清楚的知道servlet的匹配过程，所以定义servlet的时候也要考虑url-pattern的写法，以免出错。 

对于filter，不会像servlet那样只匹配一个servlet，因为filter的集合是一个链，所以只会有处理的顺序不同，而不会出现只选择一个filter。Filter的处理顺序和filter-mapping在web.xml中定义的顺序相同。

##### 加载Servlet的过程

容器的Context对象对请求路径(URL)做出处理，去掉请求URL的上下文路径后，按路径映射规则和Servlet映射路径（\<url-pattern>）做匹配，如果匹配成功，则调用这个Servlet处理请求。 

#### DispatcherServlet在web.xml中的配置

```xml

<!-- Spring view分发器  对所有的请求都由business对应的类来控制转发 -->
<servlet>
    <servlet-name>business</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
      <param-name>publishContext</param-name>
      <param-value>false</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>
```

配置Spring MVC，指定处理请求的Servlet，有两种方式：

- 默认查找MVC配置文件的地址是：/WEB-INF/${servletName}-servlet.xml
- 可以通过配置修改MVC配置文件的位置，需要在配置DispatcherServlet时指定MVC配置文件的位置。

```xml
<servlet>
    <servlet-name>spring</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
        <param-name>publishContext</param-name>
        <param-value>false</param-value>
    </init-param>
    <init-param>  
        <param-name>contextConfigLocation</param-name>  
        <param-value>classpath:config/spring-servlet.xml</param-value>  
    </init-param> 
    <load-on-startup>1</load-on-startup>
</servlet>
```

其中，<span style="color:red;">classpath</span>是web项目的类路径，可以理解为classes下面。因为无论这些配置文件放在哪，编译之后如果没有特殊情况的话都直接在classes下面。jar包的话虽然放在lib文件夹里，但实际上那些类可以直接引用，比如：com.test.ABC，仿佛也在classes下面一样。

**classpath和classpath\*区别：**同名资源存在时，classpath只从第一个符合条件的classpath中加载资源，而classpath\*会从所有的classpath中加载符合条件的资源。classpath\*，需要遍历所有的classpath，效率肯定比不上classpath，因此在项目设计的初期就尽量规划好资源文件所在的路径，避免使用classpath\*来加载。

#### ContextLoaderListener和DispatcherServlet初始化上下文关系和区别

ContextLoaderListener初始化的上下文加载的Bean是对于整个应用程序共享的，一般如：DAO层、Service层Bean；DispatcherServlet初始化的上下文加载的Bean是只对Spring MVC有效的Bean，如：Controller、HandlerMapping、HandlerAdapter等，该初始化上下文只加载Web相关组件。

**注意：**用户可以配置多个DispatcherServlet来分别处理不同的url请求，每个DispatcherServlet上下文都对应一个自己的子Spring容器，他们都拥有相同的父Spring容器（业务层，持久（dao）bean所在的容器）。

### welcome-file-list

```xml
<!-- welcome page -->
<welcome-file-list>
    <welcome-file>index.html</welcome-file>
</welcome-file-list>
```

\<welcome-file-list>包含一个子元素\<welcome-file>，\<welcome-file>用来指定首页文件名称。\<welcome-file-list>元素可以包含一个或多个\<welcome-file>子元素。如果在第一个\<welcome-file>元素中没有找到指定的文件，Web容器就会尝试显示第二个，以此类推。











