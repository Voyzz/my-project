
const https = require('https')
const {mysql} = require('../qcloud')

// 新增图书
// 1. 获取豆瓣信息
// https://developers.douban.com/wiki/?title=book_v2#get_isbn_book
// https://api.douban.com/v2/book/isbn/9787536692930
// 2. 入库

module.exports = async (ctx) => {
  const { bookid } = ctx.request.body
  if (bookid) {
    // 不插入重复图书
    const findRes = await mysql('books').select().where('bookid',bookid)
    if (findRes.length) {
      ctx.state = {
        code: -1,
        data: {
          msg: '图书已存在'
        }
      }
      return
    }

    let url = 'https://api.douban.com/v2/book/isbn/' + bookid
    // JSON信息存储在bookInfo变量 
    const bookInfo = await getJSON (url)
    // 豆瓣评分
    const rate = bookInfo.rating.average
    // 其他信息
    const { title, image, alt, publisher, summary, price} = bookInfo
    // 作者
    const author = bookInfo.author.join (',')
    // 标签
    const tags = bookInfo.tags.map (v => {
      return `${v.title} ${v.count}`
    }).join (',')
    // console.log({
    //       bookid,rate,title, image, alt, publisher, summary ,price,tags,author
    //     })

    // 入库MySQL
    try {
      await mysql ('books').insert ({
        bookid,rate,title, image, alt, publisher, summary ,price,tags,author
      })
      ctx.state.data = {
        title,
        msg: 'success'
      }
    }catch (e) {
      ctx.state = {
        code: -1,
        data: {
          msg: 'fail:' + e.sqlMessage
        }
      }
    }
  }
} 


function getJSON (url) {
  return new Promise ((reslove, reject) => {
    https.get (url, res => {
      let urlData = ''
      res.on ('data', data => {
        urlData += data
      })
      res.on ('end', data => {
        const bookInfo = JSON.parse (urlData)
        if (bookInfo.title) {
          reslove (bookInfo)
        }
        reject (bookInfo)
      })
    })
  })  
}