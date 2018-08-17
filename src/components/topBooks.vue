<template>
    <div>
      <!-- <div class="header">高分图书</div> -->
      <swiper class="topSwiper"
              indicator-dots='true'
              indicator-color='#48D1CC'
              indicator-active-color='#4FFFFF'
              autoplay='true'
              interval='5000'
              duration='1000'
              display-multiple-items='3'
              circular='true'
      >
          <swiper-item :key="topBook.id" v-for="topBook in topBooks">
                <div class="zoomImage">
                  <image @click="detailUrl(topBook.id)" :src="topBook.image" class="slide-image"/>
                </div>
          </swiper-item>
      </swiper>
    </div>
</template>

<script>
export default {
  props: ['topBooks'],
  methods: {
    detailUrl (id) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + id
      })
    }
  }
}
</script>

<style scoped>
/* 标题 */
.header {
  text-align: center;
}
/* 整个滑块 */
.topSwiper {
  margin-top: 10rpx;
  margin-left: 34rpx;
  margin-bottom: 10rpx;
  width: 710rpx;
  height: 320rpx;
}
/* 轮播图片 */
.slide-image {
  width: 220rpx;
  height: 320rpx;
}
</style>
