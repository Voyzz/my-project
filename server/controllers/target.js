const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
  const finishedBook = await mysql('books').select('*')
  ctx.state.data = {
    finishedBook: finishedBook
  }
}