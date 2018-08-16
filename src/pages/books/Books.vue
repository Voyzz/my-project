<template>
  <div>
    <!-- 将books中的数据传递给card组件 -->
    <card :key="book.id" v-for="book in books" :book=book></card>
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
      nickname: ''
    }
  },
  methods: {
    async getList () {
      wx.showNavigationBarLoading()
      // 发送GET请求，获取server中"ctx.state.data"中的数据
      const books = await get('/weapp/booklist')
      this.books = books.list
      this.nickname = JSON.parse(books.nickname['0'].user_info).nickName
      this.books.map(e => {
        e['nickname'] = this.nickname
      })
      // console.log(this.books)
      // 刷新结束后停止
      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
    }
  },
  onPullDownRefresh () {
    this.getList()
  },
  mounted () {
    this.getList()

    // console.log(res)
  }
}
</script>

<style>

</style>

