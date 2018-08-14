<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
.btn{
  color: white;
  background: #48D1CC;
  /* margin-left: 20px; */
  margin-top: 20rpx;
  border-radius: 8rpx;
  font-size: 32rpx;
  line-height: 80rpx;
  height: 80rpx;
  width: 60%;
}
.btn:active{
  background: #94dbea;
}
/* .container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
} */
/* this rule will be remove */
/* * {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
} */
</style>
