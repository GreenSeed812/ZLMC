cc.Class({
    extends: cc.Component,

    properties: {
        
        
        
        
        
        
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
    



    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
