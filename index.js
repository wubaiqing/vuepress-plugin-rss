/**
 * 基于 youngtailors/vuepress-plugin-rss 基础之上进行改造
 * 
 * @see https://github.com/youngtailors/vuepress-plugin-rss/blob/master/index.js
 */
const RSS = require('rss')
const path = require('path')
const chalk = require('chalk')
const fs = require('fs-extra')
const MarkdownIt = require('markdown-it'),
      md = new MarkdownIt()

module.exports = (pluginOptions, ctx) => {
  return {
    name: 'vuepress-plugin-rss-support',

    generated () {
      const { pages, sourceDir } = ctx
      const { filter = () => true, count = 60 } = pluginOptions
      const siteData = require(path.resolve(sourceDir, '.vuepress/config.js'))

      const feed = new RSS({
        title: siteData.title,
        description: siteData.description,
        feed_url: `${pluginOptions.site_url}/rss.xml`,
        site_url: `${pluginOptions.site_url}`,
        copyright: `${pluginOptions.copyright ? pluginOptions.copyright : ''}`,
        language: 'zh-CN',
      })

      pages
        .filter(page => filter(page))
        .map(page => ({...page, date: new Date(page.lastUpdated)}))
        .sort((a, b) => b.date - a.date)
        .map(page => ({
          title: page.title,
          description: md.render(page._content),
          url: `${pluginOptions.site_url}${page.path}`,
          date: page.date,
        }))
        .slice(0, count)
        .forEach(page => feed.item(page))

      fs.writeFile(
        path.resolve(ctx.outDir, 'rss.xml'),
        feed.xml()
      );

      console.log(chalk.green.bold('RSS 文件已生成!'))
    }
  }
}
