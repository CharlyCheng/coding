// pages/detail/detail.js
import Toast from '../../vant/toast/toast';
import Dialog from '../../vant/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tradeDetail: {},
    combList: [],
    isShowUserMethod: false,
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
  // 关掉close
  closeDetail() {
    this.setData({
      isShowUserMethod: false
    })
  },
  // 开pop
  openDetail() {
    this.setData({
      isShowUserMethod: true
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
  onClickButton(event) {
    const newIndex = event.target.dataset.bookindex || 0
    wx.navigateTo({
      url: `/pages/bookPage/bookPage?comboIndex=${newIndex}`
    })
  },
  //获取详情页面数据
  getGoodDetail(options) {
    const url = "http://123.56.123.203:8088/trip-web/v1/product/productDesc";
    const { product_id = '' } = options
    const data = {
      "product_id": product_id || 'p4f7e253-7bd3-4834-a1ad-2f18e9d9582f',
      "uuid": "111111"
    }
    const that = this;
    wx.request({
      url: url, 
      data: data,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        const data = res.data && res.data.data || {}
        const standards = data.standards || []
        const skus = data.skus || []
        let combList = []
        let taoCanList = []
        let standardsArr = []
        let attribute = ''
        let newTaoCan = ''
        standards.forEach( (item1, index) => {
          const parentId = item1.id
          const childrenItem = item1.item[0]
          if (item1.id != 'taocan'){
            attribute += `${childrenItem ? parentId:''  }:${childrenItem ? childrenItem.id : ''}${index == standards.length - 1 ? '': ';'}`
          } else {
            taoCanList = item1.item
            newTaoCan = parentId
          }
        })
        taoCanList.forEach((item2, index2) => {
          let newStr = `${newTaoCan}:${item2.id};${attribute}`
          standardsArr.push(newStr)
        })
        standardsArr.forEach( (item4, index4) => {
          skus.forEach((item1, index) => {
            if (item1.attributes == item4) {
              combList.push(item1)
            }
          })
        })
        that.setData({
          tradeDetail: data,
          combList: combList
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