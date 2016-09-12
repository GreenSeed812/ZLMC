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
        isdie:          {   default:true  },//是否死亡
        id:             {   default:0      },
        POCI:           {   default:0      },
        xuetiao:{default:null,type:cc.ProgressBar},
        hpmax:{default:0},
        shoushang:{default:0},
        shuxing:{default:0},
    },

    // use this for initialization
    onLoad: function () {
    
        this.Label.string=''+parseInt(this.HP).toString();
        
    },
    fubiaoGk:function()
    {   
        if(this.isdie)
        {
               this.xuetiao.getComponent(cc.Sprite).setVisible(false)
        }else
        {
             this.xuetiao.getComponent('xuetiao ').xueShow(this.hpmax,this.hpmax);
        }
       
        var self=this;
        var node = cc.director.getScene().getChildByName('data');  
        var GKnode = node.getComponent('NewScript').ChaNPC(this.id); 
        this.Arms=GKnode.IPT_APT;
        this.HP=GKnode.IPT_LF;
        this.hpmax=GKnode.IPT_LF;
        this.defenseForce=GKnode.IPT_DEF;
        this.attackPower=GKnode.IPT_ATK;
        this.Label.string=''+this.HP.toString();
        cc.loader.loadRes('guaiwudiaoluo/'+GKnode.SUR, cc.SpriteFrame, function (err, spriteFrame) 
        {
            // console.log("LLLLL::::::::"+err);
            self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            //this.jueseSprite.getComponent(cc.Sprite).spriteFrame._refreshTexture(texture)
        });
    },
     aunchAnOrdinaryAttack:function(hero)
    {
       this.outPut=this.attackPower;
       hero.getComponent('hero').injured(this.outPut);
    },
    injured:function(shoushang,shuxing)
    {
        //  console.log("进入怪物受伤")
        this.shoushang=shoushang;
        this.shuxing=shuxing;
         switch(shuxing)
         {
             case 0:
                 this.getComponent(cc.Animation).playAdditive('ShouJiTeXiao_jin');
                 break;
             case 1:
                 this.getComponent(cc.Animation).playAdditive('ShouJiTeXiao_mu');
                 break;
             case 2:
                 this.getComponent(cc.Animation).playAdditive('ShouJiTeXiao_shui');
                 break;
             case 3:
                 this.getComponent(cc.Animation).playAdditive('ShouJiTeXiao_huo');
                 break;
             case 4:
                 this.getComponent(cc.Animation).playAdditive('ShouJiTeXiao_tu');
                 break;
         }
           this. HP= this. HP-( this.shoushang-this.defenseForce*1.2);
        if( this.HP<=0)
        {
            this.HP=0
            this.isdie=true;
        }
        this.Label.string=''+parseInt(this.HP).toString();
        this.xuetiao.getComponent('xuetiao ').xueShow(this.HP,this.hpmax);
         
         
         
    },
    
    
    
    
    
    jieshu: function () {
        console.log("jieshujishujieshujieshu");
      
    },
    // called every frame, uncomment this function to activate update callback
     update: function () {
         
        if(this.isdie==true)
        {
            this.getComponent(cc.Sprite).setVisible(false)
            this.xuetiao.getComponent(cc.Sprite).setVisible(false);
             this.Label.string='';
            
            // console.log("oo"+ this.xuetiao.name);
        }else
        {
            this.getComponent(cc.Sprite).setVisible(true)
            this.xuetiao.getComponent(cc.Sprite).setVisible(true)
            
             
        }
     },
});
