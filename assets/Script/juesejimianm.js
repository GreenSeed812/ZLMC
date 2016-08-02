cc.Class({
    extends: cc.Component,

    properties: {
        tisheng:{default:null,type:cc.Prefab},
        // genghuan:{default:null,type:cc.Node},
        // chakan:{default:null,type:cc.Node},
        // zhuanhuan:{default:null,type:cc.Node},
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
         this.genghuan.active=true;
    },
    showChaKan:function()
    {
         this.chakan.active=true;
    },
    showZhuanHuan:function()
    {
         this.zhuanhuan.active=true;
    },
    closeTisheng:function()
    {
        this.node.removeChild(tiShengFace); 
    },
    closeGenghuan:function()
    {
         this.genghuan.active=false;
    },
    closeChaKan:function()
    {
         this.chakan.active=false;
    },
    closeZhuanHuan:function()
    {
         this.zhuanhuan.active=false;
    }
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {
    // },
});
