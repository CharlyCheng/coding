// pages/detail/detail.js
import Toast from '../../vant/toast/toast';
import Dialog from '../../vant/dialog/dialog';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    pacInfoList: [
      {
        'name': '普通门票 + 全岛接送',
        'date': '可定明日',
        'price': '250',
      },
      {
        'name': '普通门票 + 全岛接送',
        'date': '可定明日',
        'price': '250',
      },
      {
        'name': '普通门票 + 全岛接送',
        'date': '可定明日',
        'price': '250',
      }
    ],
    highLightList: [
      {
        'name': '大阪周游卡一日券/二日券，让你免费进入HEP FIVE摩天轮、梅田蓝天大厦空中庭园展望台、大阪天守阁、通天阁等热门景点',
      },
      {
        'name': '大阪周游卡一日券/二日券，让你免费进入HEP FIVE摩天轮、梅田蓝天大厦空中庭园展望台、大阪天守阁、通天阁等热门景点',
      },
      {
        'name': '大阪周游卡一日券/二日券，让你免费进入HEP FIVE摩天轮、梅田蓝天大厦空中庭园展望台、大阪天守阁、通天阁等热门景点',
      },
      {
        'name': '大阪周游卡一日券/二日券，让你免费进入HEP FIVE摩天轮、梅田蓝天大厦空中庭园展望台、大阪天守阁、通天阁等热门景点',
      },
      {
        'name': '大阪周游卡一日券/二日券，让你免费进入HEP FIVE摩天轮、梅田蓝天大厦空中庭园展望台、大阪天守阁、通天阁等热门景点',
      },
    ]
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  // 客服点击
  onClickService() {
    Toast('点击图标');
  },
  // 提示消息
  showTip() {
    Dialog.alert({
      title: 'BINGO缤果低价保证',
      message: '若您发现当地运营商提供更低的价格，我们承诺将补偿给你双倍价格'
    }).then(() => {
      // on close
    });
  },
  // 立即预订点击
  onClickButton() {
    Toast('点击按钮');
  },
  //获取详情页面数据
  getGoodDetail() {
    wx.request({
      url: 'test.php',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})