const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
  // 获取target值
  const { target } = ctx.request.query
  // target值录入数据库
  try {
    await mysql ('cSessionInfo').insert ({
        target
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