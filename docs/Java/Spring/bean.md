# bean

## 作用域

### bean 的作用域

- singleton
- prototype

bean 的作用域为 `singleton` 时，bean 对象是在 Spring 容器启动时就进行创建了。即默认情况下会在容器启动时初始化 bean，但我们也可以指定 bean 节点的 `lazy-init="true"` 来延迟初始化 bean，这时候，只有第一次获取 bean 会才初始化 bean。

如果想对所有 bean 都应用延迟初始化，可以在根节点 beans 设置 `default-lazy-init="true"`

bean 的作用域为 `prototype` 时,bean 对象并不会在 Spring 容器启动时就进行创建。bean 对象将会在调用 getBean() 方法时进行创建。

```xml
<bean id="personService" class="com.x.service.impl.PersonServiceBean" scope="prototype"/>
```

bean 对象无外乎是在以下两个时刻进行实例化的:

- 调用 getBean() 方法时
- Spring 容器启动时

### bean 的初始化方法和销毁方法

我们希望在 bean 被初始化的时候，就初始化某些资源。为了达到这样的目的，我们可修改 PersonServiceBean 类的代码为

```java
public class PersonServiceBean implements PersonService {
    public void init() {
        System.out.println("初始化某些资源");
    }
}
```

这样，我们的目的就具体地成为：当 Spring 容器初始化 PersonServiceBean 对象之后，就要执行该对象的 init() 方法。为了达成这样的目的，只须修改 Spring 的配置文件 beans.xml 的内容为

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="personService" class="com.x.service.impl.PersonServiceBean" lazy-init="false" init-method="init"/>

</beans>
```

现在我们又希望在 bean 被销毁的时候，就释放或关闭某些资源。为了达到这样的目的，我们可修改 PersonServiceBean 类的代码为

```java
public void destroy() { 
    System.out.println("释放初始化的资源"); 
}
```

紧接着，我们要修改 Spring 的配置文件 beans.xml 的内容

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="personService" class="com.x.service.impl.PersonServiceBean" lazy-init="false" init-method="init" destroy-method="destroy" />
    
</beans>
```

## 属性注入

- [Spring的Bean之设置Bean值](https://www.cnblogs.com/chenssy/archive/2013/03/17/2964593.html)

### 构造函数注入

- 根据索引赋值，索引都是以 0 开头

```xml
<bean id="memberBean" class="com.x.service.impl.MemberBean">
  <constructor-arg index="0" value="刘晓刚"/>
  <constructor-arg index="1" value="3500"/>
  <constructor-arg index="2" ref="dept"/>
  <constructor-arg index="3" value="男"/>
  <constructor-arg index="4">
    <value><![CDATA[<aaa>]]></value>
  </constructor-arg>
</bean>
```

- 根据所属类型传值

这种方法基本上不怎么适用，因为一个类里可以有好几个相同基本类型的变量，很容易就混淆值传给哪一个参数了

```xml
<bean id="memberBean" class="com.x.service.impl.MemberBean"> 
  <constructor-arg type="java.lang.String" value="刘晓刚"/>  
  <constructor-arg type="java.lang.Double" value="3500"/>  
  <constructor-arg type="www.spring.constructor.Dept" ref="dept"/>  
  <constructor-arg type="java.lang.String" value="男"/> 
</bean>
```

- 根据参数的名字传值

推荐用法，根据名字来传值的，所以基本上只要名字对了，这个值就可以获取到

```xml
<bean id="memberBean" class="com.x.service.impl.MemberBean"> 
  <constructor-arg name="name" value="刘晓刚"/>
  <constructor-arg name="salary" value="3500"/>
  <constructor-arg name="dept" ref="dept"/>
  <constructor-arg name="sex" value="男"/>
</bean>
```

- 直接传值

直接给参数赋值，这种方法也是根据顺序排的，所以一旦调换位置的话，就会出现bug，这种方法已经很原始了

```xml
<bean id="memberBean" class="com.x.service.impl.MemberBean">
  <constructor-arg value="刘晓刚"/>
  <constructor-arg value="3500"/>
  <constructor-arg ref="dept"/>
  <constructor-arg value="男"/>
</bean>
```

### set 注入

```xml
<bean id="dept" class="www.spring.constructor.Dept">
  <property name="dname" value="北航"/>
  <property name="deptno" value="00001"/>
</bean>
```


