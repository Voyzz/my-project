<template>
  <div>
    <div class="container" v-show="appear">
      <!-- 用户头像  -->
      <div class="userImg">
        <open-data type="userAvatarUrl"></open-data>
      </div>
      <div class="other">
        <!-- 用户名 -->
        <div class="userInfo">
          <open-data type="userNickName" lang="zh_CN"></open-data>
        </div>
        <div class="bottom">
          <!-- 读了多少 -->
          <YearProgress :v-show="appear"></YearProgress>
          <!-- <completed :v-show="appear" :bookTarget="targetVal" :bookFinished="finishedBook"></completed> -->
          <!-- 添加按钮 -->
          <button @click="scanBook" class="btn">添加图书</button>
        </div>
      </div>
    </div>
    <!-- 输入组件 -->
    <!-- <div v-show="!appear">
      <bookTarget @childByValue="changeToMe"></bookTarget>  
    </div> -->
  </div>
</template>

<script>
import YearProgress from '../../components/YearProgress'
import completed from '../../components/completed'
// import bookTarget from '../../components/bookTarget'
import config from '@/utils/config'
import { showModal } from '@/utils/index'
import { get } from '@/utils/utils'

export default {
  components: {
    YearProgress,
    completed
    // bookTarget
  },
  data () {
    return {
      userInfo: {},
      appear: true
      // appear: false,
      // targetVal: -1,
      // finishedBook: 0
    }
  },

  methods: {
    // 获取已读书数量
    async getBooksCount () {
      const finishedBook = await get('/weapp/target', {})
      this.finishedBook = finishedBook.finishedBook.length
      // console.log(111)
    },
    // 从子组件传来目标值
    changeToMe: function (val) {
      this.targetVal = val
      this.getBooksCount()
      // 若已传值，切换组件显示
      if (val) {
        this.appear = true
      }
    },
    async addBooks (bookid) {
      // 发送GET请求给addbookUrl
      await wx.request({
        url: config.addBookUrl,
        method: 'POST',
        data: {
          bookid
        },
        header: {},
        // 获取数据存在res中
        success: function (res) {
          if (res.data.code === 0) {
            showModal('Wow!', `《${res.data.data.title}》添加成功`)
          } else {
            showModal('添加失败', '图书已存在')
          }
        }
      })
    },
    async scanBook () {
      // 调用微信api扫码
      await wx.scanCode({
        success: (res) => {
          if (res.result) {
            this.addBooks(res.result)
            // console.log(res.result)
          }
        }
      })
    }
  },

  mounted () {
    // this.getBooksCount()
  }

}
</script>


<style>
.container{
  padding:150 30rpx;
}  
.userInfo{
  margin-top:150rpx;
  text-align:center;
}
.userImg{
  position: absolute;
  top: 15%;
  left: 280rpx;
  width: 150rpx;
  height:150rpx;
  margin: 20rpx;
  border-radius: 50%;
  overflow: hidden;
}
.other{
  width: 500rpx;
  position: absolute;
  top: 20%;
  left: 125rpx;
}

</style>

