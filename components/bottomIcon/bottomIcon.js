// components/bottomIcon/bottomIcon.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        toMyInfo(){
            wx.redirectTo({
              url: '/pages/myInfo/myInfo',
            })
          },
          toHome(){
            wx.reLaunch({
              url: '/pages/index/index',
            })
            
          },
          toHistory(){
            wx.navigateTo({
              url: '/pages/history/history',
            })
          }
    }
})
