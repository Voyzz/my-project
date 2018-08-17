<template>
  <div class='bookinfo'>
    <div class="thumb">
      <img class='back' 
        :src="bookDetail.image"
        mode='aspectFill'>
      <img class="img"  
            :src="bookDetail.image" 
            mode='aspectFit'
          >
      <div class="info">
        <div class="title">
          {{bookDetail.title}}
        </div>
        <div class="author">
          {{bookDetail.author}}
        </div>
      </div>
    </div>
    <div class="detail">
      <div class="right text-primary">
        {{bookDetail.rate}}分
        <Rate :value='bookDetail.rate'></Rate>
      </div>
    </div>
    <div class="detail">
      {{bookDetail.publisher}}
      <div class="right">
        {{bookDetail.price}}
      </div>
    </div>
    <div class="tags">
      <div class="badge" :key='tag' v-for='tag in bookDetail.tags'>{{tag}}</div>
    </div>
    <div class="summary">
      <p :key='i' v-for='(sum,i) in bookDetail.summary'>{{sum}}</p>
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
      bookDetail: {}
    }
  },
  methods: {
    async getDetail () {
      // 发送GET请求，得到对应id的图书信息
      this.bookDetail = await get('/weapp/bookdetail', {id: this.bookid})
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

<style scoped>
.bookinfo{
  font-size: 14px;
} 
.badge{
  display: inline-block;
  margin:5px;
  padding:5px;
  border-radius: 10px;
  border:1px #EA5A49 solid;
  color:#EA5A49;
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
  padding:5px 10px;
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
}
.title{
  font-size:20px;
}
.author{
  font-size: 14px;
}

</style>
