cc.Class({
    extends: cc.Component,

    properties: {
        
        
        // yinxiao:       { default:null,type:cc.Sprite },
        // yinyue:        { default:null,type:cc.Sprite },
        // tishengjimina: { default:null,type:cc.Node   }
        
        
    },

    // use this for initialization
    onLoad: function () {


    },
    toXuanGuan:function()
    {
         this.node.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(function(){
            cc.director.loadScene('GuanQia')
        })));
    },
    toMenu:function()
    {
         this.node.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(function(){
        cc.director.loadScene('menu')
        })));
    },
    tohelp:function()
    {
         this.node.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(function(){
        cc.director.loadScene('help')
        })));
    },
    toCard:function()
    {
         this.node.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(function(){
        cc.director.loadScene('card')
        })));
    },
    toJueSe:function()
    {
        this.node.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(function(){
        cc.director.loadScene('juese')
        })));
    },
    toSheZhi:function()
    {
        this.node.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(function(){
        cc.director.loadScene('shezhi')
        })));
    },
    guanBiKaiQiYinXiao:function()
    {
        if(this.yinxiao.node.active===false)
        {
            this.yinxiao.node.active=true;
        }else if(this.yinxiao.node.active===true)
        {
            this.yinxiao.node.active=false;
        }
    },
     guanYinXiao:function()
    {
        if(this.yinyue.node.active===false)
        {
            this.yinyue.node.active=true;
        }else if(this.yinyue.node.active===true)
        {
            this.yinyue.node.active=false;
            
        }
        
    },
    tishengjiemian:function()
    {
        // this.pingBidianji.node.active=false;
       this. tishengjimina.active=true;
    },
    tishengjiemian2:function()
    {
        // this.pingBidianji.node.active=false;
       this. tishengjimina.active=false;
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
