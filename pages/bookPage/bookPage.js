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
    countList: [
      {
        'name': '成人',
        'price': 50,
        'stepperNum': 0
      },
      {
        'name': '儿童',
        'price': 20,
        'stepperNum': 0
      }
    ],
    isChooseIndex: 0,
    isSeesionIndex: 0,
    totalMoney: 0,
    calendarConfig: {
      multi: false,
      disablePastDay: true,
    },
    selectDateTimer: ''
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
  // 减少数量
  bindMinus(event) {
    const newIndex = event.target.dataset.minusindex
    const countList = this.data.countList
    const oldStepperNum = countList[newIndex].stepperNum
    let totalMoney = this.data.totalMoney
    if (oldStepperNum  < 1) {
      return;
    }
    const stepperNum =  oldStepperNum - 1
    countList[newIndex].stepperNum = stepperNum
    countList.map( (item,index) => {
      if (index == newIndex) {
        totalMoney = totalMoney - item.price
      }
    })
    this.setData({
      countList: countList,
      totalMoney: totalMoney
    })
  },
  // 增加数量
  bindPlus(event) {
    const newIndex = event.target.dataset.plusindex
    const countList = this.data.countList
    const oldStepperNum = countList[newIndex].stepperNum
    const stepperNum = oldStepperNum + 1
    let totalMoney = this.data.totalMoney
    countList[newIndex].stepperNum = stepperNum
    countList.map( (item,index) => {
      if (index == newIndex) {
        totalMoney +=  item.price
        return;
      }
    })
    this.setData({
      countList: countList,
      totalMoney: totalMoney
    })
  },
  // 下一步去支付
  bookNextPay() {

  },
  // 日期选择
  afterTapDay(val) {
    console.log('====================================');
    console.log('val',val);
    console.log('====================================');
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