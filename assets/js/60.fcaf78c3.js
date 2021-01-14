(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{416:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sysctl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sysctl"}},[t._v("#")]),t._v(" sysctl")]),t._v(" "),a("p",[a("code",[t._v("/etc/sysctl.conf")]),t._v(" 为控制内核相关参数的配置文件，它的内容全部是对应于 /proc/sys/ 这个目录的子目录及文件。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/proc/sys/abi \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#应用的二进制信息")]),t._v("\n/proc/sys/crypto \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#调试相关的系统配置目录")]),t._v("\n/proc/sys/debug \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设备相关的系统配置目录")]),t._v("\n/proc/sys/dev \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#文件系统相关的系统配置目录")]),t._v("\n/proc/sys/fs \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#文件系统相关的系统配置目录")]),t._v("\n/proc/sys/kernel \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#内核相关的系统配置目录")]),t._v("\n/proc/sys/net \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#网络相关的系统配置目录")]),t._v("\n/proc/sys/user \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#用户相关的系统配置目录")]),t._v("\n/proc/sys/vm \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#内存相关的系统配置目录")]),t._v("\n")])])]),a("p",[t._v("sysctl")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mozillazg.com/2019/05/linux-what-net.ipv4.ip_local_port_range-effect-or-mean.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("net.ipv4.ip_local_port_range 的值究竟影响了啥"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#开启路由功能，0是关闭，1是开启")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("net.ipv4.ip_forward")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#允许系统打开的端口范围")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("net.ipv4.ip_local_port_range")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 39999 65000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("net.nf_conntrack_max")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 655360")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("net.netfilter.nf_conntrack_tcp_timeout_established")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 1200")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#BBR")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("net.core.default_qdisc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" fq")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("net.ipv4.tcp_congestion_control")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" bbr")]),t._v("\n")])])]),a("p",[t._v("查看内核是否已开启BBR")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ sysctl net.ipv4.tcp_available_congestion_control\nnet.ipv4.tcp_available_congestion_control "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reno cubic bbr\n$ lsmod "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" bbr\ntcp_bbr "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20480")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);