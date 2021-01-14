
const tool = require('./config/tool')
const linux = require('./config/linux')
const database = require('./config/database')
const web = require('./config/web')
const python = require('./config/python')
const java = require('./config/java')
const go = require('./config/go')
const devops = require('./config/devops')

module.exports = {
  title: '偷影子的人',
  description: '让一切优异的品质成为你的习惯。',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav:[
          { text: 'Tool', link: '/Tool/' },
          { text: 'Linux', link: '/Linux/' },
          { text: 'Database', link: '/Database/' },
          { text: 'Web', link: '/Web/' },
          { text: 'DevOps', link: '/DevOps/' },
          {
            text: 'Language',
            items: [
              {
                text: 'Python',
                link: '/Python/'
              },
              {
                text: 'Java',
                link: '/Java/'
              },
              {
                text: 'Go',
                link: '/Go/'
              }
            ]
          },
          { text: '导航', link: 'https://nav.leanway.cn/' }
        ],
    sidebar:{
      '/Tool/': [
        {
          title: '应用',
          collapsable: true,
          children: tool.app
        },
        {
          title: '系统',
          collapsable: true,
          children: tool.system
        },
        {
          title: '网络',
          collapsable: true,
          children: tool.net
        },
        {
          title: 'Device',
          collapsable: true,
          children: tool.dev
        },
        {
          title: 'CICD',
          collapsable: true,
          children: tool.cicd
        },
        {
          title: 'Editor',
          collapsable: true,
          children: tool.editor
        },
        {
          title: 'Download',
          collapsable: true,
          children: tool.download
        }
      ],
      '/Linux/': [
        {
          title: 'Shell',
          collapsable: true,
          children: linux.shell
        },
        {
          title: 'Kernel',
          collapsable: true,
          children: linux.kernel
        },
        {
          title: 'Debian',
          collapsable: true,
          children: linux.debian
        },
        {
          title: 'CentOS',
          collapsable: true,
          children: linux.centos
        },
        {
          title: 'Network',
          collapsable: true,
          children: linux.network
        },
        {
          title: 'Disk',
          collapsable: true,
          children: linux.disk
        },
        {
          title: 'Tool',
          collapsable: true,
          children: linux.tool
        }
      ],
      '/Database/': [
        {
          title: 'SQL',
          collapsable: true,
          children: database.sql
        },
        {
          title: 'PostgreSQL',
          collapsable: true,
          children: database.postgresql
        },
        {
          title: 'Redis',
          collapsable: true,
          children: database.redis
        }
      ],
      '/Web/': [
        {
          title: 'JSPlug',
          collapsable: true,
          children: web.jsplug
        },
        {
          title: 'Snippet',
          collapsable: true,
          children: web.snippet
        }
      ],
      '/Python/': [
        {
          title: 'Modules',
          collapsable: true,
          children: python.modules
        },
        {
          title: 'Base',
          collapsable: true,
          children: python.base
        }
      ],
      '/Go/': [
        {
          title: 'Modules',
          collapsable: true,
          children: go.modules
        },
        {
          title: 'Go',
          collapsable: true,
          children: go.go
        }
      ],
      '/Java/': [
        {
          title: 'JDK',
          collapsable: true,
          children: java.jdk
        },
        {
          title: 'Spring',
          collapsable: true,
          children: java.spring
        },
        {
          title: 'WEB',
          collapsable: true,
          children: java.web
        },
        {
          title: 'JVM',
          collapsable: true,
          children: java.jvm
        },
        {
          title: 'Tool',
          collapsable: true,
          children: java.tool
        }
      ],
      '/DevOps/': [
        {
          title: 'Tool',
          collapsable: true,
          children: devops.tool
        }
      ]
    }
  }
};
