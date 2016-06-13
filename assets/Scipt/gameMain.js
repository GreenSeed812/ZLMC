cc.Class({
    extends: cc.Component,

//在proprties里定义的变量可以再编辑器里看到
    properties: {
        /**
         * blockPre
         * 存放预制物的数组
         */
        blockPre: 
        {
            default:[],
            type:cc.Prefab
        },
        /**
         *blockArray 
         * 存放创建好的预制物实例，方便统一设置位置和大小
         */
         blockArray:
       {
          default: [],
          type: [cc.Prefab]
        },
        /**
         *blockIndex 
         * 区分预制物的属性
         */
        blockIndex:
        {
            default:0
        },
        /**
         *WhoAreyou 
         * 预制物返回的属性判断是哪个预制物在响应事件
         */
        WhoAreyou:       {   default:0     },
        WhoAreyouX:      {   default:0     }, 
        WhoAreyouY:      {   default:0     },
        isHuan:          {   default:false },
        jiaohuan:        {   default:0     },
        hengpaiyingxiao: {   default:[]    },
        linshitest:      {   default:[]    },
        
            
        
        
    },
    // use this for initialization
    onLoad: function () {
        this. shupaiyingxiao=new Array();
       
    //**************************创建二维数组并将预制物存入*************************//
        this.blockArray2=new Array();
         for(var iARR=0;iARR<5;iARR++)
         {
              this.blockArray2[iARR]=new Array();
              for(var jARR=0;jARR<6;jARR++)
              {
                  this.blockArray2[iARR][jARR]=this.blockPre[0];
              }
         }
    //******************************************************************************//
        this.spawnNewStar();
         for(var i=0;i<5;i++)
         {
             for(var j=0;j<6;j++)
             {
                 this.blockArray2[i][j].setPosition(this.blockArray2[i][j].x-185,this.blockArray2[i][j].y-250);
             }
              
         }
        //  for(var k=0;k<30;k++)
        //  {
        //       this.blockArray[k].setPosition(this.blockArray[k].x-185,this.blockArray[k].y-250);
        //  }
    },
     spawnNewStar: function() {
         for(var i=0;i<5;i++){
             for(var j=0;j<6;j++){
                // 使用给定的模板在场景中生成一个新节点
                var block = cc.instantiate(this.blockPre[0]);
                block.scaleX = 0.85;
                 block.scaleY= 0.85;
                block.getComponent('block').ID=Math.floor(Math.random()*(5-0)+0);
                block.getComponent('block').set(this.node);
                // 将新增的节点添加到 Canvas 节点下面
                block.getComponent('block').index=this.blockIndex;
                // 为星星设置一个随机位置
                block.setPosition(75*j,200-75*i);
                this.blockArray2[i][j]=block;
                if(i>1)
                {
                   if( this.blockArray2[i][j].getComponent('block').ID== this.blockArray2[i-1][j].getComponent('block').ID&&this.blockArray2[i][j].getComponent('block').ID== this.blockArray2[i-2][j].getComponent('block').ID)
                   {
                       do
                       {
                           var Did=Math.floor(Math.random()*(5-0)+0);
                       }while(this.blockArray2[i][j].getComponent('block').ID==Did)
                       this.blockArray2[i][j].getComponent('block').ID=Did;
                   }
                }
                 if(j>1)
                {
                   if( this.blockArray2[i][j].getComponent('block').ID== this.blockArray2[i][j-1].getComponent('block').ID&&this.blockArray2[i][j].getComponent('block').ID== this.blockArray2[i][j-2].getComponent('block').ID)
                   {
                       do
                       {
                           var Didj=Math.floor(Math.random()*(5-0)+0);
                       }while(this.blockArray2[i][j].getComponent('block').ID==Didj)
                       this.blockArray2[i][j].getComponent('block').ID=Didj;
                   }
                }
                this.blockArray.push(block);
                this.node.addChild(block);
                this.blockIndex++;
             }
         }
    },
     update: function (dt) {
       //  console.log("whoAreyou::::::::::::::::::::::::"+this.WhoAreyou);
         //   console.log("whoAreyouX::::::::::::::::::::::::"+this.WhoAreyouX);
          //     console.log("whoAreyouY::::::::::::::::::::::::"+this.WhoAreyouY);
        if(!this.isHuan)
        {
            console.log("222ccc");
             for(var i=0;i<30;i++)
             {
                  if(i!=this.WhoAreyou )
                  {
                      if(Math.sqrt(Math.pow(this.blockArray[this.WhoAreyou].x-this.blockArray[i].x, 2)+Math.pow(this.blockArray[this.WhoAreyou].y-this.blockArray[i].y, 2))<40&&this.blockArray[i].getComponent('block').isXiao==false)
                      {
                           
                           
                        this.blockArray[this.WhoAreyou].x= this.blockArray[i].x;
                        this.blockArray[this.WhoAreyou].y= this.blockArray[i].y;
                        this.blockArray[i].x=this.WhoAreyouX;
                        this.blockArray[i].y=this.WhoAreyouY;
                        this.WhoAreyouX= this.blockArray[this.WhoAreyou].x;
                        this.WhoAreyouY=this.blockArray[this.WhoAreyou].y;
                          
                          
                          
                           
                        console.log("this.blockArray[this.WhoAreyou]================"+this.blockArray[this.WhoAreyou].getComponent('block').whoAmI);
                        console.log("this.blockArray[i]============================="+this.blockArray[i].getComponent('block').whoAmI);
                          
                          
                          
                        var HuanWeiZhi=this.blockArray[this.WhoAreyou];
                        this.blockArray[this.WhoAreyou]=this.blockArray[i];
                        this.blockArray[i]=HuanWeiZhi;
                          
                          
                        var DwhoAmI=this.blockArray[this.WhoAreyou].getComponent('block').whoAmI
                        this.blockArray[this.WhoAreyou].getComponent('block').whoAmI=this.blockArray[i].getComponent('block').whoAmI;
                        this.blockArray[i].getComponent('block').whoAmI=DwhoAmI;
                          
                        var Dindex=this.blockArray[this.WhoAreyou].getComponent('block').index
                        this.blockArray[this.WhoAreyou].getComponent('block').index=this.blockArray[i].getComponent('block').index;
                        this.blockArray[i].getComponent('block').index=Dindex;
                          
                        console.log("this.blockArray[this.WhoAreyou]::::::::::::::::::::::"+this.blockArray[this.WhoAreyou].getComponent('block').whoAmI);
                        console.log("HuanWeiZhi:::::::::::::::::::::::::::::::::::::::"+HuanWeiZhi.getComponent('block').whoAmI);
                        console.log("this.blockArray[i]:::::::::::::::::::::::::::::::::::::::"+this.blockArray[i].getComponent('block').whoAmI);
                    }
                }

                
            }
        }
         if(this.isHuan)
         {
            this.isHuan=false;
            this.blockArray[this.WhoAreyou].x = this.WhoAreyouX
            this.blockArray[this.WhoAreyou].y=  this.WhoAreyouY
            for(var i=0;i<30;i++)
            {
                
                this.blockArray2[parseInt(i/6)][parseInt(i%6)]=this.blockArray[i];
                console.log("I2D:::::::::::::::::::::::::::::::"+i+"="+this.blockArray2[parseInt(i/6)][parseInt(i%6)].getComponent('block').ID);
            }
            console.log("this.ishuang:::::::::::"+ this.isHuan);
            
            
            
            /**
             * 执行消除
             * */
            this.columnTraversal();
            this.lineTraversal();
            var Qu=[];
            Qu= this.eliminate(this.linshitest);
            if(Qu.length>0)
            {
                console.log("ShuChus");
                console.log("ShuChus2"+Qu.length);
                for(var k=0;k<Qu.length;k++)
                {
                    Qu[k].getComponent('block').isXiao=true;
                    Qu[k].getComponent(cc.Sprite).setVisible(false);
                    console.log("ANliexiao:::::::::::::::::::::::::"+parseInt(Qu[k].getComponent('block').index/6) + parseInt(Qu[k].getComponent('block').index%6));
                    
                }
                this.xialuo();
            }
         }
     },
     
    columnTraversal:function()
    {
        for(var h=0;h<6;h++)
        {
            var hang=0;
            var yiChaZhao=0;
            for(var j=0;j<5;j++)
            {
                if(j+1<5){
                    if(this.blockArray2[j][h].getComponent('block').ID==this.blockArray2[j+1][h].getComponent('block').ID)
                    {  
                        this.shupaiyingxiao.push(this.blockArray2[j+1][h]);
                        //console.log("RRRRRRRRRRRR ：：：：：：：：：：：：：：：：："+(j+1));
                         yiChaZhao=(j+1);
                        //  console.log("RRRRRRRRRRRR ：：：：：：：：：：：：：：：：："+yiChaZhao);
                             
                        //   console.log("this.shupaiyingxiao.length:::::::::::"+this.shupaiyingxiao.length);
                    }else
                    {
                        // console.log("this.shupaiyingxiao.length+++++++++++++"+this.shupaiyingxiao.length);
                        if(this.shupaiyingxiao.length>1)
                        {
                            // console.log("asdasdasdas：：：：：：：：：：：：：：：：："+0);
                            this.shupaiyingxiao.push(this.blockArray2[hang][h]);
                            break;
                        }else
                        {
                            hang++;
                            for(var l=this.shupaiyingxiao.length ;l>0;l--)
                            {
                                this.shupaiyingxiao.pop();
                            }
                        }
                    }
                    // console.log("TTTTTTTTTTTTTTTTTTTTTTT ：：：：：：：：：：：：：：：：："+yiChaZhao);
                    if(yiChaZhao==4)
                    {
                        if(this.shupaiyingxiao.length>1)
                        {
                            // console.log("asdasdasdas：：：：：：：：：：：：：：：：："+1);
                            this.shupaiyingxiao.push(this.blockArray2[hang][h]);
                        }else
                        {
                            for(var l=this.shupaiyingxiao.length ;l>0;l--)
                            {
                                this.shupaiyingxiao.pop();
                            }
                        }
                    }
                }
            }
                // console.log("this.shupaiyingxiao.length:::::::::::"+this.shupaiyingxiao.length);
                for(var l1=0 ;l1<this.shupaiyingxiao.length;l1++)
                {
                    // console.log("sdf");
                    this.linshitest.push(this.shupaiyingxiao[l1]);
                }
                // console.log("this.linshitest.length:::::::::::"+ this.linshitest.length);
                for(var l=this.shupaiyingxiao.length ;l>0;l--)
                {
                    this.shupaiyingxiao.pop();
                }
                if(this.linshitest.length>0)
                {
                        for(var jc1=0;jc1<this.linshitest.length;jc1++)
                        {
                            // console.log("WWWWWWWWWWWWWWWW"+this.linshitest[jc1].getComponent('block').ID);
                            // console.log("daosi+++;;"+this.linshitest.length);
                        }
                }
        }
    },
    lineTraversal:function()
    {
        var ANliexiao=new Array();
        for(var rr=0;rr<5;rr++)
        {
            var lie=0;
            var r=0;
            while(lie<6)
            {
                for(var r=lie+1;r<6;r++)
                {
                    // console.log("1========================================="+ r);
                    if(this.blockArray2[rr][lie].getComponent('block').ID==this.blockArray2[rr][r].getComponent('block').ID)
                    {
                        // console.log("2==");
                        ANliexiao.push(this.blockArray2[rr][r]);
                    }else
                    {
                        if(ANliexiao.length>1)
                        {
                            // console.log("3==");
                            ANliexiao.push(this.blockArray2[rr][lie]);
                            break;
                        }else
                        {
                            // console.log("4==");
                            lie=r;
                            for(var f=ANliexiao.length;f>0;f--)
                            {
                                ANliexiao.pop();
                            }
                        }
                        // console.log("5==");
                    }
                    // console.log("1===2222222222222===================="+ r);
                }
                // console.log("2=2222222======================="+r);
                // console.log("2====lie=================================="+lie);
                if(r-1==5)
                {
                
                    // console.log("2========================================="+lie);
                    if(ANliexiao.length>1)
                    {
                        // console.log("3==#");
                        ANliexiao.push(this.blockArray2[rr][lie]);
                    }else{
                        for(var ql=ANliexiao.length ;ql>0;ql--)
                        {
                            ANliexiao.pop();
                        }
                    }
                }
                for(var l1=0 ;l1<ANliexiao.length;l1++)
                {
                    // console.log("sdf");
                    this.linshitest.push(ANliexiao[l1]);
                }
                // console.log("this.linshitest.length:::::::::::"+ this.linshitest.length);
                for(var l=ANliexiao.length ;l>0;l--)
                {
                    ANliexiao.pop();
                }
                lie=r;
            }
                for(var l2=ANliexiao.length;l2>0;l2--)
                {
                    ANliexiao.pop();
                }
        }
    },
    eliminate:function(arr)
    {
         var tmp = new Array();
            for(var i in arr)
            {
                //该元素在tmp内部不存在才允许追加
                if(tmp.indexOf(arr[i])==-1)
                {
                    tmp.push(arr[i]);
                 }
        }
        return tmp;
    },
    
    xialuo:function()
    {
        var isXiaoTrue=new Array();
        var hangIndex=0;
        var hangIndexC=0;
        var DX=0;
        var DY=0;
        var t=0;
        for(var i=4;i>=0;i--)
        {
            if(this.blockArray2[i][0].getComponent('block').isXiao==true)
            {
                hangIndex=i;
                hangIndexC++;
                isXiaoTrue.push(this.blockArray2[i][0]);
            }
           
        }
        
        for(var j=hangIndex-1;j>=0;j--)
        {
            
            
            this.blockArray2[j][0].getComponent('block'). shubiO();
            var temp=this.blockArray2[j][0];
            this.blockArray2[j][0]=this.blockArray2[j+hangIndexC][0];
            this.blockArray2[j+hangIndexC][0]=temp;
            
             var TDwhoAmI=this.blockArray2[j][0].getComponent('block').whoAmI
             this.blockArray2[j][0].getComponent('block').whoAmI= this.blockArray2[j+hangIndexC][0].getComponent('block').whoAmI;
             this.blockArray2[j+hangIndexC][0].getComponent('block').whoAmI=TDwhoAmI;
            
            var trmpIndex=this.blockArray2[j][0].getComponent('block').index
            this.blockArray2[j][0].getComponent('block').index=this.blockArray2[j+hangIndexC][0].getComponent('block').index;
            this.blockArray2[j+hangIndexC][0].getComponent('block').index=trmpIndex;
            
            console.log('XXAA:::::::::'+this.blockArray2[j][0].x);
            console.log('XXBB:::::::::'+this.blockArray2[j][0].y);
            var action = cc.moveTo(1, this.blockArray2[j][0].x, this.blockArray2[j][0].y);
            var finished = cc.callFunc(function () {
                for(var t=0;t<isXiaoTrue.length;t++)
                {
                    // DX=isXiaoTrue[t].x
                    // DY=isXiaoTrue[t].y
                    // isXiaoTrue[t].x=isXiaoTrue[isXiaoTrue.length-1].x;
                    // isXiaoTrue[t].y=isXiaoTrue[isXiaoTrue.length-1].y;
                    // isXiaoTrue[t].getComponent('block').isXiao=false;
                    // isXiaoTrue[t].getComponent(cc.Sprite).setVisible(true);;
                    // isXiaoTrue[t].getComponent('block').getComponent('block').ID=Math.floor(Math.random()*(5-0)+0);
                }
                 
                
                
                
                         
                
                
                
            }, this);
            console.log('RERERR::::::::::::::::::::'+j);
            var myAction = cc.sequence(action,finished);
            this.blockArray2[j+hangIndexC][0].runAction(myAction);
            console.log('XX:::::::::'+hangIndex);
            console.log('XXC:::::::::'+hangIndexC);
        }
        
         
        
        
        
        
       
    }
    
});
