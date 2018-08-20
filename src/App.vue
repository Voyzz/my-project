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

/* 清除浮动 */
.clearfix:after{
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

/* 图片适配 */
.zoomImage{
    width:90%;
    height:0;
    padding-bottom: 180%;
    overflow: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    background-size:cover;
    /* border: solid 1px black; */
}

.pageNum{
  text-align: center;
  font-size: 30rpx;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
  color: rgb(170, 168, 168);
}

.left{
  float: left;
  font-size: 30rpx;
}
.right{
  float: right;
  font-size: 30rpx;
}
.btn{
  color: white;
  background: #48D1CC;
  /* margin-left: 20px; */
  margin-top: 150rpx;
  border-radius: 8rpx;
  font-size: 32rpx;
  line-height: 80rpx;
  height: 80rpx;
  width: 50%;
}
.btn:active{
  background: #94dbea;
}
.text-footer{
  text-align: center;
  font-size: 12px;
  margin-bottom:5px;
}
.text-primary{
  color:#94dbea;
}
.page-title{
  padding-left:20px;
  background:#eee;
  line-height: 40px;
  font-size: 14px;
}
.right{
  float: right;
}
.btn:active{
  background: #FA5A49;
}
.myFont{
  font-family:Arial,Helvetica,sans-serif;
}
.center {
        position: absolute;
        left: 50%;
        -ms-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%); 
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
