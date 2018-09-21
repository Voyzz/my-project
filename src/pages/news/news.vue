<template>
    <div>
        <web-view :src="url"></web-view>
    </div>
</template>

<script>
export default {
  data () {
    return {
      res: {},
      url: ''
    }
  },
  methods: {
    wxPost () {
      return new Promise((resolve, reject) => {
        wx.request({
          // data: {'TransCode': '030111', 'OpenId': '123456789', 'Body': ''},
          data: {'key': '64de5469045d3278b8d0fab980731b49'},
          method: 'GET',
          dataType: 'json',
          url: 'http://v.juhe.cn/toutiao/index',
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
      this.url = oneInfo.data.result.data[0].url
    //   console.log(this.res)
    }
  },
  created () {
    this.getOne()
  }
}
</script>

<style>
</style>
