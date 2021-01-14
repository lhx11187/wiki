(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{421:function(t,e,n){"use strict";n.r(e);var s=n(42),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"haproxy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#haproxy"}},[t._v("#")]),t._v(" haproxy")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.solarck.com/systemd-wait-network-online.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决 Haproxy 用 Systemd 启动失败的问题"),n("OutboundLink")],1)])]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看最近一次启动中 haproxy 的日志")]),t._v("\njournalctl -b -0 -u haproxy\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 haproxy 配置文件的 backend 段中，使用了域名而不是 IP，导致解析失败。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 已经指定了 haproxy 的启动在 network 之后，从 network 的服务中找日志")]),t._v("\njournalctl -b -0 -u NetworkManager\n")])])]),n("p",[t._v("对比两段日志的时间，原来虽然 haproxy 启动在 network 之后，但是 network 刚刚启动 haproxy 就开始启动，而 network 的启动内容比较多，还有很多网络通信，可能完全启动完需要一点时间。haproxy 的启动时间比 dhcp 启动要早了 2 秒，这时无法进行 DNS 解析，所以就会造成启动失败")]),t._v(" "),n("p",[n("strong",[t._v("解决方法")])]),t._v(" "),n("p",[t._v("让 haproxy 在 network 完全启动后再启动")]),t._v(" "),n("p",[t._v("替换haproxy.service中的After和Wants字段，用network-online.target替换network.target")]),t._v(" "),n("div",{staticClass:"language-ini extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("After")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("network-online.target")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Wants")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("network-online.target")]),t._v("\n")])])]),n("p",[t._v("启动一个自带的网络等待服务")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" NetworkManager-wait-online.service\n")])])]),n("p",[t._v("如果你是使用systemd-network来管理网络服务，那么需要启动另外一个服务")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" systemd-networkd-wait-online.service\n")])])]),n("p",[t._v("重启后，一切问题都解决了。")]),t._v(" "),n("ul",[n("li",[t._v("配置文件")])]),t._v(" "),n("div",{staticClass:"language-ini extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[t._v("defaults\n    log global\n    mode tcp\n    option tcplog\n    option dontlognull\n    option http-server-close\n    retries 2\n    option redispatch\n    option abortonclose\n    maxconn 3200\n    timeout connect 5000\n    timeout client  50000\n    timeout server  50000\n    timeout http-request 10s\n    timeout queue 1m\n    timeout http-keep-alive 10s\n    timeout check 10s\n\nlisten ssr_cloud\n    bind 0.0.0.0:1181\n    mode tcp\n    balance roundrobin\n    server test.org:65521 test.org:65521 weight 5 check inter 1500 rise 1 fall 3 \n    server hk02.clashcloud.org:65521 hk02.clashcloud.org:65521 weight 5 check inter 1500 rise 1 fall 3  backup\n\nlisten  admin_status\n    bind 0.0.0.0:1188\n    mode http\n    stats refresh 30s\n    stats uri  /\n    stats realm Haproxy\n    stats auth admin:password\n    stats hide-version\n    stats admin if TRUE\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);