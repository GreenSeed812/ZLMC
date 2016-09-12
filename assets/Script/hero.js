cc.Class({
    extends: cc.Component,

    properties: {
       Arms:           {   default:0   },//种类    
       HP:             {   default:0   },//生命值
       maxHP:          {   default:0   },//最大生命值
       defenseForce:   {   default:0   },//防御力
       attackPower:    {   default:0   },//攻击力
       MP:             {   default:0   },//魔法值
       buffPlacer:     {   default:0   },//技能
       propertyDamage: {   default:0   },//属性增伤
       outPut:         {   default:0   },//计算后的输出伤害
       Label:          {   default: null,type: cc.Label},
       isdie:          {   default:false  },//是否死亡
       item:           {   default:null },//被动技能
       Id:             {   default: "" },
       xueTioa:{default:null,type:cc.ProgressBar},
       hpmax:{default:0}
    },
    // use this for initialization
    onLoad: function () {
        
        
        var self=this;
        
        var node = cc.director.getScene().getChildByName('data');  
        //var nodeNS = cc.find('data').getComponent('NerScript');
        
        var GKnode = node.getComponent('NewScript').ChaPerson(node.getComponent('NewScript').JSshujuCache[this.Arms].ID ); 
        var benDi=node.getComponent('NewScript').chaJSshujuCache(node.getComponent('NewScript').JSshujuCache[this.Arms].ID ); 
        
        
        
        
        // console.log("查人：：：：：："+this.Id);
        //  console.log("查数据：：：：："+benDi.SM);
        // console.log(":::::::::::::"+GKnode);
        
        
        
        
        
        
        // // shuzu.ID = node.ID;
        //                 shuzu.GJ = node.IPT_ATK;
        //                 shuzu.FY = node.IPT_DEF;
        //                 shuzu.SM = node.IPT_LF;
        
        
        
        
        
        
        this.Arms=GKnode.IPT_APT;
        this.HP=benDi.SM;
        this.hpmax=benDi.SM;
        this.defenseForce=benDi.FY;
        this.attackPower=benDi.GJ;
        
        
        
        
        
        this.Label.string=''+parseInt(this.HP).toString();
        
        
        
        
        
           cc.loader.loadRes('yingXiong/'+GKnode.SUR1, cc.SpriteFrame, function (err, spriteFrame) 
        {
            // console.log("LLLLL::::::::"+err);
            self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            //this.jueseSprite.getComponent(cc.Sprite).spriteFrame._refreshTexture(texture)
        });
        
        
        
        
        
        
        
    },
     aunchAnOrdinaryAttack:function(monster,blocknum)
    {
        // console.log("英雄输出伤害RRR"+this.Arms+blocknum);
        switch(parseInt(this.Arms))  
        {
            case 0://金属性的伤害
                //   console.log("jin");
                if(monster.getComponent('Monster').Arms==1)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                    this. outPut= this.attackPower*(10+blocknum*0.1)*(1+0.5);//金属性对木属性多造成50%的伤害
                    // console.log("英雄输出伤害"+this. outPut);
                    }
                    
                }else if(monster.getComponent('Monster').Arms==0)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                   this. outPut= this.attackPower*(10+blocknum*0.1)*(1-0.5);;//金属性对火属性少造成50%的伤
                    // console.log("英雄输出伤害"+this. outPut);
                    }
                }else
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                    this. outPut= this.attackPower*(10+blocknum*0.1);
                    //  console.log("英雄输出伤害"+this. outPut);
                    }
                }
                monster.getComponent('Monster').injured(this.outPut,0);
                break;
            case 1://木属性的伤害
            //  console.log("mu");
                if(monster.getComponent('Monster').Arms==4)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                    this. outPut= this.attackPower*(10+blocknum*0.1)*(1+0.5);//木属性对土属性多造成50%的伤害
                    //  console.log("英雄输出伤害"+this. outPut);
                    }
                }else if(monster.getComponent('Monster').Arms==0)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                   this. outPut= this.attackPower*(10+blocknum*0.1)*(1-0.5);//木属性对金属性少造成50%的伤
                    // console.log("英雄输出伤害"+this. outPut,1);
                    }
                }else
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                   this. outPut= this.attackPower*(10+blocknum*0.1);
                    }
                }
                monster.getComponent('Monster').injured(this.outPut,1);
                break;
            case 2://水属性的伤害
            //  console.log("shui");
                
                if(monster.getComponent('Monster').Arms==3)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                    this. outPut= this.attackPower*(10+blocknum*0.1)*(1+0.5);//水属性对火属性多造成50%的伤害
                    //  console.log("英雄输出伤害"+this. outPut);
                    }
                }else if(monster.getComponent('Monster').Arms==1)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                    this. outPut= this.attackPower*(10+blocknum*0.1)*(1-0.5);//水属性对木属性少造成50%的伤
                    //  console.log("英雄输出伤害"+this. outPut);
                    }
                }else
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                        this. outPut= this.attackPower*(10+blocknum*0.1);
                    }
                }
                monster.getComponent('Monster').injured(this.outPut,2);
                break;
            case 3://火属性的伤害
             console.log("huo");
                if(monster.getComponent('Monster').Arms==0)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                   this. outPut= this.attackPower*(1+blocknum*0.1)*(1+0.5);//火属性对金属性多造成50%的伤害
                    // console.log("英雄输出伤害"+this. outPut);
                    }
                }else if(monster.getComponent('Monster').Arms==2)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                   this. outPut= this.attackPower*(10+blocknum*0.1)*(1-0.5);//火属性对水属性少造成50%的伤
                    // console.log("英雄输出伤害"+this. outPut);
                    }
                }else
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                        
                    this. outPut= this.attackPower*(10+blocknum*0.1);
                    }
                }
                monster.getComponent('Monster').injured(this.outPut,3);
                break;
            case 4://土属性的伤害
             console.log("tu");
                if(monster.getComponent('Monster').Arms==2)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                    this. outPut= this.attackPower*(10+blocknum*0.1)*(1+0.5);//土属性对水属性多造成50%的伤害
                    //  console.log("英雄输出伤害"+this. outPut);
                    }
                }else if(monster.getComponent('Monster').Arms==1)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                   this. outPut= this.attackPower*(10+blocknum*0.1)*(1-0.5);//土属性对木属性少造成50%的伤
                    // console.log("英雄输出伤害"+this. outPut);
                    }
                }else
                {if(blocknum<0){
                        blocknum=0;
                    } else{  
                    this. outPut= this.attackPower*(10+blocknum*0.1);
                    }
                }
                monster.getComponent('Monster').injured(this.outPut,4);
                break;    
        }
    },
    
     injured:function(shoushang)
    {
        
        this.getComponent(cc.Animation).play();
               
                 

         
         this. HP= this. HP-(shoushang-this.defenseForce*1.2);
        if( this.HP<=0)
        {
             this.HP=0
             this.isdie=true;
              this.Label.string='';
            
        }else
        {
            this.Label.string=''+parseInt(this.HP).toString();
        }
        this.xueTioa.getComponent('xuetiao ').xueShow(this.HP,this.hpmax);
     
       
    },
    addHP:function(hp)
    {
        // console.log("diaoyongle");
        if( this.HP<this.maxHP){
           this.HP+=hp;
        }
        if(this.HP>this.maxHP)
        {
            this.HP=this.maxHP;
           
        }
        this.xueTioa.getComponent('xuetiao ').xueShow(this.HP,this.hpmax);
        this.Label.string=''+parseInt(this.HP).toString();
        
        
        
        
        
        
    },
    // called every frame, uncomment this function to activate update callback
     update: function (dt) 
     {
          
     }

    // },
});
