<template>
  <div class='bookinfo'>

    <!-- 【封面部分】 -->
    <div class="thumb">
      <!-- 背景图 -->
      <img class='back' 
        :src="bookDetail.image"
        mode='aspectFill'>
      <!-- 封面图 -->
      <img class="img"  
            :src="bookDetail.image" 
            mode='aspectFit'>
      <!-- [图书信息] -->
      <div class="info">
        <!-- 图书名 -->
        <div class="title">
          {{bookDetail.title}}
        </div>
        <!-- 作者 -->
        <div class="author">
          {{bookDetail.author}}
        </div>
      </div>
    </div>

    <!-- 【详细信息】 -->
    <div class="detail">
      <!-- 评分 -->
      <div class="right" style="font-size:15px">
        {{bookDetail.rate}}分
        <Rate :value='bookDetail.rate'></Rate>
      </div>
    </div>
    <!-- 出版社/价格 -->
    <div style="margin-top:20rpx;padding:0px 15px 10px 15px;font-size:14px" class="myFont">
      {{bookDetail.publisher}}
      <div style="font-size:12px">
        价格：{{bookDetail.price}}
      </div>
    </div>
    <!-- 标签 -->
    <div style="padding:0px 10px 0px 10px">
      <div class="badge" :key='tag' v-for='tag in tags'>{{tag}}</div>
    </div>
    <!-- 简述 -->
    <div class="summary myFont">
      <p style="font-size: 13px;padding:0px 10px 0px 10px">{{bookDetail.summary}}</p>
    </div>
  </div>
</template>

<script>
import Rate from '@/components/rate'
import { get } from '@/utils/utils'

export default {
  components: {
    Rate
  },
  data () {
    return {
      bookid: '',
      bookDetail: {},
      tags: []
    }
  },
  methods: {
    async getDetail () {
      // 发送GET请求，得到对应id的图书信息
      this.bookDetail = await get('/weapp/bookdetail', {id: this.bookid})
      this.tags = this.bookDetail.tags.split(',')
      wx.setNavigationBarTitle({
        title: this.bookDetail.title
      })
    }
  },
  mounted () {
    // 获取小程序在page onLoad时传递的options
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
  }
}
</script>

<style>
.bookinfo{
  font-size: 14px;
} 
.badge{
  display: inline-block;
  margin:5px;
  padding:5px;
  border-radius: 10px;
  border:1px #48D1CC solid;
  color:#48D1CC;
}
.summary{
  padding:0 15px;
  margin-top:10px;
}
p{
  text-indent: 2em;
  font-size:14px;
}

.right{
  float: right;
}
.detail{
  padding:20rpx 40rpx;
}
.avatar{
  width:20px;
  height:20px;
  border-radius: 50%;
  vertical-align: middle;
}

.thumb{
  width:750rpx;
  height:500rpx;
  overflow:hidden;
  position: relative;
}
.back{
  filter: blur(15px);
  width:100%;
}
.img{
  position: absolute;
  width:100%;
  height:300rpx;
  left:0;
  top:30rpx;
}
.info{
  color:white;
  position: absolute;
  width:100%;
  left:0;
  top:330rpx;
  text-align: center;
  margin-top: 40rpx;
}
.title{
  font-size:20px;
}
.author{
  font-size: 14px;
}

</style>
