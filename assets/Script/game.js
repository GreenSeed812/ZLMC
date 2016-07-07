cc.Class({
    extends: cc.Component,
    properties: {
        blockPre:                {    default:null,  type:cc.Prefab },
        downBlockH:              {    default:null                  },
        downBlockL:              {    default:null                  },
        targetX:                 {    default:null                  },
        targetY:                 {    default:null                  },
        columnLookup:            {    default:[] ,   type:cc.Prefab },
        RowLookup:               {    default:[] ,   type:cc.Prefab },
        arrayShouldBeEliminated: {    default:[] ,   type:cc.Prefab },
        eliminateDuplicateArray: {    default:[] ,   type:cc.Prefab },
        calculatedDamage :       {    default:[] ,   type:cc.Prefab },
        calculatedDamageArray:   {    default:[] ,   type:cc.Prefab },
        jishiqi:                 {    default:true                  },
        jindutiao:               {    default:null,  type:cc.Sprite },
        timeover:                {    default:false                 },
        shuxing_0:               {    default:0                     },
        shuxing_1:               {    default:0                     },
        shuxing_2:               {    default:0                     },
        shuxing_3:               {    default:0                     },
        shuxing_4:               {    default:0                     },
        heroArry:                {    default:[],  type:cc.Sprite   },
        jisuanshangh:            {    default:false                 },
        mastor:                  {    default:null,  type:cc.Sprite },
        mastorL:                 {    default:null,  type:cc.Sprite },
        mastorR:                 {    default:null,  type:cc.Sprite },
        blockNode:               {    default:null,  type:cc.Node   },
        pingBidianji:            {    default:null,  type:cc.Button },
        velea:                   {    default:22                    },
        mastornumber:            {    default:0                     },
        boShu:                   {    default:0                     },
        background:              {    default:null,  type:cc.Node   },
    },
    onLoad: function ()
    {
         this.fubiaoGk();
    },
    fubiaoGk:function()
    {
         var node = cc.director.getScene().getChildByName('data');  
         //获取节点的node脚本组件，并调用脚本里面的函数   
         var guanka = node.getComponent('NewScript').getDiJiGuan();  
         var GKnode = node.getComponent('NewScript').ChaGK(guanka,this.boShu);  
         //cc.log('常驻节点的data值为'+data);
         console.log("dijige"+GKnode.N3);
         if(GKnode.N3==0)
         {
            this.mastornumber=2;
            console.log("怪物数量：：：：：：：：：:"+ this.mastornumber);
            this.mastor.getComponent('Monster').isdie=true;
            this.mastor.getComponent('Monster').HP=" ";
            this.mastorL.getComponent('Monster').id=GKnode.N1;
            this.mastorR.getComponent('Monster').id=GKnode.N2;
            this.mastorL.getComponent('Monster').fubiaoGk();
            this.mastorR.getComponent('Monster').fubiaoGk();
            this.mastor.getComponent(cc.Sprite).setVisible(false);
         }else
         {
            this.mastornumber=3;
            console.log("怪物数量：：：：：：：：：:"+ this.mastornumber);
            this.mastor.getComponent('Monster').isdie=false;
            this.mastorL.getComponent('Monster').isdie=true;
            this.mastorR.getComponent('Monster').isdie=true;
            this.mastorR.getComponent('Monster').HP=" ";
            this.mastorL.getComponent('Monster').HP=" ";
            this.mastor.getComponent('Monster').id=GKnode.N3;
            this.mastor.getComponent('Monster').fubiaoGk();
            this.mastor.getComponent(cc.Sprite).setVisible(true);
            this.mastorR.getComponent(cc.Sprite).setVisible(false);
            this.mastorL.getComponent(cc.Sprite).setVisible(false);
         }
         this.gameMain();
    },
    gameMain:function()
    {
        console.log("c1223233c****************" + this.mastornumber );
        this.pingBidianji.node.active=false;
        console.log("asdfasdfadf::::::::::::::::::"+this.pingBidianji.active);
//**************************创建二维数组并将预制物存入*************************//
        this.blockArray=new Array();
        for(var i=0;i<5;i++)
        {
            this.blockArray[i]=new Array();
            for(var j=0;j<6;j++)
            {
                var block = cc.instantiate(this.blockPre);
                block.setPosition(j*180-450,i*-180+360);
                block.getComponent('fangkuai').setHL(i,j);
                this.blockNode.addChild(block);
                this.blockArray[i][j]=block;
            }
        }
//******************************************************************************//
//*******************初始化地图设置没有三连的方块*******************************//
        for (var  k=0; k<5; k++)
		{
			for (var  n=0; n<6; n++)
			{
				var st= " this.blockArray[" + k + "][" + n + "]: " + this.blockArray[k][n].getComponent('fangkuai').getH()+","+ this.blockArray[k][n].getComponent('fangkuai').getL()+","+this.blockArray[k][n].y;
				// console.log(st);
			    if(k>1)
                {
                    if( this.blockArray[k][n].getComponent('fangkuai').index== this.blockArray[k-1][n].getComponent('fangkuai').index&&this.blockArray[k][n].getComponent('fangkuai').index== this.blockArray[k-2][n].getComponent('fangkuai').index)
                    {
                        // console.log("123");
                        do
                        {
                            var Did=Math.floor(Math.random()*(5-0)+0);
                        }while(this.blockArray[k][n].getComponent('fangkuai').index==Did)
                        this.blockArray[k][n].getComponent('fangkuai').index=Did;
                    }
                }
                if(n>1)
                {
                    if( this.blockArray[k][n].getComponent('fangkuai').index== this.blockArray[k][n-1].getComponent('fangkuai').index&&this.blockArray[k][n].getComponent('fangkuai').index== this.blockArray[k][n-2].getComponent('fangkuai').index)
                    {
                        //  console.log("1223");
                        do
                        {
                            var Didj=Math.floor(Math.random()*(5-0)+0);
                        }while(this.blockArray[k][n].getComponent('fangkuai').index==Didj)
                        this.blockArray[k][n].getComponent('fangkuai').index=Didj;
                    }
                }
		    }
		}
		//在控制台打印index是和显示的一样
		for (var  k1=0; k1<5; k1++)
		{
			for (var  n1=0; n1<6; n1++)
			{
		      //  console.log(" this.blockArray[" + k1 + "][" + n1 + "].index: "+this.blockArray[k1][n1].getComponent('fangkuai').index);
			}
		}
		//注册手指开始点击屏幕事件
		this.blockNode.on('touchstart', function (event) 
		{
		    this.timeover=false;
		    this.xialuo=false;
		    this.jishiqi=true;
		    event.getLocationX();
		    event.getLocationY();
		  //  console.log(event.getLocationY()-960);
		  //  console.log(event.getLocationX()-540);
		    for(var i=0;i<30;i++)
		    {
		        
		        if(Math.sqrt(Math.pow((event.getLocationY()-560)-this.blockArray[parseInt(i/6)][parseInt(i%6)].y,2)+Math.pow((event.getLocationX()-540)-this.blockArray[parseInt(i/6)][parseInt(i%6)].x,2))<90)
		        {
		          //  console.log("weizhi::::::::::"+parseInt(i/6),parseInt(i%6));
		            this.downBlockH=parseInt(i/6);
		            this.downBlockL=parseInt(i%6);
		            this.blockArray[parseInt(i/6)][parseInt(i%6)].x=event.getLocationX()-540;
		            this.blockArray[parseInt(i/6)][parseInt(i%6)].y=event.getLocationY()-560;
		            this.targetX= this.blockArray[parseInt(i/6)][parseInt(i%6)].x;
		            this.targetY= this.blockArray[parseInt(i/6)][parseInt(i%6)].y;
		        }
		    }
        }, this);
        //注册手指开始在屏幕移动事件
        this.node.on('touchmove', function (event) 
		{
		   
		  //  console.log(this.downBlockH);
		  //  console.log(this.downBlockL);
		    if(this.downBlockH!=null&&this.downBlockL!=null)
		    {
		      this.blockArray[this.downBlockH][this.downBlockL].x=event.getLocationX()-540;
		      this.blockArray[this.downBlockH][this.downBlockL].y=event.getLocationY()-560;
		    }
		     this.exchange();
		}, this);
		  //注册手指离开屏幕事件
		 this.blockNode.on('touchend', this.clickFinish, this);
     },
     finish:function()
     {
        
         if(this.downBlockH!=null&&this.downBlockL!=null)
        {
            this.blockArray[this.downBlockH][this.downBlockL].y=this.blockArray[this.downBlockH][this.downBlockL].getComponent('fangkuai').getH()*-180+360
            this.blockArray[this.downBlockH][this.downBlockL].x=this.blockArray[this.downBlockH][this.downBlockL].getComponent('fangkuai').getL()*180-450
		    this.downBlockH=null;
		    this.downBlockL=null;
        }
        	for (var  k1=0; k1<5; k1++)
		    {
			    for (var  n1=0; n1<6; n1++)
			    {
		          //  console.log(" this.blockArray[" + k1 + "][" + n1 + "].index: "+this.blockArray[k1][n1].getComponent('fangkuai').index);
			    }
		    }
        this.eliminateL();
        this.eliminate();
        if(this.arrayShouldBeEliminated.length>0){
            this.eliminateDuplicateArray=this.toRepeat(this.arrayShouldBeEliminated);
            for(var c=0;c<this.eliminateDuplicateArray.length;c++)
            {
                // console.log("this.eliminateDuplicateArray"+this.eliminateDuplicateArray[c].getComponent('fangkuai').getL()+','+ "linshitest数组中的元素"+this.eliminateDuplicateArray[c].getComponent('fangkuai').getH());
                this.eliminateDuplicateArray[c].getComponent('fangkuai').WhetherToEliminate=true;
                this.eliminateDuplicateArray[c].getComponent(cc.Sprite).setVisible(false);
            }
              for(var c1=0;c1<this.eliminateDuplicateArray.length;c1++)
            {
                this.calculatedDamage.push(this.eliminateDuplicateArray[c1]);
            }
            for(var c3=this.arrayShouldBeEliminated.length;c3>0;c3--)
            {
               this.arrayShouldBeEliminated.pop();
            }
             
            this.Fill();
        }else
        {
               
            console.log('计算伤害进行攻击'+this.calculatedDamage.length);
             for(var c3=0;c3<this.calculatedDamage.length;c3++)
            {
               if(this.calculatedDamage[c3].getComponent('fangkuai').index==0)
               {
                   this.shuxing_0++;
               }
               if(this.calculatedDamage[c3].getComponent('fangkuai').index==1)
               {
                   this.shuxing_1++;
               }
               if(this.calculatedDamage[c3].getComponent('fangkuai').index==2)
               {
                   this.shuxing_2++;
               }
               if(this.calculatedDamage[c3].getComponent('fangkuai').index==3)
               {
                   this.shuxing_3++;
               }
               if(this.calculatedDamage[c3].getComponent('fangkuai').index==4)
               {
                   this.shuxing_4++;
               }
            }
            console.log('this.shuxing_0'+this.shuxing_0);
            console.log('this.shuxing_1'+this.shuxing_1);
            console.log('this.shuxing_2'+this.shuxing_2);
            console.log('this.shuxing_3'+this.shuxing_3);
            console.log('this.shuxing_4'+this.shuxing_4);
            if( this.heroArry[1].getComponent('hero').isdie==false){
                if(this.shuxing_0>0&&this.mastor.getComponent('Monster').isdie==false)
                {
                    this.heroArry[1].getComponent('hero').aunchAnOrdinaryAttack( this.mastor,( this.shuxing_0-3));
                    this.heroArry[1].getComponent('hero').aunchAnOrdinaryAttack( this.mastor,( this.shuxing_0-3));
                }else if(this.shuxing_0>0&&this.mastorL.getComponent('Monster').isdie==false)
                {
                    this.heroArry[1].getComponent('hero').aunchAnOrdinaryAttack( this.mastorL,( this.shuxing_0-3));
                    this.heroArry[1].getComponent('hero').aunchAnOrdinaryAttack( this.mastorL,( this.shuxing_0-3));
                }else if(this.shuxing_0>0&&this.mastorR.getComponent('Monster').isdie==false)
                {
                    this.heroArry[1].getComponent('hero').aunchAnOrdinaryAttack( this.mastorR,( this.shuxing_0-3));
                    this.heroArry[1].getComponent('hero').aunchAnOrdinaryAttack( this.mastorR,( this.shuxing_0-3));
                }
            }
            //******************************************************************************************************
            if(this.heroArry[4].getComponent('hero').isdie==false){
                if(this.shuxing_1>0&&this.mastor.getComponent('Monster').isdie==false)
                {
                    this.heroArry[4].getComponent('hero').aunchAnOrdinaryAttack( this.mastor,( this.shuxing_1-3));
                }else if(this.shuxing_1>0&&this.mastorL.getComponent('Monster').isdie==false)
                {
                     this.heroArry[4].getComponent('hero').aunchAnOrdinaryAttack( this.mastorL,( this.shuxing_1-3));
                }else if(this.shuxing_1>0&&this.mastorR.getComponent('Monster').isdie==false)
                {
                    this.heroArry[4].getComponent('hero').aunchAnOrdinaryAttack( this.mastorR,( this.shuxing_1-3));
                }
            }
            //******************************************************************************************************
            if(this.heroArry[0].getComponent('hero').isdie==false){
                if(this.shuxing_2>0&&this.mastorR.getComponent('Monster').isdie==false)
                {
                    this.heroArry[0].getComponent('hero').aunchAnOrdinaryAttack( this.mastorR,( this.shuxing_2-3));
                    
                }else if(this.shuxing_2>0&&this.mastor.getComponent('Monster').isdie==false)
                {
                     this.heroArry[0].getComponent('hero').aunchAnOrdinaryAttack( this.mastor,( this.shuxing_2-3));
                }else if(this.shuxing_2>0&&this.mastorL.getComponent('Monster').isdie==false)
                {
                    this.heroArry[0].getComponent('hero').aunchAnOrdinaryAttack( this.mastorL,( this.shuxing_2-3)); 
                }
            }
            //******************************************************************************************************
            if(this.heroArry[2].getComponent('hero').isdie==false)
            {
                if(this.shuxing_3>0&&this.mastor.getComponent('Monster').isdie==false)
                {
                    this.heroArry[2].getComponent('hero').aunchAnOrdinaryAttack( this.mastor,( this.shuxing_3-3));
                    var min=0;
                    for(var zl=0;zl<this.heroArry.length-1;zl++)
                    {
                        if(this.heroArry[zl].getComponent('hero').HP<this.heroArry[zl+1].getComponent('hero').HP)
                        {
                            min=zl;
                        }
                    }
                }else if(this.shuxing_3>0&&this.mastorL.getComponent('Monster').isdie==false)
                {
                    this.heroArry[2].getComponent('hero').aunchAnOrdinaryAttack( this.mastorL,( this.shuxing_3-3));
                    var min=0;
                    for(var zl=0;zl<this.heroArry.length-1;zl++)
                    {
                        if(this.heroArry[zl].getComponent('hero').HP<this.heroArry[zl+1].getComponent('hero').HP)
                        {
                            min=zl;
                        }
                    }
                    this.heroArry[min].getComponent('hero').addHP( this.heroArry[2].getComponent('hero').attackPower*0.8);
                }else if(this.shuxing_3>0&&this.mastorR.getComponent('Monster').isdie==false)
                {
                    this.heroArry[2].getComponent('hero').aunchAnOrdinaryAttack( this.mastorR,( this.shuxing_3-3));
                    var min=0;
                    for(var zl=0;zl<this.heroArry.length-1;zl++)
                    {
                        if(this.heroArry[zl].getComponent('hero').HP<this.heroArry[zl+1].getComponent('hero').HP)
                        {
                            min=zl;
                        }
                    }
                    this.heroArry[min].getComponent('hero').addHP( this.heroArry[2].getComponent('hero').attackPower*0.8);
                }
            }
            //******************************************************************************************************  
            if( this.heroArry[3].getComponent('hero').isdie==false)
            {
                if(this.shuxing_4>0&&this.mastorL.getComponent('Monster').isdie==false)
                {
                   this.heroArry[3].getComponent('hero').aunchAnOrdinaryAttack( this.mastorL,( this.shuxing_4-3));
                }else if(this.shuxing_4>0&&this.mastor.getComponent('Monster').isdie==false)
                {
                    this.heroArry[3].getComponent('hero').aunchAnOrdinaryAttack( this.mastor,( this.shuxing_4-3));
                }
                else if(this.shuxing_4>0&&this.mastorR.getComponent('Monster').isdie==false)
                {
                    this.heroArry[3].getComponent('hero').aunchAnOrdinaryAttack( this.mastorR,( this.shuxing_4-3));
                }
            }
            //******************************************************************************************************
            for(var c2=this.eliminateDuplicateArray.length;c2>0;c2--)
            {
               this.eliminateDuplicateArray.pop();
            }
            for(var c7=this.calculatedDamage.length;c7>0;c7--)
            {
               this.calculatedDamage.pop();
            }
                this.shuxing_0=0;
                this.shuxing_1=0;
                this.shuxing_2=0;
                this.shuxing_3=0;
                this.shuxing_4=0;
            //this.mastorAtt();
            
            
            if(this.mastorL.getComponent('Monster').isdie==true&&this.mastor.getComponent('Monster').isdie==true&&this.mastorR.getComponent('Monster').isdie==true)
            {
                console.log('第一波结束'+this.boShu);
                if(this.boShu<2)
                {
                    console.log('第2波结束'+this.boShu);
                    this.pingBidianji.node.active=true; 
                    this.mastorL.getComponent(cc.Sprite).setVisible(false);
                    this.mastor.getComponent(cc.Sprite).setVisible(false);
                    this.mastorR.getComponent(cc.Sprite).setVisible(false);
                    this.mastor.getComponent('Monster').Label.string="";
                    this.mastorL.getComponent('Monster').Label.string="";
                    this.mastorR.getComponent('Monster').Label.string="";
                    var action = cc.moveTo(2, this.background.x, this.background.y-1280);
                    var finished = cc.callFunc(this.call33, this);
                    var myAction = cc.sequence(action,finished); 
                    this.background.runAction(myAction);
                }else
                {
                    console.log('第22222波结束'+this.boShu);
                    // this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
                    // cc.director.loadScene('xuanguan')
                }



            }else
            {
                
                this.pingBidianji.node.active=false;
            }
            console.log('第333波结束'+this.boShu);
        }
     },
     call33:function()
     {
         
         
          this.pingBidianji.node.active=false;
          this.mastorL.getComponent(cc.Sprite).setVisible(true);
          //this.mastor.getComponent(cc.Sprite).setVisible(true);
          this.mastorR.getComponent(cc.Sprite).setVisible(true);
          
           this.mastorL.getComponent('Monster').isdie=false;
          //this.mastor.getComponent(cc.Sprite).setVisible(true);
          this.mastorR.getComponent('Monster').isdie=false;
          console.log("执行回调");
          console.log("波数：：：：：：：" + this.boShu );
          this.boShu+=1;
          console.log("波数：：：：：：：" + this.boShu );
          this.nextBo();
     },
     
     nextBo:function()
     {
         
         var node = cc.director.getScene().getChildByName('data');  
         //获取节点的node脚本组件，并调用脚本里面的函数   
         var guanka = node.getComponent('NewScript').getDiJiGuan();  
         var GKnode = node.getComponent('NewScript').ChaGK(guanka,this.boShu);  
         //cc.log('常驻节点的data值为'+data);
         console.log("dijige"+GKnode.N3);
         if(GKnode.N3==0)
         {
            this.mastornumber=2;
            console.log("怪物数量：：：：：：：：：:"+ this.mastornumber);
            this.mastor.getComponent('Monster').isdie=true;
            this.mastor.getComponent('Monster').HP=" ";
            this.mastorL.getComponent('Monster').id=GKnode.N1;
            this.mastorR.getComponent('Monster').id=GKnode.N2;
            this.mastorL.getComponent('Monster').fubiaoGk();
            this.mastorR.getComponent('Monster').fubiaoGk();
            this.mastor.getComponent(cc.Sprite).setVisible(false);
         }else
         {
            this.mastornumber=3;
            console.log("怪物数量：：：：：：：：：:"+ this.mastornumber);
            this.mastor.getComponent('Monster').isdie=false;
            this.mastorL.getComponent('Monster').isdie=true;
            this.mastorR.getComponent('Monster').isdie=true;
            this.mastorR.getComponent('Monster').HP=" ";
            this.mastorL.getComponent('Monster').HP=" ";
            this.mastor.getComponent('Monster').id=GKnode.N3;
            this.mastor.getComponent('Monster').fubiaoGk();
            this.mastor.getComponent(cc.Sprite).setVisible(true);
            this.mastorR.getComponent(cc.Sprite).setVisible(false);
            this.mastorL.getComponent(cc.Sprite).setVisible(false);
         }
    
     },
     mastorAtt:function()
     {
         if(this.mastor.getComponent('Monster').isdie==false)
         {
            if(this.heroArry[4].getComponent('hero').isdie==false)
            {
                this.mastor.getComponent('Monster').aunchAnOrdinaryAttack(this.heroArry[4]);
            }else  if(this.heroArry[3].getComponent('hero').isdie==false)
            {
                this.mastor.getComponent('Monster').aunchAnOrdinaryAttack(this.heroArry[3]);
            }else  if(this.heroArry[0].getComponent('hero').isdie==false)
            {
                this.mastor.getComponent('Monster').aunchAnOrdinaryAttack(this.heroArry[0]);
            }else  if(this.heroArry[1].getComponent('hero').isdie==false)
            {
                this.mastor.getComponent('Monster').aunchAnOrdinaryAttack(this.heroArry[1]);
            }else  if(this.heroArry[2].getComponent('hero').isdie==false)
            {
                this.mastor.getComponent('Monster').aunchAnOrdinaryAttack(this.heroArry[2]);
            }
         }
         if(this.mastorL.getComponent('Monster').isdie==false)
         {
            if(this.heroArry[4].getComponent('hero').isdie==false)
            {
                this.mastorL.getComponent('Monster').aunchAnOrdinaryAttack(this.heroArry[4]);
            }else  if(this.heroArry[3].getComponent('hero').isdie==false)
            {
                this.mastorL.getComponent('Monster').aunchAnOrdinaryAttack(this.heroArry[3]);
            }else  if(this.heroArry[0].getComponent('hero').isdie==false)
            {
                this.mastorL.getComponent('Monster').aunchAnOrdinaryAttack(this.heroArry[0]);
            }else  if(this.heroArry[1].getComponent('hero').isdie==false)
            {
                this.mastorL.getComponent('Monster').aunchAnOrdinaryAttack(this.heroArry[1]);
            }else  if(this.heroArry[2].getComponent('hero').isdie==false)
            {
                this.mastorL.getComponent('Monster').aunchAnOrdinaryAttack(this.heroArry[2]);
            }
         }
          if(this.mastorR.getComponent('Monster').isdie==false)
         {
            if(this.heroArry[4].getComponent('hero').isdie==false)
            {
                this.mastorR.getComponent('Monster').aunchAnOrdinaryAttack(this.heroArry[4]);
            }else  if(this.heroArry[3].getComponent('hero').isdie==false)
            {
                this.mastorR.getComponent('Monster').aunchAnOrdinaryAttack(this.heroArry[3]);
            }else  if(this.heroArry[0].getComponent('hero').isdie==false)
            {
                this.mastorR.getComponent('Monster').aunchAnOrdinaryAttack(this.heroArry[0]);
            }else  if(this.heroArry[1].getComponent('hero').isdie==false)
            {
                this.mastorR.getComponent('Monster').aunchAnOrdinaryAttack(this.heroArry[1]);
            }else  if(this.heroArry[2].getComponent('hero').isdie==false)
            {
                this.mastorR.getComponent('Monster').aunchAnOrdinaryAttack(this.heroArry[2]);
            }
         }
     }, 
    clickFinish:function(event)
    {
        if(!this.timeover){
             this.pingBidianji.node.active=true;
            console.log('this.timeover'+this.timeover);
            this.jindutiao.node.stopAllActions();
            this.unschedule(this.callback);
            this.jindutiao.node.x=0;
            this.timeover=false;
             this.velea=0;
            this.finish();
        }
    },
     update: function (dt)
    {
        if(this.xialuo)
        {
             this.blockMove();
        }
    },
    eliminate:function()
    {
        for(var t=0;t<5;t++)
        {
            for(var i=0;i<5;i++)
            {
                if(this.blockArray[t][i].getComponent('fangkuai').index==this.blockArray[t][i+1].getComponent('fangkuai').index)
                {
                    this.columnLookup.push(this.blockArray[t][i]);
                    this.columnLookup.push(this.blockArray[t][i+1]);
                    // console.log("i=="+i);
                    // console.log("i=="+(i+1));
                   
                }else 
                {
                    if(this.columnLookup.length<3)
                    {
                        for(var k=this.columnLookup.length;k>0;k--)
                        {
                        this.columnLookup.pop();
                        }
                    }else
                    {
                        //  console.log("********************");
                        for(var j=0;j<this.columnLookup.length;j++)
                        {
                            //  console.log("加入");
                             this.arrayShouldBeEliminated.push(this.columnLookup[j]);
                        // console.log("linshitest数组中的元素"+this.linshitest[j].getComponent('fangkuai').getL());
                        }
                        for(var z=this.columnLookup.length;z>0;z--)
                        {
                            this.columnLookup.pop();
                        }
                    }
                }
                if(i==4)
                {
                    if(this.columnLookup.length<3)
                    {
                        for(var k=this.columnLookup.length;k>0;k--)
                        {
                            this.columnLookup.pop();
                        }
                        
                    }else
                    {
                        //  console.log("********************");
                        for(var j=0;j<this.columnLookup.length;j++)
                        {
                            this.arrayShouldBeEliminated.push(this.columnLookup[j]);
                        // console.log("linshitest数组中的元素"+this.linshitest[j].getComponent('fangkuai').getL());
                        }
                        for(var z=this.columnLookup.length;z>0;z--)
                        {
                            this.columnLookup.pop();
                        }
                    }
                }
            }
            for(var z1=this.columnLookup.length;z1>0;z1--)
            {
                this.columnLookup.pop();
            }
        }
    },
    eliminateL:function()
    {
        for(var t=0;t<6;t++)
        {
            for(var i=0;i<4;i++)
            {
                if(this.blockArray[i][t].getComponent('fangkuai').index==this.blockArray[i+1][t].getComponent('fangkuai').index)
                {
                    this.RowLookup.push(this.blockArray[i][t]);
                    this.RowLookup.push(this.blockArray[i+1][t]);
                    // console.log("i=="+i);
                    // console.log("i=="+(i+1));
                   
                }else 
                {
                    if(this.RowLookup.length<3)
                    {
                        for(var k=this.RowLookup.length;k>0;k--)
                        {
                        this.RowLookup.pop();
                        }
                        
                    }else
                    {
                        // console.log("********************");
                        for(var j=0;j<this.RowLookup.length;j++)
                        {
                            this.arrayShouldBeEliminated.push(this.RowLookup[j]);
                            // console.log("加入");
                        // console.log("linshitest数组中的元素"+this.linshitest[j].getComponent('fangkuai').getL());
                        }
                        for(var z=this.RowLookup.length;z>0;z--)
                        {
                            this.RowLookup.pop();
                        }
                    }
                }
                if(i==3)
                {
                    if(this.RowLookup.length<3)
                    {
                        for(var k=this.RowLookup.length;k>0;k--)
                        {
                        this.RowLookup.pop();
                        }
                        
                    }else
                    {
                        // console.log("********************");
                        for(var j=0;j<this.RowLookup.length;j++)
                        {
                             this.arrayShouldBeEliminated.push(this.RowLookup[j]);
                        // console.log("linshitest数组中的元素"+this.linshitest[j].getComponent('fangkuai').getL());
                        }
                        for(var z=this.RowLookup.length;z>0;z--)
                        {
                            this.RowLookup.pop();
                        }
                    
                    }
                }
            }
            for(var z1=this.RowLookup.length;z1>0;z1--)
            {
                this.RowLookup.pop();
            }
        }
    },
    toRepeat:function(arr)
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
    exchange:function()
    {
        if(this.downBlockH!=null&&this.downBlockL!=null)
        {
            for(var i=0;i<30;i++)
            {
                if(this.blockArray[parseInt(i/6)][parseInt(i%6)]!=this.blockArray[this.downBlockH][this.downBlockL])
                {
                    if(Math.sqrt(Math.pow(this.blockArray[this.downBlockH][this.downBlockL].x-this.blockArray[parseInt(i/6)][parseInt(i%6)].x,2)+Math.pow(this.blockArray[this.downBlockH][this.downBlockL].y-this.blockArray[parseInt(i/6)][parseInt(i%6)].y,2))<90&&this.blockArray[parseInt(i/6)][parseInt(i%6)].WhetherToEliminate!=true)
                    {
                         console.log("this.jishiqi:::::::::::::"+this.jishiqi);
                        if(this.jishiqi)
                        {
                            this.jishiqi=false;
                            this.count = 0;
                            this.callback = function ()
                            {
                                if (this.count == 3)
                                {
                                    this.jindutiao.node.stopAllActions();
                                    this.pingBidianji.node.active=false;
                                    // 在第六次执行回调时取消这个计时器
                                    this.finish();
                                    this.jishiqi=true;
                                    this.timeover=true;
                                    this.jindutiao.node.x=0;
                                    console.log(this.jindutiao.node.width)
                                    this.unschedule(this.callback);
                                }
                                if(this.count != 3){
                                //this.jindutiao.node.x-=26
                              
                                }
                                console.log(this.count)
                                this.count++;
                            }
                            var actionq = cc.moveTo(8, -199, this.jindutiao.node.y);
                                // 执行动作
                            this.jindutiao.node.runAction(actionq);
                            this.schedule(this.callback, 1);
                            //console.log("this.jishiqi:::::::::::::"+this.jishiqi);
                        }
                        // console.log("碰撞了");
                        //交换碰撞的两个方块本身
                        var temp1=this.blockArray[parseInt(i/6)][parseInt(i%6)];
                        this.blockArray[parseInt(i/6)][parseInt(i%6)]=this.blockArray[this.downBlockH][this.downBlockL];
                        this.blockArray[this.downBlockH][this.downBlockL]=temp1;
                        for(var j=0;j<5;j++)
                        {
                            for(var k=0;k<6;k++)
                            {
                             this.blockArray[j][k].getComponent('fangkuai').setHL(j,k);
                            }
                        }
                        this.blockArray[this.downBlockH][this.downBlockL].y=this.blockArray[this.downBlockH][this.downBlockL].getComponent('fangkuai').getH()*-180+360
                        this.blockArray[this.downBlockH][this.downBlockL].x=this.blockArray[this.downBlockH][this.downBlockL].getComponent('fangkuai').getL()*180-450
                        this.downBlockH=parseInt(i/6);
		                this.downBlockL=parseInt(i%6);
                    }
                }  
            }
        }
    },
     Fill:function()
    {
        var newBlockArray=new Array();
        var newBlockxia=new Array();
        
        
        for(var yy=0;yy<6;yy++){
        
        var xiaoIndex=0;
        var xiaIndex=0;
        var zuihouyigbeixiao=0;
        var huan=0;
        var onec=true;
        // console.log("进入填充");
       for(var i=4;i>=0;i--)
       {
           if(this.blockArray[i][yy].getComponent('fangkuai').WhetherToEliminate==true)
           {
               xiaoIndex++;
               
           }
       }
        // console.log("xiaoIndex：：："+xiaoIndex);
       if(xiaoIndex>0){
             for(var j=0;j<xiaoIndex;j++)
             {
                var newBlock = cc.instantiate(this.blockPre);
                // 将新增的节点添加到 Canvas 节点下面
                newBlock.setPosition(yy*180-450,(xiaoIndex-j)*180+355);
                this.blockNode.addChild(newBlock);
                newBlockxia.push(newBlock);
            }
       }
       for(var k=4;k>=0;k--)
        {
            if(this.blockArray[k][yy].getComponent('fangkuai').WhetherToEliminate==true)
            {
                xiaIndex=k;
                break;
            }
        }
        for(var z=0;z<xiaIndex;z++)
        {
             if(this.blockArray[z][yy].getComponent('fangkuai').WhetherToEliminate!=true)
            {
                newBlockxia.push(this.blockArray[z][yy]);
            }
        }
       
       for(var e=0;e<newBlockxia.length;e++)
       {
            this.blockArray[e][yy]=newBlockxia[e];
            
       }
      for(var j1=0;j1<5;j1++)
        {
            for(var k1=0;k1<6;k1++)
            {
                 this.blockArray[j1][k1].getComponent('fangkuai').setHL(j1,k1);
            }
        }
        this.xialuo=true;
         for(var z2=newBlockArray.length;z2>0;z2--)
            {
                newBlockArray.pop();
            }
             for(var z3=newBlockxia.length;z3>0;z3--)
            {
                newBlockxia.pop();
            }
        
        }
    },
   
    //控制下落的函数
    blockMove:function()
    {
        var snm=0;
        
        for(var i=0; i<5; i++)
 		{
 			for(var j=0; j<6; j++)
 			{
				if(this.blockArray[i][j].getComponent('fangkuai').WhetherToEliminate!= true && this.blockArray[i][j].y>(this.blockArray[i][j].getComponent('fangkuai').getH()*-180+360))
				{
				        // console.log("123456"+this.velea);
						this.blockArray[i][j].y-=18;
						if(this.blockArray[i][j].y<(this.blockArray[i][j].getComponent('fangkuai').getH()*-180+360))
						{
						    this.blockArray[i][j].y=(this.blockArray[i][j].getComponent('fangkuai').getH()*-180+360)
						}else
						{
						  //  this.velea+=1.55;
						}
						
						
				}else
				{
				    snm++;
				    if(snm==30)
				    {
				         this.velea=1;
				        this.xialuo=false;
				        this.finish();
				         snm=0;
				    }
				}
				
 			}
 		}
    }
});
