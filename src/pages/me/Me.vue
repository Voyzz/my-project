<template>
  <div class="container"> 
    <div class="userInfo">
      <img :src="userInfo.avatarUrl" alt="">
      <p>{{userInfo.nickName}}</p>
    </div>
    <button class="btn">添加图书</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },

  methods: {
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
.userinfo{
  margin-top:150rpx;
  text-align:center;
}
img{
  width: 150rpx;
  height:150rpx;
  margin: 20rpx;
  border-radius: 50%;
}
.btn{
  margin-top: 150rpx;
}

</style>

