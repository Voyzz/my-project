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
import config from '@/utils/config'
// import { showSuccess, post } from '@/utils/index'

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
      // const res = await post('/weapp/addbook', bookid)
      // if (res.code === 0 && res.data.title) {
      //   showSuccess('add success', `${res.data.title}add success`)
      // }
      wx.request({
        url: config.addBookUrl, // 仅为示例，并非真实的接口地址
        method: 'POST',
        data: {
          bookid
        },
        header: {},
        success: function (res) {
          console.log(res.data)
        }
      })
    },
    scanBook () {
      // 调用微信api扫码
      wx.scanCode({
        success: (res) => {
          if (res.result) {
            this.addBooks(res.result)
            console.log(res.result)
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

