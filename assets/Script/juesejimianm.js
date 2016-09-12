cc.Class({
    extends: cc.Component,

    properties: {
        tisheng:{default:null,type:cc.Prefab},
        chakan:{default:null,type:cc.Prefab},
        genghuan:{default:null,type:cc.Prefab},
        zhuanhuan:{default:null,type:cc.Prefab},
    },
    // use this for initialization
    onLoad: function () {
        
    },
    showTisheng:function()
    {
        var tiShengFace=cc.instantiate(this.tisheng);
        tiShengFace.setPosition(0,0);
        this.node.addChild(tiShengFace); 
    },
    showGenghuan:function()
    {
        var gengHuanFace=cc.instantiate(this.genghuan);
        gengHuanFace.setPosition(0,0);
        this.node.addChild(gengHuanFace); 
    },
    showChaKan:function()
    {
        var chakanFace = cc.instantiate(this.chakan);
        chakanFace.setPosition(0,0);
        this.node.addChild(chakanFace); 
    },
    showZhuanHuan:function()
    {
        var zhuanHuanFace = cc.instantiate(this.zhuanhuan);
        zhuanHuanFace.setPosition(0,0);
        this.node.addChild(zhuanHuanFace);
        zhuanHuanFace.getComponent('zhuanhuanPre').JueSe = this;
    },
    closeTisheng:function()
    {
        this.node.removeChild(tiShengFace); 
    },
    closeGenghuan:function()
    {
        this.node.removeChild(gengHuanFace); 
    },
    closeChaKan:function()
    {
        this.node.removeChild(chakanFace);
    },
    closeZhuanHuan:function()
    {
         this.zhuanhuan.active=false;
    }
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {
    // },
});
