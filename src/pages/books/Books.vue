<template>
  <div>
    <!-- 将books中的数据传递给card组件 -->
    <card :key="book.id" v-for="book in books" :book=book></card>
    <p class="pageNum" v-if="!more">没有更多图书啦</p>
  </div>
</template>

<script>
import { get } from '@/utils/utils'
import card from '@/components/card'

export default {
  components: {
    card
  },
  data () {
    return {
      books: [],
      nickname: '',
      page: 0,
      more: true
    }
  },
  methods: {
    async getList (init) {
      // 初始化页面
      if (init) {
        this.page = 0
        this.more = true
      }
      wx.showNavigationBarLoading()
      // 发送GET请求，获取server中"ctx.state.data"中的数据
      const books = await get('/weapp/booklist', {page: this.page})
      // console.log(this.books)
      // 是否显示“没有更多图书”
      if (books.list.length < 10 && this.page > 0) {
        this.more = false
      }
      // 将获取的数据存入books
      if (init) {
        this.books = books.list
        this.nickname = JSON.parse(books.nickname['0'].user_info).nickName
        this.books.map(e => {
          e['nickname'] = this.nickname
        })
        wx.stopPullDownRefresh()
      // 如果不止一页，则拼接this.books
      } else {
        this.books = this.books.concat(books.list)
      }
      // 刷新结束后停止
      wx.hideNavigationBarLoading()
    }
  },
  onPullDownRefresh () {
    this.getList(true)
  },
  // 到达底部
  onReachBottom () {
    if (!this.more) {
      return false
    } else {
      this.page += 1
      this.getList()
    }
  },
  mounted () {
    this.getList(true)

    // console.log(res)
  }
}
</script>

<style>

</style>

