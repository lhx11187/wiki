# Install

## Windows

**JDK**

使用 7-Zip 提取 EXE 安装包

再次提取我们需要的内容

> JAVA_CAB7 JRE
>
> JAVA_CAB9 src.zip
>
> JAVA_CAB10 tools.zip

```cmd
cd .rsrc\1033\JAVA_CAB10
extrac32 111
```

一个名为 *tools.zip* 的文件 将显示在此目录中，使用 7-Zip 提取其内容

运行以下命令将.pack转换为.jar文件

```cmd
cd tools
for /r %x in (*.pack) do .\bin\unpack200 -r "%x" "%~dx%~px%~nx.jar"
```

## Linux

安装 Open JDK

```bash
yum install -y java-1.8.0-openjdk
```

安装 Oracle JDK

```bash
# vi /etc/profile
export JAVA_HOME=/usr/java/jdk1.8.0_211
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib:$CLASSPATH
export JAVA_PATH=${JAVA_HOME}/bin:${JRE_HOME}/bin
export PATH=$PATH:${JAVA_PATH}
```





