<template>
  <div>
    <div class="container" v-show="false">
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
          <!-- 添加按钮 -->
          <button @click="scanBook" class="btn">添加图书</button>
        </div>
      </div>
    </div>
    <!-- 输入组件 -->
    <div v-show="true">
      <bookTarget ></bookTarget>  
    </div>
  </div>
</template>

<script>
import YearProgress from '../../components/YearProgress'
import bookTarget from '../../components/bookTarget'
import config from '@/utils/config'
import { showModal } from '@/utils/index'

export default {
  components: {
    YearProgress,
    bookTarget
  },
  data () {
    return {
      userInfo: {},
      appear: false
    }
  },

  methods: {
    addBooks (bookid) {
      // 发送GET请求给addbookUrl
      wx.request({
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
    scanBook () {
      // 调用微信api扫码
      wx.scanCode({
        success: (res) => {
          if (res.result) {
            this.addBooks(res.result)
            // console.log(res.result)
          }
        }
      })
    }
  },

  created () {

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
  position: absolute;
  top: 20%;
  left: 64rpx;
}
</style>

