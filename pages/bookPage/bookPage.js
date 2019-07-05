// pages/bookPage/bookPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comboList: [
      {
        'name': '普通门票 + 全岛接送',
        'date': '下午1点',
        'price': '250',
      },
      {
        'name': '普通门票 + 全岛接送',
        'date': '下午2点',
        'price': '250',
      },
      {
        'name': '普通门票 + 全岛接送',
        'date': '下午3点',
        'price': '250',
      },
      {
        'name': '普通门票 + 全岛接送',
        'date': '下午4点',
        'price': '250',
      },
      {
        'name': '普通门票 + 全岛接送',
        'date': '下午5点',
        'price': '250',
      },
      {
        'name': '普通门票 + 全岛接送',
        'date': '下午6点',
        'price': '250',
      }
    ],
    isChooseIndex: 0,
    isSeesionIndex: 0
  },
  // 选择套餐
  chooseCombo(event) {
    const newIndex = event.target.dataset.comboindex
    if (newIndex == this.data.isChooseIndex) {
      return
    }
    this.setData({
      isChooseIndex: newIndex || 0
    })
  },
  // 选择场次
  chooseSession(event) {
    const newIndex = event.target.dataset.seesionindex
    if (newIndex == this.data.isSeesionIndex) {
      return
    }
    this.setData({
      isSeesionIndex: newIndex || 0
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