// 配置项
// 本地服务器
// const host = 'http://localhost:5757'

// 开发环境
const host = 'https://3yuexwft.qcloud.la'

// 生产环境
// const host = 'https://116389465.voyz.xyz'

const config = {
  host,
  loginUrl: `${host}/weapp/login`,
  userYrl: `${host}/weapp/user`,
  addBookUrl: `${host}/weapp/addbook`,
  bookListUrl: `${host}/weapp/booklist`
}

export default config
