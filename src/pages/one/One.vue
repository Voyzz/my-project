<template>
  <div class="bg">
    <div class="oneONe" v-show="false">
      <!-- 小标题分类 -->
      <div class="kind">
        <span>⤠  {{kind}}  ⤟</span>
      </div>
      <!-- vol -->
      <div class="vol">
        <span>{{vol}}</span>
      </div>
      <!-- 作者 -->
      <div class="author">
        <span>[作者/{{author}}]</span>
      </div>
      <!-- 图片 -->

      <img :src="imgUrl" mode="scaleToFill" class="oneImg">

      <!-- 一句话 -->
      <div class="word">
        <span>{{word}}</span>
      </div>
      <!-- 来源 -->
      <div class="from">
        <span>---{{from}}</span><br>
        <span style="float:right;padding-right:22rpx;padding-top:60rpx;font-size:25rpx">{{date}}</span>
      </div>
    </div>
    <div class="myNews">
      <div class="myCard" :key="r.uniquekey" v-for="r in res" @click="web" style="padding:20rpx 20rpx 20rpx 20rpx;board-bottom:1rpx solid black;display: flex;flex-direction: row;">
        <div class="myImg" style="width:250rpx;height:180rpx;padding-right:20rpx;">
          <img :src="r.thumbnail_pic_s" alt="" style=" width:auto;height:300rpx;max-width:100%;max-height:100%;">
        </div>
        <div class="myContent" style="display: flex;flex-direction: column;justify-content: space-between;">
          <div class="myTitle">
            <!-- <a :href="myUrl"> -->
            <h1 style="font-size:30rpx;line-height:40rpx;">{{r.title}}</h1>
            <!-- </a> -->
          </div>
          <div class="myCato" style="display: flex;flex-direction: row;justify-content: space-between;">
            <p style="font-size:25rpx;line-height:25rpx;">{{r.category}}</p>
            <p style="font-size:25rpx;line-height:25rpx;">{{r.date}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // url: 'https://api.hibai.cn/api/index/index',
      url: 'http://v.juhe.cn/toutiao/index',
      res: {},
      imgUrl: '',
      kind: '',
      vol: '',
      word: '',
      from: '',
      date: '',
      author: ''
    }
  },
  // computed: {
  //   myUrl () {
  //     return '../news/main'
  //   }
  // },
  methods: {
    web () {
      wx.navigateTo({
        url: '../news/main?'
      })
    },
    // 发送POST请求
    wxPost () {
      return new Promise((resolve, reject) => {
        wx.request({
          // data: {'TransCode': '030111', 'OpenId': '123456789', 'Body': ''},
          data: {'key': '64de5469045d3278b8d0fab980731b49'},
          method: 'GET',
          dataType: 'json',
          url: this.url,
          success: function (res) {
            if (res) {
              resolve(res)
            } else {
              reject(res)
            }
          }
        })
      })
    },

    async getOne () {
      const oneInfo = await this.wxPost()
      this.res = oneInfo.data.result.data
      // console.log(this.res)

      /* -------One一个----------- */
      // const resourse = oneInfo.data.Body
      // console.log(resourse.date.split(' ')[0])
      // 获取具体信息
      // this.imgUrl = resourse.img_url
      // this.kind = resourse.img_kind
      // this.vol = resourse.vol
      // this.word = resourse.word
      // this.from = resourse.word_from
      // this.date = resourse.date.split(' ')[0]
      // this.author = resourse.img_author
    }
  },

  mounted () {
    this.getOne()
  }
}
</script>

<style scoped>
.kind {
  text-align: center;
  font-size: 32rpx;
  color: rgb(128, 128, 128);
  margin-top: 15rpx;
  font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
}
.vol {
  margin: 10rpx 30rpx 0px 30rpx;
  float: left;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 32rpx;
  color: rgb(138, 136, 136);
}
.author {
  margin-top: 30rpx;
  margin-right: 30rpx;
  margin-bottom: 40rpx;
  float: right;
  font-size: 25rpx;
  color: rgb(92, 92, 92);
}
.oneImg {
  width: 720rpx;
  height: 540rpx;
  padding-left: 15rpx;
}
.word {
  margin: 30rpx 30rpx 0px 45rpx;
  font-size: 33rpx;
  font-family: “Arial”,”Microsoft YaHei”,”黑体”,”宋体”,sans-serif;
  color: rgb(92, 92, 92);
}
.from {
  float: right;
  margin-right: 30rpx;
  margin-top: 40rpx;
  font-size: 30rpx;
  color: rgb(92, 92, 92);
}
/* .date {
  text-align: center;
  color: rgb(92, 92, 92);
} */
</style>
