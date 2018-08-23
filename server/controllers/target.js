const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
  const finishedBooks = await mysql('books').select('*')
  ctx.state.data = {
    finishedBooks: finishedBooks
  }
}