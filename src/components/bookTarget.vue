<template>
  <div class="container">
    <div class="userImg">
      <open-data type="userAvatarUrl"></open-data>
    </div>
    <div class="in">
      <p class="word">↬  请输入你今年的读书目标  ↫</p>
      <input 
        class="val center"
        type="number" 
        placeholder=" "
        placeholder-style="text-align:center"
        v-model="val"/>
    </div>
    <button @click="getTareget" class="btn" style="margin-top:300rpx;width:250rpx">确认</button>
  </div>
</template>

<script>
// import { get } from '@/utils/utils'

export default {
  data () {
    return {
      val: ' '
    }
  },
  methods: {
    async getTareget () {
      await wx.request({
        url: 'https://3yuexwft.qcloud.la/weapp/target',
        method: 'GET',
        data: {
          target: this.val
        },
        header: {},
        // 获取数据存在res中
        success: function (res) {
          // console.log(res)
        }
      })
      // console.log(tar)
    }
  },
  created () {

  }
}
</script>

<style>
.container{
  margin-top:450rpx;
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
/* 一行字 */
.word{
  color: rgb(91, 90, 90);
  text-align: center;
  font-size: 35rpx;
}
.in{
  width: 500rpx;
  margin-left: 125rpx;
}
.val{
  /* margin-left:  */
  width: 100rpx;
  border: 1px solid rgb(114, 114, 114);
  border-radius: 15rpx;
  margin-top: 50rpx;
}
</style>
