// 配置项
const host = 'http://localhost:5757'

const config = {
  host,
  loginUrl: `${host}/weapp/login`,
  userYrl: `${host}/weapp/user`,
  addBookUrl: `${host}/weapp/addbook`,
  bookListUrl: `${host}/weapp/booklist`
}

export default config
