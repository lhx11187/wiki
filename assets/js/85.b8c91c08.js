(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{441:function(t,s,a){"use strict";a.r(s);var n=a(42),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"beautifulsoup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beautifulsoup"}},[t._v("#")]),t._v(" BeautifulSoup")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导入包")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" bs4 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" BeautifulSoup\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用BeautifulSoup解析数据 python3 必须传入参数二'html.parser' 得到一个对象，接下来获取对象的相关属性")]),t._v("\nhtml"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("BeautifulSoup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html.parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 读取title内容")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 读取title属性")]),t._v("\nattrs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attrs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按标签名查找")]),t._v("\nhtml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按类名查找")]),t._v("\nhtml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.sister'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按id名查找 p标签中id为link的标签")]),t._v("\nhtml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p #link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取标签里面的值")]),t._v("\nhtml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("string\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取标签里属性值 通过href获取")]),t._v("\nhtml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'href'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# id 作为通配符")]),t._v("\nsoup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findAll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" L "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startswith"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'date'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsoup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findAll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'date.*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=p.exports}}]);