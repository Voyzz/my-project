const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
  // 获取id
  const {id} = ctx.request.query
  // 给相同id的count加一
  await mysql('books').where('id',id).increment('count',1)
  // 获取id对应的图书信息
  const bookDetail = await mysql('books').select('*').where('id',id).first()
  ctx.state.data = bookDetail
}