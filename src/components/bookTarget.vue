<template>
  <div class="container">
    <div class="userImg">
      <open-data type="userAvatarUrl"></open-data>
    </div>
    <div class="in">
      <p class="word">↬  设置你今年的读书目标  ↫</p>
       <slider @change="sliderChange" 
              min="0" 
              max="50" 
              block-size="20"
              block-color="#48D1CC"
              show-value/>
    </div>
    <button @click="toMeClick" class="btn" style="margin-top:250rpx;width:250rpx">确认</button>
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
    toMeClick () {
      // console.log(this.val)
      this.$emit('childByValue', this.val)
    },
    sliderChange: function (e) {
      this.val = e.target.value
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
  margin-bottom: 30rpx;
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
