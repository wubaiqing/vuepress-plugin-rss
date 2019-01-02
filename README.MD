# VuePress RSS 支持插件

### 使用案例
[https://github.com/wubaiqing/zaobao/blob/master/docs/.vuepress/config.js](https://github.com/wubaiqing/zaobao/blob/master/docs/.vuepress/config.js)


### 安装

```shell
$ yarn add vuepress-plugin-rss-support -D
```

### 配置

更新 `.vuepress/config.js` 文件

```js
module.exports = {
    ...
    plugins: [
      [
        'vuepress-plugin-rss-support',
        {
          // 网站地址
          site_url: 'https://wubaiqing.github.io/zaobao',
          // 版权信息
          copyright: '2019 每日时报',
          // 目录过滤
          filter: (page) => { return /^\/201.+/.test(page.path) },
          // 显示条数
          count: 60,
        }
      ]
    ]
}
```
