cc.Class({
    extends: cc.Component,

    properties: {
       
       
       
    },
    // use this for initialization
    onLoad: function () {
        

    },
    close:function()
    {
       this.node.removeFromParent();
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
