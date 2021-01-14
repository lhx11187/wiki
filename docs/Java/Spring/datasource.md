# datasource

## 配置信息

```xml
<!-- 读取db.properties配置信息 -->
<context:property-placeholder location="classpath:db.properties"/>
<!-- 多配置文件 -->
<bean id="propertyConfig"
      class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
    <property name="locations">
        <list>
            <value>classpath:/jdbc/jdbc.properties</value>
            <value>classpath:/redis/redis.properties</value>
            <value>classpath:/fastdfs/fastdfs_con.properties</value>
        </list>
    </property>
</bean>
```

## 连接池

```xml
<!--spring自身的连接池  -->
<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource"> 
  <property name="driverClassName" value="com.mysql.jdbc.Driver"/>  
  <property name="url" value="jdbc:mysql://localhost:3306/dog"/>  
  <property name="username" value="root"/>  
  <property name="password" value="123456"/> 
</bean>

<!--dbcp连接池  -->
<bean id="dataSource" class="org.apache.commons.dbcp.BasicDataSource"> 
  <property name="driverClassName" value="com.mysql.jdbc.Driver"/>  
  <property name="url" value="jdbc:mysql://localhost:3306/dog"/>  
  <property name="username" value="root"/>  
  <property name="password" value="123456"/> 
</bean>

<!--c3p0连接池  -->
<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource"> 
  <property name="driverClass" value="com.mysql.jdbc.Driver"/>  
  <property name="jdbcUrl" value="jdbc:mysql://localhost:3306/dog"/>  
  <property name="user" value="root"/>  
  <property name="password" value="123456"/> 
</bean>

<!--Druid连接池  -->
<bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource"> 
  <property name="driverClassName" value="com.mysql.jdbc.Driver"/>  
  <property name="url" value="jdbc:mysql://localhost:3306/dog"/>  
  <property name="username" value="root"/>  
  <property name="password" value="123456"/> 
  <!-- 初始化大小、最小、最大 -->
  <property name="initialSize" value="10" />
  <property name="minIdle" value="10" />
  <property name="maxActive" value="20" />
  <!-- 配置获取连接等待超时的时间 -->
  <property name="maxWait" value="60000" />
  <!-- 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒 -->
  <property name="timeBetweenEvictionRunsMillis" value="60000" />
  <!-- 配置一个连接在池中最小生存的时间，单位是毫秒 -->
  <property name="minEvictableIdleTimeMillis" value="300000" />
  <property name="validationQuery" value="SELECT 'x'" />
  <property name="testWhileIdle" value="true" />
  <property name="testOnBorrow" value="false" />
  <property name="testOnReturn" value="false" />
  <!-- 打开PSCache，并且指定每个连接上PSCache的大小 -->
  <property name="poolPreparedStatements" value="true" />
  <property name="maxPoolPreparedStatementPerConnectionSize" value="20" />
  <!-- 配置监控统计拦截的filters -->
  <property name="filters" value="stat" />
</bean>
```

## 事务

```xml
<!-- 数据事物管理器 -->
<bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="dataSource"></property>
</bean>
```

- 注解

```xml
<!-- 配置自动扫描策略 -->
<context:component-scan base-package="com.proc"/>
<!-- 使得事务注解生效 -->
<!-- @Transactional -->
<tx:annotation-driven transaction-manager="transactionManager"/>
```

- XML配置

[Spring 基于xml配置方式的事务](https://www.cnblogs.com/caoyc/p/5633232.html)

```xml
<!-- 配置事务属性 -->
<tx:advice id="advice" transaction-manager="transactionManager">
    <tx:attributes>
        <tx:method name="get*" read-only="true"/>
        <tx:method name="find*" propagation="SUPPORTS" read-only="true"/>
        <tx:method name="add*" rollback-for="Exception" />
    </tx:attributes>
</tx:advice>
<!-- 配置事务的切入点： AOP切入 -->
<aop:config>
    <!-- 配置切入表达式 -->
    <aop:pointcut expression="execution(* com.proc.service.*.*(..))" id="pointcut"/>
    <aop:advisor pointcut-ref="pointcut" advice-ref="advice"></aop:advisor>
</aop:config>
```

- 依赖

```xml
<dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
    <version>1.9.1</version>
</dependency>
```

### 事务属性 `<tx:method ...` 对应的属性

1. `name`: 指定切入点方法，属于之前配置的切入点表达式；可以使用通配符进行匹配，
2. `isolation`: 用于指定事务的隔离级别。默认值是 `DEFAULT` ,表示使用数据库的默认隔离级别
3. `propagation`: 用于指定事务的传播行为。默认值是 `REQUIRED` ,表示一定会有事务，增删改的选择。查询方法可以选择 `SUPPORTS`.
4. `read-only`: 用于指定事务是否只读。只有查询方法才能设置为 `true` .默认值是 `false` ,表示读写
5. `timeout`: 用于指定事务的超时时间，默认值是 `-1`，表示永不超时。如果指定了数值，以秒为单位。
6. `rollback-for`: 用于指定一个异常，当产生该异常时，事务回滚；产生其他异常时，事务不会滚；没有默认值(设置值)，任何异常都会回滚。
7. `no-rollback-for`: 用于指定一个异常，当产生该异常时，事务不会滚；产生其他异常时事务回滚；没有默认值(设置值)，任何异常都会回滚







