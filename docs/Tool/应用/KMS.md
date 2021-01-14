# KMS

- [vlmcsd](https://github.com/Wind4/vlmcsd) [vlmcsd](https://github.com/kkkgo/vlmcsd)
- [使用 KMS 激活 Microsoft 产品](https://moedog.org/1117.html)
- [一句命令激活windows/office](https://03k.org/kms.html)
- [itellyou](http://msdn.itellyou.cn/)



## Windows

- [kmsclientkeys](https://docs.microsoft.com/zh-cn/windows-server/get-started/kmsclientkeys)

输入以下命令，清除原密钥并设置KMS服务器。

>kms.03k.org
>
>kms.loli.beer
>
>kms.cangshui.net
>
>kms.library.hk
>
>kms.chinancce.com
>
>kms.nethorizon.cn

```powershell
wmic os get caption
slmgr.vbs /upk
slmgr.vbs /ipk [GVLK]
slmgr.vbs /skms kms.loli.beer
slmgr.vbs /ato
slmgr.vbs /xpr
slmgr.vbs /dli
```



## Office

- [office2016](https://technet.microsoft.com/zh-cn/library/dn385360(v=office.16).aspx)
- [office2013](https://technet.microsoft.com/ZH-CN/library/dn385360.aspx)
- [office2010](https://technet.microsoft.com/ZH-CN/library/ee624355(v=office.14).aspx)

前提条件：Office必须为GVLK版本，否则无法激活。

当你看到successful时，就代表已经完成了激活。

powershell

```powershell
cd "C:\Program Files (x86)\Microsoft Office\Office16"
foreach ($x in Get-ChildItem ..\root\Licenses16\*_KMS*.xrm-ms -name) {cscript ospp.vbs /inslic:"..\root\Licenses16\$x"} #安装KMS许可证
cscript "ospp.vbs" /inpkey:[GVLK]
cscript "ospp.vbs" /sethst:kms.03k.org
cscript "ospp.vbs" /act
cscript "ospp.vbs" /dstatus
cscript "ospp.vbs" /unpkey:XXXXX #(要卸载的密钥后 5 位)
```

**批量与零售版本的判断与转换**

Office 2010 / 2013 对批量和零售的划分较为清楚，安装时就要确认安装的是批量版本，下面是判断批量与零售的方法：

1. 从安装包名称判断 (仅适用于 MSDN 来源的镜像)：批量的安装包以 SW 开头；零售以语言开头，如 cn 。
2. 已安装从软件判断：转到软件的产品信息页面 (就是显示是否激活的页面)，查看是否有 更改产品密钥 选项，有则为批量，没有则为零售。

Office 2016 也可以使用上面的方法判断，但是 16 的零售基于 C2R ，安装后可以轻松转换为批量版本 (最新的 2016 零售也可以通过安装证书直接转为 2019 版本)。

[Office Tool Plus](https://otp.landian.vip/zh-cn/)

**更改Office 2019 的安装路径**

```powershell
mkdir "D:\Program Files\Microsoft Office"
mklink /J "C:\Program Files\Microsoft Office" "D:\Program Files\Microsoft Office"
```

**打造MS Office 2019 VL 官方镜像安装与激活**

https://www.nethorizon.cn/2019/04/679.html

[ODT](https://www.microsoft.com/en-us/download/details.aspx?id=49117) [Office Customization Tool](https://config.office.com/deploymentsettings)

[Office 2019 的部署文档](https://docs.microsoft.com/zh-cn/deployoffice/office2019/deploy)

[Office 部署工具的配置选项](https://docs.microsoft.com/zh-cn/deployoffice/office-deployment-tool-configuration-options)

下载所需文件

```powershell
setup.exe /download Configuration.xml
setup.exe /configure Configuration.xml
```

配置示例

```xml
<!--  文件末尾的三个配置依次为：
      移除之前以 MSI 方式安装的 Office —— 微软推荐并说有用，我还是手动使用官方工具清除掉了
      静默安装 —— 安装时不显示用户界面，可以移除掉，有的人喜欢看进度呢？
      开启更新 —— 此配置可以缺省，放上去好看 
      也就是说，你可以都删掉...  -->

<Configuration>

  <Add OfficeClientEdition="64"
	   Channel="PerpetualVL2019">
	   
    <Product ID="ProPlus2019Volume" PIDKEY="NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP">
      <Language ID="zh-cn" />        
      <ExcludeApp ID="Access" />
      <ExcludeApp ID="Groove" />
      <ExcludeApp ID="Lync" />
      <ExcludeApp ID="OneDrive" />
      <ExcludeApp ID="OneNote" />
      <ExcludeApp ID="Outlook" />
      <ExcludeApp ID="Publisher" />
    </Product>

  </Add>

  <RemoveMSI All="True" /> 
  <Display Level="Full" AcceptEULA="TRUE" /> 
  <Updates Enabled="TRUE"
           Channel="PerpetualVL2019" />

</Configuration>
```







