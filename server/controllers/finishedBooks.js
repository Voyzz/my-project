const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
    // 分页逻辑
    const { page } = ctx.request.query
    const size = 10
    // 获取books表单中的数据，倒序排列
    const books = await mysql('books').select('*').limit(size).offset(Number(page)*size).orderBy('id','desc')
    // 获取cSessionInfo表单中的user_info
    const nickName = await mysql('cSessionInfo').select('user_info')
    // 按照评分排名获取图书信息
    const topBooks = await mysql('books').select('*').limit(9).orderBy('rate','desc')
    // 将获取的数据传递给给自己发送请求的client
    ctx.state.data = {
        list: books,
        nickname: nickName,
        topBooks: topBooks
    }
} 