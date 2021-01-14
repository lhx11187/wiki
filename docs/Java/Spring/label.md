# label

## mvc:default-servlet-handler

在 xml 文件中配置 `<mvc:default-servlet-handler/>`，Spring MVC 上下文中定义一个org.springframework.web.servlet.resource.DefaultServletHttpRequestHandler，对进入 DispatcherServlet 的 URL 进行筛查，静态资源由 Web 服务器默认的 Servlet 处理，非静态资源的请求，由 DispatcherServlet 处理

## context:property-placeholder

```xml
<context:property-placeholder location="classpath:jdbc/jdbc.properties" ignore-unresolvable="true"/>
```

