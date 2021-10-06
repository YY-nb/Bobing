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
            wx.navigateTo({
              url: '/pages/myInfo/myInfo',
            })
          },
          toHome(){
            wx.navigateTo({
              url: '/pages/index/index',
            })
          }
    }
})
