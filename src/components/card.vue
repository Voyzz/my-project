<template>
  <a :href="detailUrl">
  <!-- 整个card -->
  <div class="bookCard">
    <!-- 封面图片 -->
    <div class="cover">
      <img :src="book.image" mode="aspectFit" class="img">
    </div>
    <!-- 详细信息 -->
    <div class="detail">
      <!-- 第一行：题目 评分 -->
      <div class="row clearfix row1" style="height: 90rpx">
        <div class="left" style="font-size:35rpx">
          {{book.title}}
        </div>
        <div class="right">
          <div style="text-align:right">{{book.rate}}</div><rate :value = "book.rate"></rate>
        </div>
      </div>
      <!-- 第二行：作者 浏览量 -->
      <div class="row clearfix row2">
        <div class="left">
          {{book.author}}
        </div>
        <div class="right">
          浏览量：{{book.count}}
        </div>
      </div>
      <!-- 第三行：添加人 出版社 -->
      <div class="row clearfix row3">
        <div class="left">
          {{book.nickname}}
        </div>
        <div class="right">
          {{book.publisher}}
        </div>
      </div>
    </div>
  </div>
  </a>
</template>

<script>
import rate from '@/components/rate'

export default {
  components: {
    rate
  },
  props: ['book'],
  computed: {
    detailUrl () {
      return '/pages/detail/main?id=' + this.book.id
    }
  }
}
</script>
  
<style scoped>

.bookCard {
  border:0;
  border-top:1rpx solid #eeeded;
  border-bottom:1rpx solid #eeeded;
  padding: 10rpx;
  overflow: hidden;
  /* margin-top: 10rpx;
  margin-bottom: 10rpx; */
}
.cover {
  width: 180rpx;
  height: 180rpx;
  float: left;
  margin: 0 auto;
  overflow: hidden;
}
.img {
  max-width: 100%;
  max-height: 100%;
}
.detail {
   margin-left: 200rpx;
}
.row {
  line-height: 40rpx;
  margin-bottom: 6rpx;
}
.row1 {
  color: #4d9ebb;
}
.row2 {
  height: 40rpx;
}
.row3 {
  height: 40rpx;
}
</style>
