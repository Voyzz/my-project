<template>
  <div class="progressbar">
    <progress :percent="percent" activeColor='#54FF9F' show-info='true'/>
    <p>{{year}}年已经过去[{{days}}]天了</p>
  </div>
</template>

<script>
export default {
  methods: {
    isLeapYear () {
      const year = new Date().getFullYear()
      if (year % 400 === 0) {
        return true
      } else if (year % 4 === 0 && year % 100 !== 0) {
        return true
      } else {
        return false
      }
    },
    getDaysOfYear () {
      return this.isLeapYear() ? 366 : 365
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    },
    days () {
      // 设置今年第一天
      let startDay = new Date()
      startDay.setMonth(0)
      startDay.setDate(1)
      // 今天的时间戳减去第一天
      let today = new Date().getTime() - startDay.getTime()
      return parseInt(today / 1000 / 60 / 60 / 24) + 1
    },
    percent () {
      return (this.days * 100 / this.getDaysOfYear()).toFixed(1)
    }
  }
}
</script>

<style>
.progressbar{
    margin: 80rpx;
    text-align: center;
}
</style>
