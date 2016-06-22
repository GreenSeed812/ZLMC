cc.Class({
    extends: cc.Component,

    properties: {
        frame:             { default:[], type:cc.SpriteFrame },
        index:             { default:0                       },
        hang:              { default:0                       },
        lie:               { default:0                       },
        visible:           { default:false                   },
        WhetherToEliminate:{ default:false                   }
    },

    // use this for initialization
    onLoad: function ()
    {
        var sprite = this.getComponent(cc.Sprite);
        this.index=parseInt(Math.random()*(5-0)+0);
        sprite.spriteFrame = this.frame[this.index];//根据ID来更换精灵的纹理贴图
    },
    setHL:function(H,L)
    {
        this.hang=H;
        this.lie=L;
    },
    setH:function(H)
    {
        this.hang=H;
    },
    setL:function(L)
    {
        this.lie=L;
    },
    getH:function()
    {
        return this.hang;
    },
    getL:function()
    {
        return this.lie;
    },

    // called every frame, uncomment this function to activate update callback
     update: function (dt) {
         var sprite = this.getComponent(cc.Sprite);
        sprite.spriteFrame = this.frame[this.index];//根据ID来更换精灵的纹理贴图

     },
});
