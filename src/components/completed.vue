<template>
  <div>
    <progress :percent="percent" active="true" stroke-width="10" style="margin-top: 50rpx"/>
    <p class="word">↬  您当前的读书进度[{{bookFinished}}/{{bookTarget}}]  ↫</p>
  </div>
</template>

<script>
export default {
  props: ['bookTarget', 'bookFinished'],
  computed: {
    percent () {
      return (this.bookFinished * 100 / this.bookTarget).toFixed(0)
    }
  }
}
</script>

<style>
.word{
  margin-top: 50rpx;
  font-size: 30rpx;
}
</style>
