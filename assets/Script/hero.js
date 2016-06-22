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
    },

    // use this for initialization
    onLoad: function () {
        this.Label.string=''+this.HP.toString();
        var str='[{"xlid":"houyuxuan","xldigitid":123456,"topscore":2000,"topplaytime":"2009-08-20"},{"xlid":"YYY","xldigitid":123456,"topscore":2000,"topplaytime":"2009-08-20"}]';
        var obj = eval('(' + str + ')');
        console.log("****************************************" + obj[1]["xlid"]);
    },
    aunchAnOrdinaryAttack:function(monster,blocknum)
    {
        switch(this.Arms)  
        {
            case 0://金属性的伤害
                   if(monster.getComponent('Monster').Arms==1)
                {
                    this. outPut= this.attackPower+(this.attackPower*blocknum*0.1)+(this.attackPower+(this.attackPower*blocknum*0.1))/2;//金属性对木属性多造成50%的伤害
                }else if(monster.getComponent('Monster').Arms==0)
                {
                    this.outPut= this.attackPower+(this.attackPower*blocknum*0.1)-(this.attackPower+(this.attackPower*blocknum*0.1))/2;//金属性对火属性少造成50%的伤
                }else
                {
                    this.outPut=this.attackPower+(this.attackPower*blocknum*0.1);
                }
                monster.getComponent('Monster').injured(this.outPut);
                break;
            case 1://木属性的伤害
                if(monster.getComponent('Monster').Arms==4)
                {
                    this. outPut= this.attackPower+(this.attackPower*blocknum*0.1)+(this.attackPower+(this.attackPower*blocknum*0.1))/2;//木属性对土属性多造成50%的伤害
                }else if(monster.getComponent('Monster').Arms==0)
                {
                    this.outPut= this.attackPower+(this.attackPower*blocknum*0.1)-(this.attackPower+(this.attackPower*blocknum*0.1))/2;//木属性对金属性少造成50%的伤
                }else
                {
                    this.outPut=this.attackPower+(this.attackPower*blocknum*0.1);
                }
                monster.getComponent('Monster').injured(this.outPut);
                break;
            case 2://水属性的伤害
                
                if(monster.getComponent('Monster').Arms==3)
                {
                    this. outPut= this.attackPower+(this.attackPower*blocknum*0.1)+(this.attackPower+(this.attackPower*blocknum*0.1))/2;//水属性对火属性多造成50%的伤害
                }else if(monster.getComponent('Monster').Arms==1)
                {
                    this.outPut= this.attackPower+(this.attackPower*blocknum*0.1)-(this.attackPower+(this.attackPower*blocknum*0.1))/2;//水属性对木属性少造成50%的伤
                }else
                {
                    this.outPut=this.attackPower+(this.attackPower*blocknum*0.1);
                }
                monster.getComponent('Monster').injured(this.outPut);
                break;
                
                
            case 3://火属性的伤害
                if(monster.getComponent('Monster').Arms==0)
                {
                    this. outPut= this.attackPower+(this.attackPower*blocknum*0.1)+(this.attackPower+(this.attackPower*blocknum*0.1))/2;//火属性对金属性多造成50%的伤害
                }else if(monster.getComponent('Monster').Arms==2)
                {
                    this.outPut= this.attackPower+(this.attackPower*blocknum*0.1)-(this.attackPower+(this.attackPower*blocknum*0.1))/2;//火属性对水属性少造成50%的伤
                }else
                {
                    this.outPut=this.attackPower+(this.attackPower*blocknum*0.1);
                }
                monster.getComponent('Monster').injured(this.outPut);
                break;
            case 4://土属性的伤害
                if(monster.getComponent('Monster').Arms==2)
                {
                    this. outPut= this.attackPower+(this.attackPower*blocknum*0.1)+(this.attackPower+(this.attackPower*blocknum*0.1))/2;//土属性对水属性多造成50%的伤害
                }else if(monster.getComponent('Monster').Arms==1)
                {
                    this.outPut= this.attackPower+(this.attackPower*blocknum*0.1)-(this.attackPower+(this.attackPower*blocknum*0.1))/2;//土属性对木属性少造成50%的伤
                }else
                {
                    this.outPut=this.attackPower+(this.attackPower*blocknum*0.1);
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
