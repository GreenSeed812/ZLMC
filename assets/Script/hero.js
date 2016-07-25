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
       Id:             {   default: "" }
    },
    // use this for initialization
    onLoad: function () {
        
        
        
        var node = cc.director.getScene().getChildByName('data');  
        var GKnode = node.getComponent('NewScript').ChaPerson(this.Id); 
        console.log(":::::::::::::"+GKnode);
        
        this.Arms=GKnode.IPT_APT;
        this.HP=GKnode.IPT_LF;
        this.defenseForce=GKnode.IPT_DEF;
        this.attackPower=GKnode.IPT_ATK;
        this.Label.string=''+this.HP.toString();
    },
    aunchAnOrdinaryAttack:function(monster,blocknum)
    {
        console.log("英雄输出伤害RRR"+this.Arms+blocknum);
        switch(parseInt(this.Arms))  
        {
            case 0://金属性的伤害
                  console.log("jin");
                if(monster.getComponent('Monster').Arms==1)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                    this. outPut= this.attackPower*(1+blocknum*0.1)*(1+0.5);//金属性对木属性多造成50%的伤害
                    console.log("英雄输出伤害"+this. outPut);
                    }
                    
                }else if(monster.getComponent('Monster').Arms==0)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                   this. outPut= this.attackPower*(1+blocknum*0.1)*(1-0.5);;//金属性对火属性少造成50%的伤
                    console.log("英雄输出伤害"+this. outPut);
                    }
                }else
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                    this. outPut= this.attackPower*(1+blocknum*0.1);
                     console.log("英雄输出伤害"+this. outPut);
                    }
                }
                monster.getComponent('Monster').injured(this.outPut);
                break;
            case 1://木属性的伤害
             console.log("mu");
                if(monster.getComponent('Monster').Arms==4)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                    this. outPut= this.attackPower*(1+blocknum*0.1)*(1+0.5);//木属性对土属性多造成50%的伤害
                     console.log("英雄输出伤害"+this. outPut);
                    }
                }else if(monster.getComponent('Monster').Arms==0)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                   this. outPut= this.attackPower*(1+blocknum*0.1)*(1-0.5);//木属性对金属性少造成50%的伤
                    console.log("英雄输出伤害"+this. outPut);
                    }
                }else
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                   this. outPut= this.attackPower*(1+blocknum*0.1);
                    }
                }
                monster.getComponent('Monster').injured(this.outPut);
                break;
            case 2://水属性的伤害
             console.log("shui");
                
                if(monster.getComponent('Monster').Arms==3)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                    this. outPut= this.attackPower*(1+blocknum*0.1)*(1+0.5);//水属性对火属性多造成50%的伤害
                     console.log("英雄输出伤害"+this. outPut);
                    }
                }else if(monster.getComponent('Monster').Arms==1)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                    this. outPut= this.attackPower*(1+blocknum*0.1)*(1-0.5);//水属性对木属性少造成50%的伤
                     console.log("英雄输出伤害"+this. outPut);
                    }
                }else
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                        this. outPut= this.attackPower*(1+blocknum*0.1);
                    }
                }
                monster.getComponent('Monster').injured(this.outPut);
                break;
            case 3://火属性的伤害
             console.log("huo");
                if(monster.getComponent('Monster').Arms==0)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                   this. outPut= this.attackPower*(1+blocknum*0.1)*(1+0.5);//火属性对金属性多造成50%的伤害
                    console.log("英雄输出伤害"+this. outPut);
                    }
                }else if(monster.getComponent('Monster').Arms==2)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                   this. outPut= this.attackPower*(1+blocknum*0.1)*(1-0.5);//火属性对水属性少造成50%的伤
                    console.log("英雄输出伤害"+this. outPut);
                    }
                }else
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                        
                    this. outPut= this.attackPower*(1+blocknum*0.1);
                    }
                }
                monster.getComponent('Monster').injured(this.outPut);
                break;
            case 4://土属性的伤害
             console.log("tu");
                if(monster.getComponent('Monster').Arms==2)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                    this. outPut= this.attackPower*(1+blocknum*0.1)*(1+0.5);//土属性对水属性多造成50%的伤害
                     console.log("英雄输出伤害"+this. outPut);
                    }
                }else if(monster.getComponent('Monster').Arms==1)
                {
                    if(blocknum<0){
                        blocknum=0;
                    } else{  
                   this. outPut= this.attackPower*(1+blocknum*0.1)*(1-0.5);//土属性对木属性少造成50%的伤
                    console.log("英雄输出伤害"+this. outPut);
                    }
                }else
                {if(blocknum<0){
                        blocknum=0;
                    } else{  
                    this. outPut= this.attackPower*(1+blocknum*0.1);
                    }
                }
                monster.getComponent('Monster').injured(this.outPut);
                break;    
        }
    },
    
     injured:function(shoushang)
    {
         this. HP= this. HP-(shoushang-this.defenseForce*1.2);
        if( this.HP<=0)
        {
             this.HP=0
             this.isdie=true;
        }
        this.Label.string=''+this.HP.toString();
    },
    addHP:function(hp)
    {
        console.log("diaoyongle");
        if( this.HP<this.maxHP){
           this.HP+=hp;
        }
        if(this.HP>this.maxHP)
        {
            this.HP=this.maxHP;
        }
        this.Label.string=''+this.HP.toString();
    },
    // called every frame, uncomment this function to activate update callback
     update: function (dt) 
     {
          
     }

    // },
});
