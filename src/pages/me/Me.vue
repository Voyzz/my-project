<template>
  <div class="container"> 
    <div class="userInfo">
      <img :src="userInfo.avatarUrl" alt="">
      <p>{{userInfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>  
    <button @click="scanBook" class="btn">添加图书</button>
  </div>
</template>

<script>
import YearProgress from '../../components/YearProgress'

export default {
  components: {
    YearProgress
  },
  data () {
    return {
      userInfo: {}
    }
  },

  methods: {
    addBooks (bookid) {
      // 添加图书至MySQL
      console.log(bookid)
    },
    scanBook () {
      // 调用微信api扫码
      wx.scanCode({
        success: (res) => {
          if (res.result) {
            this.addBooks(res.result)
          }
        }
      })
    },

    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
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
img{
  width: 150rpx;
  height:150rpx;
  margin: 20rpx;
  border-radius: 50%;
}


</style>

