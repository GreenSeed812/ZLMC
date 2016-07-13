cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function () {

    },
    isLose:function()
    {
         this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        cc.director.loadScene('xuanguan')
        })));
    },
     isWin:function()
    {
         this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        cc.director.loadScene('xuanguan')
        })));
    }
    
    
    
    
});
