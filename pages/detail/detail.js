// pages/detail/detail.js
import Toast from '../../vant/toast/toast';
import Dialog from '../../vant/dialog/dialog';
import { tradeDetail } from '../../mock/productDesc'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tradeDetail: {},
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
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
    wx.navigateTo({
      url: `/pages/bookPage/bookPage`
    })
  },
  //获取详情页面数据
  getGoodDetail(options) {
    const url = "http://123.56.123.203:8010/trip-web/v1/product/productDesc";
    const { product_id = '' } = options
    const data = {
      "product_id": product_id,
      "uuid": "111111"
    }
    this.setData({
      tradeDetail: tradeDetail
    })
    wx.request({
      url: url, 
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        const data = res.data
        this.setData({
          tradeDetail: data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getGoodDetail(options)
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