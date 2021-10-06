// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    bobingHall:'博饼大厅',
    createRoom:'创建私房',
    singlePlay:'单人博饼'
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  toSingleGame(){
    wx.navigateTo({
      url: '/pages/singleGame/singleGame',
    })
  },
  toMyInfo(){
    wx.navigateTo({
      url: '/pages/myInfo/myInfo',
    })
  },
  toHome(){
    wx.navigateTo({
      url: '/pages/index/index',
    })
  }
  
})
