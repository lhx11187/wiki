(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{482:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"clash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clash"}},[t._v("#")]),t._v(" Clash")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.toolfk.com/tool-format-yaml.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线YAML工具"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://koolclash.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("KoolClash"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Hackl0us/SS-Rule-Snippet/blob/master/LAZY_RULES/clash.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置模板"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/ConnersHua/Profiles/tree/master",target:"_blank",rel:"noopener noreferrer"}},[t._v("神机规则"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/GeQ1an/Rules/tree/master",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeQ1an"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("第三方 web 管理页面 http://clash.razord.top/ http://yacd.haishan.me/")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.e9china.net/tufan/clash-proxy-daili.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("利用clash功能制作透明代理"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://0x01.io/2020/02/16/x86-%E8%BD%AF%E8%B7%AF%E7%94%B1%E9%80%8F%E6%98%8E%E4%BB%A3%E7%90%86%E6%9E%84%E5%BB%BA%E6%96%B9%E6%A1%88v2020-02/",target:"_blank",rel:"noopener noreferrer"}},[t._v("x86 软路由透明代理构建方案"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Dreamacro/clash/issues/158",target:"_blank",rel:"noopener noreferrer"}},[t._v("回环处理"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("ul",[a("li",[t._v("新增用户")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupadd")]),t._v(" clash\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" -g clash -M -s /sbin/nologin clash\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#执行上述命令会需要你填写一些信息酌情填写")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#passwd clash")]),t._v("\n")])])]),a("ul",[a("li",[t._v("进程控制")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /lib/systemd/system/clash@.service\nsystemctl daemon-reload\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" clash@clash\n")])])]),a("p",[t._v("Systemd 配置文件")]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[Unit]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("A rule based proxy in Go for %i.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("After")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("network.target")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[Service]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("simple")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("%i")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("/home/software/clash/clash -d /home/software/clash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Restart")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("on-abort")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CapabilityBoundingSet")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("CAP_NET_BIND_SERVICE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AmbientCapabilities")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("CAP_NET_BIND_SERVICE")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[Install]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("multi-user.target")]),t._v("\n")])])]),a("h2",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Fndroid/clash_for_windows_pkg/wiki/DNS%E6%B1%A1%E6%9F%93%E5%AF%B9Clash%EF%BC%88for-Windows%EF%BC%89%E7%9A%84%E5%BD%B1%E5%93%8D",target:"_blank",rel:"noopener noreferrer"}},[t._v("DNS污染对Clash（for Windows）的影响"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("clash DNS 请求逻辑：\n(1) 当访问一个域名时， nameserver 与 fallback 列表内的所有服务器并发请求，得到域名对应的 IP 地址。\n(2) clash 将选取 nameserver 列表内，解析最快的结果。\n(3) 若解析结果中，IP 地址属于 国外，那么 clash 将选择 fallback 列表内，解析最快的结果。")]),t._v(" "),a("p",[a("code",[t._v("touch config.yaml")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7890")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("socks-port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7891")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redir-port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7892")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow-lan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Rule\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("log-level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" silent\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# external-controller 主要是用于 web 端管理页面，必须监听在 0.0.0.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external-controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.0.0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9090")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# secret 是进入管理面板所需要的密码，可填可不填，建议填上")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"huxin666"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# external-ui 表示管理面板的路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external-ui")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /home/software/clash/web/\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ipv6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.0.0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enhanced-mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("host\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nameserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 192.168.9.60"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20053")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 192.168.9.60"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20054")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proxy"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" socks5\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.9.60"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1080")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxy-groups")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" proxy\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.gstatic.com/generate_204'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"home-sh-select"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" select\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DIRECT\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"leanway-select"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" select\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DIRECT\n    \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("SUFFIX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("google.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("auto\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("KEYWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("google"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("auto\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("google.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("auto\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("SUFFIX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ad.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("REJECT\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rename SOURCE-IP-CIDR and would remove after prerelease")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SRC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("192.168.1.201/32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# LAN")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("SUFFIX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("127.0.0.0/8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("172.16.0.0/12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("192.168.0.0/16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("10.0.0.0/8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("17.0.0.0/8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("100.64.0.0/10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最终规则")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" GEOIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("CN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" MATCH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("auto\n")])])]),a("h2",{attrs:{id:"iptables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iptables"}},[t._v("#")]),t._v(" Iptables")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"net.ipv4.ip_forward = 1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/sysctl.conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" sysctl -p\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"net.ipv6.conf.all.forwarding = 1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/sysctl.conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" sysctl -p\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /proc/sys/net/ipv4/ip_forward\n\n\niptables -t nat -N clash\niptables -t nat -A PREROUTING -p tcp -j clash\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#注意：这里的网段和IP你需要自己适配自己的")]),t._v("\niptables -t nat -A clash -d "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/8 -j RETURN\niptables -t nat -A clash -d "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.0/8 -j RETURN\niptables -t nat -A clash -d "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.0/8 -j RETURN\niptables -t nat -A clash -d "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".0.0/16 -j RETURN\niptables -t nat -A clash -d "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.16")]),t._v(".0.0/12 -j RETURN\niptables -t nat -A clash -d "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/16 -j RETURN\niptables -t nat -A clash -d "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("224.0")]),t._v(".0.0/4 -j RETURN\niptables -t nat -A clash -d "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("240.0")]),t._v(".0.0/4 -j RETURN\n\niptables -t nat -A clash -p tcp -j REDIRECT --to-ports "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7892")]),t._v("\niptables -t nat -A OUTPUT -p tcp -m owner "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" --uid-owner clash -j REDIRECT --to-port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7892")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y iptables-persistent\nnetfilter-persistent save\nnetfilter-persistent start\niptables-save  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /etc/iptables/rules.v4\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);