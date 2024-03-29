// pages/singleGame/singleGame.js
var clickTime=0;
var results=[];//所有人的结果列表
Page({
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
        currentButton:"/static/image/Bo.png" ,
        bowlPicture:"/static/image/bobingPic.png", //碗的路径
        animation:"", //gif
        isBobingOver:false,
        currentPlayerNum: "",
        playerNum:"",
        nextButton:""
    },
        onLoad(){
           results=[];
           let num=wx.getStorageSync('playerNum');
           if(num){
            this.setData({
                currentPlayerNum:num,
                playerNum:num
            })          
            
           }
          
        },
    
        
        startClick(){
           
            clickTime%=2;
            clickTime++;
            if(clickTime%2==1){    
                         
                this.setData({
                    
                    animation:this.data.dices[0],
                    bowlPicture:"",
                    currentButton: "/static/image/Ting.png"
                })
            }
            else{ //博完
                var result={rank:"",allDiceList:[]}; //一个人的结果列表
                this.showRank(result);
                this.setData({
                    isBobingOver:true,
                    currentButton: "/static/image/Bo.png",
                    animation:"",
                    bowlPicture:"/static/image/bobingPic.png",
                    resultList:[0,0,0,0,0,0,0],
                    
                })
                
            }  
        },
        randomList(result){
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
            //将结果存到本地存储中
            result.allDiceList=this.data.displayList;
            
        },
        showRank(result){
            this.randomList(result);
            if(this.data.resultList[4]==4&&this.data.resultList[1]==2){
                this.setData({
                    rank:"状元插金花"
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
            result.rank=this.data.rank;
            console.log(this.data.rank);
            console.log(this.data.resultList);
            results.push(result);
            wx.setStorageSync('results', results);
        },
        continueClick(){
             this.setData({
                 isBobingOver:false,
                 currentPlayerNum: --this.data.currentPlayerNum
            })
                
        },
        newClick(){ 
            this.setData({
                 isBobingOver:false,
                 currentPlayerNum:this.data.playerNum
            })
            //清除results缓存
            results=[];
            wx.removeStorageSync("results");
            console.log("新的一局，人数为： ",this.data.currentPlayerNum);        
        },
        returnBack(){
            wx.reLaunch({
                url: '/pages/index/index',
              })
            
        }
    
})
