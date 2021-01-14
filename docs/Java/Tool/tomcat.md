# tomcat

## Install

### Linux

- 在 bin 路径下创建 setenv.sh

chmod +x setenv.sh

```bash
#add tomcat pid
CATALINA_PID="$CATALINA_BASE/tomcat.pid"
#add java opts
JAVA_OPTS="-server -XX:PermSize=256M -XX:MaxPermSize=1024m -Xms1024M -Xmx2048M -XX:MaxNewSize=512m"
```

注：JDK8中用 metaspace 代替 permsize ，因此在许多我们设置 permsize 大小的地方同样需要修改配置为metaspace

将 -XX:PermSize=200m;-XX:MaxPermSize=256m;
修改为：-XX:MetaspaceSize=200m;-XX:MaxMetaspaceSize=256m;

- setclasspath.sh

```bash
export JAVA_HOME=/usr/local/package/jdk1.8.0_181
export JRE_HOME=/usr/local/package/jdk1.8.0_181/jre
```



- 在 /usr/lib/systemd/system 路径下添加 tomcat.service 文件

```bash
[Unit]
Description=Tomcat
After=syslog.target network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
Environment="JAVA_HOME=/root/package/jdk1.8.0_211"
PIDFile=/root/package/apache-tomcat-9.0.13/tomcat.pid
ExecStart=/root/package/apache-tomcat-9.0.13/bin/startup.sh
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s QUIT $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

- 修改 catalina.sh

```bash
CATALINA_PID="/home/mes/tomcat.pid"
```

- tomcat.service

```bash
[Unit]
Description=Tomcat
After=network.target

[Service]
Type=forking
Environment="JAVA_HOME=/root/package/jdk1.8.0_211"
PIDFile=/home/mes/tomcat8/tomcat.pid
ExecStart=/home/mes/tomcat8/bin/catalina.sh start
ExecReload=/home/mes/tomcat8/bin/catalina.sh restart
ExecStop=/home/mes/tomcat8/bin/catalina.sh stop

[Install]
WantedBy=multi-user.target
```



/usr/lib/systemd/system/tomcat8.service

```ini
[Unit]
Description=Tomcat9
After=network.target

[Service]
Type=forking
Environment="JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.272.b10-1.el8_2.x86_64/jre"
Environment="JAVA_OPTS=-Djava.security.egd=file:///dev/urandom"
Environment="CATALINA_BASE=/usr/tomcat"
Environment="CATALINA_HOME=/usr/tomcat"
Environment="CATALINA_PID=/usr/tomcat/temp/tomcat.pid"
Environment="CATALINA_OPTS=-Xms512M -Xmx1024M -server -XX:+UseParallelGC"
 
ExecStart=/usr/tomcat/bin/startup.sh
ExecStop=/usr/tomcat/bin/shutdown.sh
 
[Install]
WantedBy=multi-user.target
```



### Windows

```powershell
service.bat install tomcat8
service.bat remove tomcat8
# 设置依赖关系，限制启动顺序
sc config TomcatService depend= MySQLService
```

