// pages/singleGame/singleGame.js
var clickTime=0;
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
        resultList:[], //博饼后所有骰子的结果
        rank:"", //骰子判定结果
        dices:[
            "/static/image/diceGif.gif",
            "/static/image/shaizi1.png",
            "/static/image/shaizi2.png",
            "/static/image/shaizi3.png",
            "/static/image/shaizi4.png",
            "/static/image/shaizi5.png",
            "/static/image/shaizi6.png"
        ], //存储图片路径
        bowlPicture:"/static/image/bobingPic.png", //碗的路径
        animation:"", //gif
        buttonText:"博"
    },

    /**
     * 组件的方法列表
     */
    methods: {
        click(){
            clickTime%=2;
            clickTime++;
            if(clickTime%2==1){
                this.setData({
                    buttonText:"停",
                    animation:this.data.dices[0],
                    bowlPicture:""
                })
            }
            else{
                this.setData({
                    buttonText:"博",
                    animation:"",
                    bowlPicture:"/static/image/bobingPic.png"
                })
            }
            

            
        },

    }
})
