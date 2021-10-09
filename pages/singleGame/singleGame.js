// pages/singleGame/singleGame.js
var clickTime=0;
var playerNum=2;
var currentPlayerNum=playerNum;
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
        resultList:[0,0,0,0,0,0,0], //博饼后所有骰子的结果，如[0]代表点数1有几个
        displayList:[6], //存放最后显示的图片
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
        buttonText:"博",
        isBobingOver:false,
        currentNum: playerNum,
        nextButton:""
    },

    /**
     * 组件的方法列表
     */
    methods: {
        startClick(){
           
            clickTime%=2;
            clickTime++;
            if(clickTime%2==1){                
                this.setData({
                    buttonText:"停",
                    animation:this.data.dices[0],
                    bowlPicture:"",
                  //  rank:"",
                  //  displayList:[0,0,0,0,0,0]
                })
            }
            else{ //博完
                currentPlayerNum--;
                this.showRank();
                this.setData({
                    isBobingOver:true,
                    buttonText:"博",
                    animation:"",
                    bowlPicture:"/static/image/bobingPic.png",
                    resultList:[0,0,0,0,0,0,0]
                })
                
            }  
        },
        randomList(){
            var tempList=[];
            for(var i=0;i<6;i++){
                var num=Math.floor(Math.random() * 6) + 1; //随机1~6
                this.data.resultList[num]++;
                switch(num){
                    case 1:
                        tempList.push(this.data.dices[1]);
                        break;
                    case 2:
                        tempList.push(this.data.dices[2]);
                        break;  
                    case 3:
                        tempList.push(this.data.dices[3]);
                        break;       
                    case 4:
                        tempList.push(this.data.dices[4]);
                        break; 
                    case 5:
                        tempList.push(this.data.dices[5]);
                        break; 
                    case 6:
                        tempList.push(this.data.dices[6]);
                        break; 
                }
            }
            this.setData({
                displayList:tempList
            })
        },
        showRank(){
            this.randomList();
            if(this.data.resultList[4]==3&&this.data.resultList[2]==2){
                this.setData({
                    rank:"状元：状元插金花"
                })
            }
            else if(this.data.resultList[4]==6){
                this.setData({
                    rank:"状元：六杯红"
                })
            }
            else if(this.data.resultList[1]==6){
                this.setData({
                    rank:"状元：遍地棉"
                })
            }
            else if(this.data.resultList[4]==5){
                this.setData({
                    rank:"状元：五红"
                })
            }
            else if(this.data.resultList[2]==5){
                this.setData({
                    rank:"状元：五子连科"
                })
            }
            else if(this.data.resultList[4]==4){
                this.setData({
                    rank:"状元：四红"
                })
            }
            else if(this.data.resultList[1]==1&&this.data.resultList[2]==1
                &&this.data.resultList[3]==1&&this.data.resultList[4]==1
                &&this.data.resultList[5]==1&&this.data.resultList[6]==1){
                    this.setData({
                        rank:"榜眼：对堂"
                    })
                }
            else if(this.data.resultList[4]==3){
                this.setData({
                    rank:"探花：三红"
                })
            }    
            else if(this.data.resultList[2]==4){
                this.setData({
                    rank:"进士：四进"
                })
            }
            else if(this.data.resultList[4]==2){
                this.setData({
                    rank:"举人：二举"
                })
            }
            else if(this.data.resultList[4]==1){
                this.setData({
                    rank:"秀才：一秀"
                })
            }
            else{
                this.setData({
                    rank:"再接再厉~"
                })
            }
            console.log(this.data.rank);
            console.log(this.data.resultList);
            
            
        },
        continueClick(){
             this.setData({
                 isBobingOver:false,
                 currentNum:currentPlayerNum
            })
            console.log(this.data.currentNum);       
        },
        newClick(){ 
            this.setData({
                 isBobingOver:false,
                 currentNum:playerNum
            })
            currentPlayerNum=playerNum;
            console.log(this.data.currentNum);        
        },
        returnBack(){
            wx.reLaunch({
                url: '/pages/index/index',
              })
        }
    }
})
