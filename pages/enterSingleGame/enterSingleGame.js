// pages/enterSingleGame/enterSingleGame.js
var num = ""
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
        playerNum: '',
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onChange(event) {
            // event.detail 为当前输入的值
            console.log(event.detail);
          },
          bindKeyInput: function(e) {
            
            num = e.detail.value;
            this.setData({
              playerNum:num
            })
            
            
          },
          toSingleGame (){
              wx.setStorageSync('playerNum', num);
              wx.navigateTo({
                url:'/pages/singleGame/singleGame',
              })
          },

          sendMSG(){
              var sb=num
              wx.navigateTo({
                url: '/pages/singleGame/singleGame',
              })
          }
            
    }
})
