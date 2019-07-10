// pages/bookPage/bookPage.js
import { tradeDetail } from '../../mock/productDesc'
import { enableArea, enableDays } from '../../component/calendar/main';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    tradeDetail: {},
    countList: [],
    combList: [],
    changciList: [],
    isChooseIndex: 0,
    isSeesionIndex: 0,
    isShowDate: true,
    isShowNum: false,
    totalMoney: 0,
    calendarConfig: {
      multi: false,
      disablePastDay: true,
      onlyShowCurrentMonth: true,
      noDefault: true
    },
    selectDateTimer: '请选择日期'
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
    wx.navigateTo({
      url: `/pages/bookPage/bookPage?comboIndex=${newIndex}`
    })
  },
  // 打开日期选择
  openSelectDate() {
    this.setData({
      isShowDate: true
    })
  },
  // 关掉日期选择
  closeSelectDate() {
    this.setData({
      isShowDate: false
    })
  },
  // 日期选择
  afterTapDay(val) {
    const year = val.detail.year
    const month = val.detail.month
    const day = val.detail.day
    const selectDate = `${year}-${month}-${day}`
    this.setData({
      isShowDate: false,
      selectDateTimer: selectDate 
    })
  },
  //获取详情页面数据
  getTradeDetail(options) {
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
        let changciList = []
        let countList = []
        let taoCanList = []
        let standardsArr = []
        let riqiArr = []
        let riqiEnableDay = []
        let attribute = ''
        let newTaoCan = ''
        standards.forEach( (item1, index) => {
          const parentId = item1.id
          const childrenItem = item1.item[0]
          if (parentId == 'riqi') {
            riqiArr = item1.item
          }
          if (parentId == 'changci') {
            changciList = item1.item
          }
          if (parentId == 'shuliang') {
            countList = item1.item
          }
          if (parentId != 'taocan'){
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
        riqiArr.forEach((item1, index) => {
          if (item1.id) {
            riqiEnableDay.push(item1.id)
          }
        })
        // countList.map((item,index) => {
        //   item.stepperNum = 0;
        //   item.price = combList[index].price
        // })
        console.log('====================================');
        console.log('combList', combList);
        console.log('====================================');
        
        console.log('====================================');
        console.log('riqiEnableDay', riqiEnableDay);
        console.log('====================================');
        enableDays(riqiEnableDay)
        that.setData({
          tradeDetail: data,
          combList: combList,
          countList: countList,
          changciList: changciList
        })
      }
    })
  },
  // 选择第几个
  defaultChooseIndex(options) {
    const { comboIndex = '' } = options
    this.setData({
      isChooseIndex: comboIndex || 0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTradeDetail(options)
    this.defaultChooseIndex(options)
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