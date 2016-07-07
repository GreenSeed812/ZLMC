cc.Class({
    extends: cc.Component,

    properties: {
        Arms:           {   default:0   },//种类    
        HP:             {   default:0   },//生命值
        defenseForce:   {   default:0   },//防御力
        attackPower:    {   default:0   },//攻击力
        MP:             {   default:0   },//魔法值
        buffPlacer:     {   default:0   },//技能
        propertyDamage: {   default:0   },//属性增伤
        outPut:         {   default:0   },//计算后的输出伤害
        Label:          {   default: null,type: cc.Label    },
        isdie:          {   default:false  },//是否死亡
        id:             {   default:0      },
        POCI:           {   default:0      }
    },

    // use this for initialization
    onLoad: function () {
    
        this.Label.string=''+this.HP.toString();
    },
    fubiaoGk:function()
    {   
        var node = cc.director.getScene().getChildByName('data');  
        var GKnode = node.getComponent('NewScript').ChaNPC(this.id); 
        this.Arms=GKnode.IPT_APT;
        this.HP=GKnode.IPT_LF;
        this.defenseForce=GKnode.IPT_DEF;
        this.attackPower=GKnode.IPT_ATK;
        this.Label.string=''+this.HP.toString();
    },
     aunchAnOrdinaryAttack:function(hero)
    {
       this.outPut=this.attackPower;
       hero.getComponent('hero').injured(this.outPut);
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
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
