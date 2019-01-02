# Vuepress Plugin RSS Support

> RSS Support Plugin for Vuepress

## Install

```
> yarn add vuepress-plugin-rss-support -D
```

## Config for your site

- Update your `.vuepress/config.js`

```js
module.exports = {
    ...
    plugins: [
      [
        'vuepress-plugin-rss-support',
        {
          site_url: 'https://wubaiqing.github.io/zaobao',
          copyright: '2019 每日时报',
          count: 60
        }
      ]
    ]
}
```

---

License MIT
