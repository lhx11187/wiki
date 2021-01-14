(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{414:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"iptables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iptables"}},[t._v("#")]),t._v(" iptables")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("ul",[a("li",[t._v("CentOS 7系统，需要关闭firewalld装回iptables.")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭firewalld服务")]),t._v("\nsystemctl stop firewalld.service\nsystemctl disable firewalld.service\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看firewall状态")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl status firewalld\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查iptables是否安装")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl status iptables\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装iptables")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sudo yum install -y iptables")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 升级iptables")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sudo yum update iptables")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装iptables-services")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y iptables-services\nsystemctl start iptables.service\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" iptables.service\n")])])]),a("ul",[a("li",[t._v("开启系统的转发功能")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/sysctl.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# net.ipv4.ip_forward = 1")]),t._v("\n$ sysctl -p\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CentOS 7")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'net.ipv4.ip_forward = 1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /usr/lib/sysctl.d/50-default.conf\n$ sysctl -p /usr/lib/sysctl.d/50-default.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看启动结果")]),t._v("\n$ sysctl net.ipv4.ip_forward\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果已经启动则显示")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" net.ipv4.ip_forward "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 临时开启转发能力")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /proc/sys/net/ipv4/ip_forward\nsystemctl restart network.service\n")])])]),a("ul",[a("li",[t._v("基本操作")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看iptables现有规则")]),t._v("\niptables -L -v -n --line-number\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清空所有默认规则")]),t._v("\niptables -F\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清空所有自定义规则")]),t._v("\niptables -X\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所有计数器归0")]),t._v("\niptables -Z\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除INPUT中的第5个")]),t._v("\niptables -D INPUT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),a("ul",[a("li",[t._v("iptables 配置文件")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过命令行改变iptables是临时的，永远改变iptables需要在/etc/sysconfig/iptables中写入配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 备份当前规则")]),t._v("\niptables-save "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" iptables.rules\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将备份的规则还原")]),t._v("\niptables-restore iptables.rules\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存当前规则")]),t._v("\n/usr/libexec/iptables/iptables.init save\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" iptables save\n")])])]),a("h2",{attrs:{id:"规则分类-表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则分类-表"}},[t._v("#")]),t._v(" 规则分类（表）")]),t._v(" "),a("p",[t._v("filter表：负责过滤功能，防火墙；内核模块：iptables_filter")]),t._v(" "),a("p",[t._v("nat表：network address translation，网络地址转换功能；内核模块：iptable_nat")]),t._v(" "),a("p",[t._v("mangle表：拆解报文，做出修改，并重新封装 的功能；iptable_mangle")]),t._v(" "),a("p",[t._v("raw表：关闭nat表上启用的连接追踪机制；iptable_raw")]),t._v(" "),a("h2",{attrs:{id:"处理动作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理动作"}},[t._v("#")]),t._v(" 处理动作")]),t._v(" "),a("p",[t._v("ACCEPT：允许数据包通过。")]),t._v(" "),a("p",[t._v("DROP：直接丢弃数据包，不给任何回应信息，这时候客户端会感觉自己的请求泥牛入海了，过了超时时间才会有反应。")]),t._v(" "),a("p",[t._v("REJECT：拒绝数据包通过，必要时会给数据发送端一个响应的信息，客户端刚请求就会收到拒绝的信息。")]),t._v(" "),a("p",[t._v("SNAT：源地址转换，解决内网用户用同一个公网地址上网的问题。")]),t._v(" "),a("p",[t._v("MASQUERADE：是SNAT的一种特殊形式，适用于动态的、临时会变的ip上。")]),t._v(" "),a("p",[t._v("DNAT：目标地址转换。")]),t._v(" "),a("p",[t._v("REDIRECT：在本机做端口映射。")]),t._v(" "),a("p",[t._v("LOG：在/var/log/messages文件中记录日志信息，然后将数据包传递给下一条规则，也就是说除了记录以外不对数据包做任何其他操作，仍然让下一条规则去匹配。")]),t._v(" "),a("h2",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),a("p",[t._v("中转")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -t nat -A PREROUTING -p tcp -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("本地服务器IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --dport "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("端口号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -j DNAT --to-destination "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标IP:目标端口号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\niptables -t nat -A PREROUTING -p udp -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("本地服务器IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --dport "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("端口号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -j DNAT --to-destination "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标IP:目标端口号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\niptables -t nat -A POSTROUTING -p tcp -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --dport "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标端口号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -j SNAT --to-source "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("本地服务器IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\niptables -t nat -A POSTROUTING -p udp -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --dport "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目标端口号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -j SNAT --to-source "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("本地服务器IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("开放端口")]),t._v(" "),a("p",[a("code",[t._v("dport")]),t._v(" 目的端口, "),a("code",[t._v("sport")]),t._v(" 来源端口")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -A INPUT -p tcp -m multiport --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17000,17500")]),t._v(",20000:30000 -j ACCEPT\niptables -A OUTPUT -p tcp -m multiport --sport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17000,17500")]),t._v(",20000:30000 -j ACCEPT\n")])])]),a("p",[t._v("端口重定向")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -t nat -A PREROUTING -p udp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" -j REDIRECT --to-ports "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5353")]),t._v("\niptables -t nat -A PREROUTING -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" -j REDIRECT --to-ports "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5353")]),t._v("\n")])])]),a("p",[t._v("限制并发连接数")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("iptables -I INPUT -p tcp --syn --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8081")]),t._v(" -m connlimit --connlimit-above "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" --connlimit-mask "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -j DROP\n")])])]),a("ul",[a("li",[a("a",{attrs:{href:"http://www.zsythink.net/archives/tag/iptables/page/2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("iptables详解 朱双印"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/84541600a941",target:"_blank",rel:"noopener noreferrer"}},[t._v("将IPTables改造为TCP负载均衡器"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);